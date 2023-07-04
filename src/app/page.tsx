import { PostCard } from "@/components/post/card";
import { PostInfo } from "@/components/post/info";
import { PostTitle } from "@/components/post/title";
import { allPosts } from "contentlayer/generated";

async function getAllPosts() {
  const posts = allPosts.filter(post => post.published)

  if (posts.length === 0) throw new Error("No posts available")

  return posts.sort((a, b) => {
    return b.index - a.index
  })
}

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <main className='min-h-screen flex flex-col py-6 px-8 container mx-auto'>
      <div className="text-accent-full font-black text-8xl -tracking-[5px] mb-[128px]">
        <h1>Fagner Sales Blog</h1>
      </div>

      <div>
        <h1 className="text-2xl font-black text-accent-full">Recent Posts</h1>

        <div className="divide-y divide-gray-600/40">
          {posts.map((post, index) => (
            <PostCard key={index}>
              <PostTitle
                index={index}
                title={post.title}
                slug={post.slugAsParams}
              />
              <PostInfo postedAt={post.publishedAt} views={0} />
            </PostCard>
          ))}
        </div>
      </div>
    </main>
  )
}
