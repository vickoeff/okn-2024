<script setup>
const prize = [
  {
    img: "/trophy-gold.svg",
    title: "Juara 1",
    description: "Trofi Bergilir Kemendikbud + Trofi Gubernur DIY + Sertifikat + Uang Rp 6.000.000"
  },
  {
    img: "/trophy-silver.svg",
    title: "Juara 2",
    description: "Trofi Bupati Sleman + Sertifikat + Uang Rp 4.000.000"
  },
  {
    img: "/trophy-bronze.svg",
    title: "Juara 3",
    description: "Trofi Rektor UGM + Sertifikat + Uang Rp 3.000.000"
  },
  {
    img: "/medal-gold.svg",
    title: "Juara Harapan 1",
    description: "Trofi + Sertifikat + Uang Rp 1.500.000"
  },
  {
    img: "/medal-silver.svg",
    title: "Juara Harapan 2",
    description: "Trofi + Sertifikat + Uang Rp 1.000.000"
  },
  {
    img: "/medal-bronze.svg",
    title: "Finalis",
    description: "Sertifikat + Plakat Finalis"
  }
]
</script>

<template>
  <section id="prize" class="py-32 bg-[url('/prize-bg.svg')] bg-no-repeat bg-fixed bg-yellow-100 dark:bg-grayscale-950">
    <UContainer>
      <h2 class="text-4xl mb-14 text-center text-white" data-aos="fade-right">Hadiah Acara OKN</h2>
      <UCarousel v-slot="{ item }" :items="prize" :ui="{
        item: 'basis-full mb-14',
        container: 'rounded-lg gap-4'
      }" :prev-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-left-20-solid',
        class: '-left-0 dark:bg-gray-900 hidden lg:flex'
      }" :next-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-right-20-solid',
        class: '-right-0 dark:bg-gray-900 hidden lg:flex'
      }" arrows class="max-w-6xl mx-auto mt-8" draggable="true" indicators>
        <div
          class="flex flex-col max-w-2xl mx-auto backdrop-blur-sm p-32 justify-center items-center dark:bg-gray-700 bg-yellow-100 bg-opacity-50 dark:bg-opacity-50 rounded-full">
          <NuxtImg :src="item.img" width="200" class="mb-8" />
          <h2 class="text-4xl mb-4">{{ item.title }}</h2>
          <p class="text-justify">{{ item.description }}</p>
        </div>
      </UCarousel>
    </UContainer>
  </section>
</template>

<style scoped lang="scss">
#prize {
  background-size: 100%;
}
</style>