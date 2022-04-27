<script setup lang='ts'>
import { useRoute } from 'vitepress'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const postListPages = ['/posts']
</script>

<template>
  <Header />
  <div class="main">
    <Content />
    <Footer />
  </div>
</template>

<style scoped>
.main{
  max-width: 75rem;
  margin: 50px auto;
}
</style>
