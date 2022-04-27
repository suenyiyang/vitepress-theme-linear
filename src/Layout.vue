<script setup lang='ts'>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <div class="main">
    <Content class="article" />
    <Footer />
  </div>
</template>

<style scoped>
.main{
  max-width: 75rem;
  margin: 50px auto;
}
</style>
