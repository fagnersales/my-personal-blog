import { allPosts } from "contentlayer/generated";
import { ImageResponse } from "next/server";

export const size = {
  width: 1200,
  height: 630,
}

export default async function Image({ params: { slug } }: { params: { slug: string } }) {
  const post = allPosts.find(post => post.slugAsParams === slug)

  const font = fetch("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap").then(res => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        className="bg-white w-full h-full flex justify-center align-middle text-6xl"
      >
        {post?.title || 'Unknown Title'}
      </div>
    )
  ), {
    ...size,
    fonts: [
      {
        name: 'Inter',
        data: await font,
        style: 'normal',
        weight: 400
      }
    ]
  }
}