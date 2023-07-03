import { allPosts } from 'contentlayer/generated'
import { env } from 'env.mjs'

export default async function sitemap() {
  const posts = allPosts
    .filter(post => !!post.published)
    .map(post => ({
      url: `${env.NEXT_PUBLIC_APP_URL}/${post.slugAsParams}`,
      lastModified: new Date().toISOString()
    }))

  const routes = [''].map(route => ({
    url: `${env.NEXT_PUBLIC_APP_URL}${route}`,
    lastModified: new Date().toISOString()
  }))

  return [...posts, ...routes]
}