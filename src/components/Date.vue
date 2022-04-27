<script setup lang='ts'>
defineProps<{
  date: string
}>()
</script>

<template>
  <h3>
    <time class="date" :datetime="date">{{ date }}</time>
  </h3>
</template>

<style scoped>
h3 {
  font-size: 1.3rem;
  color: #999;
}
</style>
