import type { PostModel } from './src/interfaces/post-model'

export const config = {
  site: 'https://astro-blog-theme.vercel.app',
  description:
    '梦话留到梦里说。',
  siteName: 'MonmoonのBlog',
  author: 'Monmoon',
  language: 'zh-CN',

  tip: '检测到页面内容有更新，是否刷新页面',
  tip_confirm: '是',
  tip_cancel: '否',

  postsPerPage: 12,
  linkAttr: 'abbrlink',
}

export const getPostLink = (post: PostModel) => `/posts/${post.data[config.linkAttr]}`
