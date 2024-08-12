<script setup lang="ts">
import { ref } from "vue";

const colorMode = useColorMode()
const isOpen = ref(false);

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
    href: "#terms"
  },
  {
    label: "Daftar",
    href: "http://sibiti.co.id"
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
        <div class="flex flex-row logo">
          <NuxtImg :src="logo" width="160" class="w-32 lg:w-52" />
          <NuxtImg src="/header-logo.svg" width="264" class="object-contain w-40 lg:w-64" />
        </div>
        <ul class="flex flex-row">
          <li v-for="item of navItems" class="hidden md:block">
            <UButton :label="item.label" variant="ghost" :to="item.href" />
          </li>
          <li class="ml-4">
            <UButton :icon="$colorMode.value === 'dark' ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
              color="gray" variant="ghost" aria-label="Theme"
              @click="() => $colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'" />
          </li>
          <li class="block md:hidden ml-4">
            <UButton variant="ghost" icon="i-carbon:menu" @click="isOpen = true" />
          </li>
        </ul>
      </ColorScheme>
    </UContainer>

    <USlideover v-model="isOpen" class="z-[1025]">
      <div class="p-4 flex-1">
        <UButton color="gray" variant="ghost" size="sm" icon="i-heroicons-x-mark-20-solid"
          class="flex sm:hidden absolute end-5 top-5 z-10" square padded @click="isOpen = false" />

        <ul class="flex flex-col justify-center items-center h-full gap-8">
          <li v-for="item of navItems">
            <UButton :label="item.label" variant="ghost" :to="item.href" />
          </li>
        </ul>
      </div>
    </USlideover>
  </nav>
</template>