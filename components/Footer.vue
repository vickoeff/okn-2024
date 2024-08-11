<script setup>
const socialMedia = [
  {
    label: "@olimpiadekimia",
    icon: "i-mdi:instagram",
    href: "https://www.instagram.com/olimpiadekimia/",
  },
  {
    label: "@olimpiadekimiaugm",
    icon: "i-ic:baseline-tiktok",
    href: "https://www.tiktok.com/@olimpiadekimiaugm",
  },
  {
    label: "@olimpiadekimia_ugm",
    icon: "i-hugeicons:new-twitter",
    href: "https://x.com/olimpiadekimia_ugm",
  },
  {
    label: "Olimpiade Kimia Nasional UGM",
    icon: "i-mdi:facebook",
    href: "https://www.facebook.com/OKNUGM",
  },
  {
    label: "@046uudbf",
    icon: "i-hugeicons:line",
    href: "http://line.me/ti/p/@046uudbf",
  },
]
</script>

<template>
  <footer class="dark:bg-primary bg-white">
    <UContainer class="flex flex-row justify-between p-32">
      <div>
        <h2 class="text-4xl mb-3" data-aos="fade-right">Kontak OKN 2024</h2>
        <p class="text-xl" data-aos="fade-up" data-aos-delay="200">Wafi (Materi) : 085791382372</p>
        <p class="text-xl" data-aos="fade-up" data-aos-delay="400">Herlyn Putri Setiawan (Kesekretariatan) :
          085647587380</p>
      </div>
      <div>
        <h2 class="text-4xl mb-3" data-aos="fade-left">Sosial Media OKN 2024</h2>
        <ul class="grid grid-flow-row grid-cols-2 gap-4">
          <li v-for="social of socialMedia">
            <UButton :icon="social.icon" :label="social.label" class="rounded-full dark:hover:text-primary"
              data-aos="fade-up" :to="social.href" target="_blank" />
          </li>
        </ul>
      </div>
    </UContainer>
    <p class="py-4 text-center">Develop with ♥ at Sibiti.co.id 2024</p>
  </footer>
</template>