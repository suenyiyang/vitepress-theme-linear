/* eslint-disable no-console */
import fs from 'fs-extra'
import globby from 'globby'
import matter from 'gray-matter'
import type { Post } from './types'

export async function getPosts(locale: string, timezone: string): Promise<Post[]> {
  const paths = await getPostMDFilePaths()
  const posts = await Promise.all(
    paths.map(async (item) => {
      const file = await fs.readFile(item, 'utf-8')
      const { data, content } = matter(file)
      data.rawDate = data.date ? new Date(data.date).toString() : (await fs.stat(item)).birthtime.toString()
      data.date = _convertDate(data.rawDate, locale, timezone)
      data.readTime = calculateReadTime(content)
      return {
        frontmatter: data,
        regularPath: `/${item.replace('docs/posts', 'posts').replace('.md', '')}`,
        filePath: `${item.replace('docs/posts', 'posts')}`,
      }
    }),
  )
  posts.sort(_compareDate)
  return posts
}

function _convertDate(date: string, locale: string, timezone: string) {
  const json_date = new Date(date).toLocaleString(locale, {
    timeZone: timezone,
    month: 'short',
    day: 'numeric',
  })
  return json_date
}

function _compareDate(obj1: Post, obj2: Post) {
  return new Date(obj1.frontmatter.rawDate) < new Date(obj2.frontmatter.rawDate) ? 1 : -1
}

async function getPostMDFilePaths() {
  const paths = await globby(['**.md'], {
    ignore: ['node_modules', 'README.md'],
  })
  return paths.filter(item => item.includes('posts/'))
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 300
  const approximateLength = content.replace(/\r?\n/g, '').length

  return Math.ceil(approximateLength / wordsPerMinute)
}
