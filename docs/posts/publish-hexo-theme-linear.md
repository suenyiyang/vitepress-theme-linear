---
title: 尤大博客同款风格的 hexo-theme-linear 主题了解一下 ~
cover: https://shaun.oss-cn-beijing.aliyuncs.com/typora/linear1.png/watermark
lang: zh
date: 2021-12-09 22:39:02
---

# 尤大博客同款风格的 hexo-theme-linear 主题了解一下 ~

## 先瞅一眼




![linear1](https://shaun.oss-cn-beijing.aliyuncs.com/typora/linear1.png/watermark)



![blog.syy11.cn_](https://shaun.oss-cn-beijing.aliyuncs.com/typora/blog.syy11.cn_.png/watermark)

![20211209235109](https://shaun.oss-cn-beijing.aliyuncs.com/typora/20211209235109.png/watermark)

![20211209235210](https://shaun.oss-cn-beijing.aliyuncs.com/typora/20211209235210.png/watermark)


## 开发灵感

之前偶然间翻到 [尤大的博客](https://blog.evanyou.me/)，被这种简约风和美观的字体吸引。

在 Hexo 的官方主题商店中没有找到尤大用的主题，于是仿照尤大博客主题自己写一个，希望同时能够帮到有需要的小伙伴。

## 选择 hexo-theme-linear

> 程序员的事，不能说抄，只能说学习借鉴 ~ 😂

虽说在设计风格、字体、样式借鉴了尤大博客的主题，这个主题还是有一些自己的特点的。


  可选添加网站副标题

  也许你需要有地方写你很喜欢的一句话或者你的座右铭呢。



  可配置的社交链接列表

  你可以根据自己的喜好，配置顶部个人社交链接列表的 **顺序、图标、内容** 等。

  主题文件夹中也 **预置** 了主流社交平台、社区的 Logo。

  > 请见 `linear/source/images/links/` 文件夹。

  若没有你想要的图标，你也可以向该文件夹中添加你喜欢的图标。

  相比于只能填写固定社交平台链接的配置方式，这种方式更加灵活、自由、用户友好。



  可选添加博客封面

  对于喜欢制作精美博客封面的用户来说，这个功能很棒。

  你只需要在文章的 frontmatter 中添加 `cover` 属性，其值为封面图片 url。

  > 若喜欢简洁无图，也可以不添加这个属性。



  安全的文章浏览量、评论数统计

  主题采用 [Waline](https://waline.js.org/) 作为评论系统，同时使用其统计功能。

  > 相比于 [Valine](https://valine.js.org/) 更加安全。



  多作者显示

  支持在首页及文章页显示某篇文章的作者。

  需要在文章 frontmatter 中配置 `author` 字段。



  用户友好

  尤大的博客上一篇文章好像还是 2015 年写的（可能平时主要活跃在 Vue 社区和 Twitter 😂）。

  今天设备屏幕大小和当时差别还是比较大，因此，在博客宽度（媒体查询 break point）设计上，相比尤大博客的主题有所增加，以适配如今的全面屏手机和 PC。

  > 响应式适配当然是有的 ~

  尤大的博客使用的是 Disqus 评论系统，但是因为网络原因，部分情况下会出现评论无法加载的现象，会让访客误认为不支持评论。

  本主题使用更稳定访问的 Valine 作为评论系统。

  底部也做了对于国内用户的适配，有些小伙伴会把 Hexo 博客放在国内的服务器上，此时可能会需要添加 ICP 备案信息。只需填写 ICP 备案号，就可以完美在底部展示啦 ~

  > 这么辛苦开发了主题，在底部给作者和主题打个小广告还是可以理解嘛 😂


---

分割线以上算是王婆卖瓜，自卖自夸。

真正好不好用还是用了才会知道。各位小伙伴如果能够赏光使用，遇到任何问题可以 [发邮件给我](mailto:syy11cn@outlook.com) 或 [在这里提 Issue](https://github.com/syy11cn/hexo-theme-linear/issues)。

> 为什么主题要取名为 `linear`？

一方面可能因为 CSS 中 `linear` 的属性值，另一方面是因为个人感觉这个单词长得很 _和谐_ 😂。

最后的最后，求一波 ⭐ 🙏 ~

[主题仓库](https://github.com/syy11cn/hexo-theme-linear/)

