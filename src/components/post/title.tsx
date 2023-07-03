'use client'

import { useRouter } from "next/navigation"

interface PostTitleProps {
  index: number
  title: string
  slug: string
}

export function PostTitle(props: PostTitleProps) {
  const text = `${props.index}. ${props.title}`

  const router = useRouter()

  return (
    <div>
      <button onClick={() => {
        router.push(`/${props.slug}`)
      }}>
        <h3 className='text-accent-light hover:text-accent-full hover:cursor-pointer'>{text}</h3>
      </button>
    </div>
  )
}