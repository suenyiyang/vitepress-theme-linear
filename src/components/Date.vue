<script setup lang='ts'>
defineProps<{
  date: string
}>()
</script>

<template>
  <time class="date" :datetime="date">{{ date }}</time>
</template>

<style scoped></style>
