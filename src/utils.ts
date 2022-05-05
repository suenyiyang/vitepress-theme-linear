/* eslint-disable no-console */
import fs from 'fs-extra'
import globby from 'globby'
import matter from 'gray-matter'
import type { Post } from './types'

export async function getPosts(locale: string, timezone: string): Promise<Post[]> {
  const paths = await getPostMDFilePaths()
  const posts = await Promise.all(
    paths.map(async (item) => {
      const content = await fs.readFile(item, 'utf-8')
      const { data } = matter(content)
      data.date = data.date || (await fs.stat(item)).atime.toString()
      data.date = _convertDate(data.date, locale, timezone)
      return {
        frontmatter: data,
        regularPath: `/${item.replace('docs/posts', 'posts').replace('.md', '.html')}`,
      }
    }),
  )
  posts.sort(_compareDate)
  return posts
}

function _convertDate(date: string, locale: string, timezone: string) {
  const json_date = new Date(date).toLocaleString(locale, {
    timeZone: timezone,
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })
  return json_date
}

function _compareDate(obj1: Post, obj2: Post) {
  return obj1.frontmatter.date > obj2.frontmatter.date ? 1 : -1
}

async function getPostMDFilePaths() {
  const paths = await globby(['**.md'], {
    ignore: ['node_modules', 'README.md'],
  })
  return paths.filter(item => item.includes('posts/'))
}
