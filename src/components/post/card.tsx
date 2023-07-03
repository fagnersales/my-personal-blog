import { PropsWithChildren } from 'react'

export function PostCard({children}: PropsWithChildren) {
  return <div className='p-2'>
    {children}
  </div>
}