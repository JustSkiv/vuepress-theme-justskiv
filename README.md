# vuepress-theme-maker

A flat and clean Blog Theme for VuePress site. inspired by [Hexo-theme-inside](https://github.com/ikeq/hexo-theme-inside)

## Preview

![预览](https://raw.githubusercontent.com/80maker/vuepress-theme-maker/main/blog/.vuepress/public/images/screenshot.webp)

## Features

- Build with Vue.js
- Modified on the basis of VuePress default theme, retaining the vast majority of features such as built-in search, tag classification and so on
- Based on the official blog plugin '@vuepress/plugin-blog`
- Dark mode
- Extended Markdown syntax, support `footnote` `mark` `abbr` `task-lists`, `Demo Code`
- Support article reviews
- Built-in friend-links page
- Estimation of article reading time
- RSS feeds and sitemap
- PWA support
- SEO configuration
- Responsive theme

## Install

```
npm i vuepress-theme-maker -D
# yarn add vuepress-theme-maker -D
```

## Usage

```
// .vuepress/config.js
module.exports = {
  theme: 'vuepress-theme-maker',
  themeConfig: {
    // Please head documentation to see the available options.
  }
}
```

## Demo

WIP

## Deploy to Github Pages

```
npm run deploy
```
## Thanks to

- [VuePress](https://vuepress.vuejs.org/)
- [@vuepress/plugin-blog](https://github.com/vuepress/vuepress-plugin-blog)
- [@vuepress/theme-blog](https://github.com/vuepress/vuepress-theme-blog)
- [@80maker/vuepress-theme-maker](https://github.com/80maker/vuepress-theme-maker)

### license
[MIT](https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE)
