<script setup lang='ts'>
import { useData } from 'vitepress'
import type { Link } from '../types'
const data = useData()
const links = data.site.value.themeConfig.links as Link[]
const siteInfo = data.site.value
</script>

<template>
  <header>
    <a class="title" href="/">{{ siteInfo.title }}</a>
    <p class="sub-title">
      {{ siteInfo.description }}
    </p>
    <p>
      <a v-for="item in links" :key="item.name" :href="item.link">
        <img :src="item.icon" :alt="item.name">
      </a>
    </p>
  </header>
</template>

<style scoped>
header{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 5rem;
}
header > *:not(:last-child){
  margin-bottom: 2rem;
}
.title{
  letter-spacing: 6px;
  font-size: 1.6rem;
  color: #444;
}
.title:active{
  color: #444;
}
.sub-title{
  letter-spacing: 3px;
  font-size: 1.3rem;
}
p{
  display: flex;
  align-items: center;
}
p a {
  padding: 0 0.5rem;
  height: 20px;
  object-fit: cover;
}
p a img{
  height: 100%;
  object-fit: cover;
}
</style>
