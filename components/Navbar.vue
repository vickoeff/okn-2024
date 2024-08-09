<script lang="ts">
export default {
  data() {
    return {
      navItems: [
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
    }
  }
}
</script>

<template>
  <nav id="navbar" class="fixed w-full top-0 left-0 py-2">
    <UContainer class="flex flex-row items-center justify-between">
      <ColorScheme>
        <NuxtImg :src="$colorMode.value === 'dark' ? '/logo-dark_small.png' : '/logo-light_small.png'" width="160" />
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