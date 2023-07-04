'use client'

import { Heart } from 'lucide-react'
import { useState } from 'react'

interface PostInfoProps {
  postedAt: string
  views: number
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export function PostInfo(props: PostInfoProps) {
  const [heartsCounter, setHeartsCounter] = useState<number>(0)

  const incrementHearts = () => {
    setHeartsCounter(heartsCounter => heartsCounter + 1)
  }

  return (
    <div className='flex gap-2'>
      <h2 className='text-gray-600'>{formatDate(props.postedAt)}</h2>
      <p className='text-gray-600'>-</p>
      <div className='flex gap-1 items-center max-w-fit'>
        <button onClick={incrementHearts}>
          <Heart
            className='text-gray-600 hover:text-red-300/50'
          />
        </button>
        <h3 className='text-gray-600'>{heartsCounter}</h3>
      </div>
    </div>
  )
}