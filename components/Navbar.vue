<script setup lang="ts">
import { ref } from "vue";

const colorMode = useColorMode()

const logo = computed(() => colorMode.value === 'dark' ? '/logo-dark_small.png' : '/logo-light_small.png')
let scrollY = ref(0);

const navItems = [
  {
    label: "Tentang",
    href: "#about"
  },
  {
    label: "Timeline",
    href: "#timeline"
  },
  {
    label: "Prize",
    href: "#prize"
  },
  {
    label: "Persyaratan",
    href: "#about"
  }
]
const scroll = () => {
  scrollY.value = window.scrollY;
}
onBeforeMount(() => {
  addEventListener("scroll", scroll);
})
onUnmounted(() => {
  removeEventListener("scroll", scroll);
})
</script>

<template>
  <nav id="navbar"
    :class="`fixed w-full top-0 left-0 py-2 z-[1024] duration-500 ${scrollY > 300 ? 'backdrop-blur-md' : ''}`">
    <UContainer class="flex flex-row items-center justify-between">
      <ColorScheme>
        <NuxtImg :src="logo" width="160" />
        <ul class="flex flex-row">
          <li v-for="item of navItems">
            <NuxtLink :to="item.href">
              <UButton :label="item.label" variant="ghost" />
            </NuxtLink>
          </li>
          <li class="ml-4">
            <UButton :icon="$colorMode.value === 'dark' ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
              color="gray" variant="ghost" aria-label="Theme"
              @click="() => $colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'" />
          </li>
        </ul>
      </ColorScheme>
    </UContainer>
  </nav>
</template>