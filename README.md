# Vitepress Theme Linear

## Introduction

A dream theme for vitepress blogs.

## Usage

### Preparation

Follow [guide](https://vitepress.vuejs.org/guide/getting-started.html) on the official site to build up your site with default theme first.

### Install Theme

- Install the NPM package.

```bash
pnpm i -D vitepress-theme-linear
```

- Modify `scripts` config in your `package.json`.

```json
{
  "scripts": {
    "theme": "cd docs/.vitepress/ && rm -rf theme && ln -s ../../node_modules/vitepress-theme-linear/src theme && cd ../../",
    "dev": "npm run theme && vitepress dev docs",
    "build": "npm run theme && vitepress build docs"
  }
}
```

### Config Theme

#### Preparation

Refer to official [guide](https://vitepress.vuejs.org/guide/configuration.html#typed-theme-config) to create the `config.ts` file.

#### Theme Config

- `links`:
  - type: Array;
  - item: 
    - name: String - name of the link item;
    - link: String - url of the link item;
    - icon: String - path to the icon (public assets should be placed at `public` folder in `docs` folder);
- `posts`: Use `getPosts` function to generate.

#### Sample Configuration

> Don't worry if module `./theme/config` is not found.

```ts
import { defineConfigWithTheme } from 'vitepress'
import { ThemeLinearConfig, getPosts } from './theme/config'

const locale = 'en-US'
const timezone = 'Asia/Shanghai'

async function load() {
  return defineConfigWithTheme<ThemeLinearConfig>({
    themeConfig: {
      posts: await getPosts(locale, timezone),
      links: [
        { name: 'GitHub', link: 'https://github.com/syy11cn', icon: '/assets/images/github.svg' },
      ]
    }
  })
}

export default load()
```

## Write Posts

Create `posts` folder in `docs` and add `markdown` files to it.

For Individual pages, create `markdown` files directly in `docs` folder.

For static assets, take `github.svg` as example, place it in `docs/public/assets/images/` folder, and then config the `icon` property in `docs/.vitepress/config.ts` to `'/assets/images/github.svg'`.

## Development

```bash
npm run dev
```

## Acknowledgement

Design inspired by [Evan You's Blog](https://blog.evanyou.me/) and [Anthony Fu's Blog](https://antfu.me/).

## License

MIT &copy; 2022 - PRESENT Yiyang Sun
