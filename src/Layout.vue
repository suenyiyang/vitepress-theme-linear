<script setup lang='ts'>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import CustomHead from './components/CustomHead.vue'
import ArticleInfo from './components/ArticleInfo.vue'
import Comment from './components/Comment.vue'
</script>

<template>
  <CustomHead />
  <Header />
  <div class="main">
    <ArticleInfo />
    <Content class="article" />
    <Footer />
    <Comment />
  </div>
</template>

<style scoped>
.main{
  max-width: var(--max-width);
  margin: 0 auto 5rem;
}
</style>
