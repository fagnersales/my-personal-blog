import { PropsWithChildren } from 'react'

export function PostCard({children}: PropsWithChildren) {
  return <div className='py-2'>
    {children}
  </div>
}