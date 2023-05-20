<script setup lang='ts'>
import { useRoute } from 'vitepress'
import { computed, ref } from 'vue'

const pathObj = computed(() => {
  const route = useRoute()
  const path = `${route.path.split('/').slice(0, -1).join('/')}` || '/'

  return { route, path }
})
</script>

<template>
  <!-- eslint-disable-next-line vue/valid-v-on -->
  <p>
    <a v-if="pathObj.route.path !== '/'" :href="pathObj.path">cd ../</a>
  </p>
</template>

<style scoped>
p {
  margin-top: 3rem;
  display: block;
}

p a {
  color: var(--secondary-text);

}
</style>
