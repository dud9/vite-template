<script setup lang="ts">
import DarkToggle from './components/DarkToggle.vue'
import Docs from '~/pages/Docs.md'

useHead({
  title: 'Parfait',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <div flex justify-center items-center class="mt-1/12">
    <DarkToggle />
  </div>
  <Docs />
</template>

