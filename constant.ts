import type { PostModel } from './src/interfaces/post-model'

export const config = {
  site: 'https:/',
  description:
    '梦话留到梦里说。',
  siteName: 'MonmoonのBlog',
  author: 'Monmoon',
  language: 'zh-CN',

  postsPerPage: 12,
  linkAttr: 'abbrlink',
}

export const getPostLink = (post: PostModel) => `/posts/${post.data[config.linkAttr]}`
