<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#111827' : 'white')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'OKN 2024'
const description = 'Olimpiade Kimia adalah acara tahunan bergengsi yang diselenggarakan oleh Keluarga Mahasiswa Kimia (KMK) FMIPA UGM sejak tahun 2002. Olimpiade ini bertaraf nasional yang diperuntukan bagi seluruh pelajar SMA/SMK sederajat se-Indonesia.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://dashboard-template.nuxt.dev/social-card.png',
  twitterImage: 'https://dashboard-template.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
    <UModals />
  </div>
</template>

<style lang="scss">
html {
  scroll-behavior: smooth;
  scroll-padding-top: 20vh;
}

* {
  font-family: Inter;
}

h1,
h2,
h3 {
  font-family: Bungee;
}
</style>