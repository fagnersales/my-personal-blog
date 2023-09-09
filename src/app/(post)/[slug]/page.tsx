import '@/styles/mdx.css'
import { Mdx } from '@/components/mdx'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'
import { absoluteUrl } from '@/lib/utils'

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = props.params

  const post = allPosts.find(post => post.slugAsParams === slug)

  if (!post) return {}

  const ogUrl = absoluteUrl(`/og/${post.slug}.png`)

  return {
    title: post.title,
    description: post.description,
    authors: [{
      name: "Fagner Sales",
      url: "https://github.com/fagnersales"
    }],
    publisher: "Fagner Sales",
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(`/posts/${post.slug}`),
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl],
    },
  }
}

export async function generateStaticParams() {
  const posts = allPosts.filter(post => !!post.published)

  return posts.map(post => ({
    slug: post.slugAsParams
  }))
}

async function getPostFromParams(slug: string) {
  const post = allPosts.find(post => post.slugAsParams === slug)

  if (!post) return null

  return post
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

export default async function Page(props: PageProps) {
  const post = await getPostFromParams(props.params.slug)

  if (!post) notFound()

  return (
    <article className='container min-h-screen relative max-w-3xl px-8 py-6 flex flex-col gap-4 lg:mx-auto lg:py-10'>
      <h1 className='text-accent-full text-4xl font-black text-left'>{post.title}</h1>
      <h2 className='text-gray-600'>Published at {formatDate(post.publishedAt)}</h2>

      <Mdx code={post.body.code} />

      <Link
        href='/'
        className='max-w-fit place-self-center flex px-4 py-2 border-2 border-accent-light text-white/80 hover:cursor-pointer hover:border-accent-full hover:text-white'
      >
        <ChevronLeft />
        See All Posts
      </Link>
    </article>
  )
}
