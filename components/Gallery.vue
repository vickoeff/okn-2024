<template>
  <section id="gallery">
    <UContainer class="relative py-16">
      <NuxtImg src="/red-planet.png" alt="Red Planet"
        class="w-8/12 lg:w-4/12 absolute top-[0rem] right-[-4rem] lg:top-[-4rem] lg:right-[-14rem] z-10" />
      <h2 class="relative text-4xl mb-14 text-center text-white z-20" data-aos="fade-right">
        Galeri OKN
      </h2>
      <div class="hidden lg:grid relative grid-flow-row grid-rows-5 grid-cols-5 z-20">
        <div v-for="i of 20">
          <NuxtImg :src="`/gallery/${i}.jpg`" :alt="`gallery_${i}`"
            class="lg:hover:scale-[2] duration-100 cursor-pointer" />
        </div>
      </div>
      <div class="block relative lg:hidden z-20">
        <UCarousel v-slot="{ item }" :items="[...Array(20).keys()]" :ui="{
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
            class="flex flex-col max-w-2xl mx-auto backdrop-blur-sm p-0 lg:p-4 justify-center items-center dark:bg-gray-700 bg-yellow-100 bg-opacity-50 dark:bg-opacity-50 rounded-full">
            <NuxtImg :src="`/gallery/${item + 1}.jpg`" class="w-full mb-8" />
          </div>
        </UCarousel>
      </div>
    </UContainer>
  </section id="gallery">
</template>