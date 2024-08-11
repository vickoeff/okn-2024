<template>
  <section id="gallery">
    <UContainer class="relative">
      <NuxtImg src="/red-planet.png" alt="Red Planet" width="30vw" class="absolute top-[-10vw] right-[-10vw] z-10" />
      <h2 class="text-4xl mb-14 text-center text-white" data-aos="fade-right">
        Galleri OKN
      </h2>
      <div class="relative grid grid-flow-row grid-rows-5 grid-cols-5 z-20">
        <div v-for="i of 20">
          <NuxtImg :src="`/gallery/${i}.jpg`" :alt="`gallery_${i}`"
            class="lg:hover:scale-[2] duration-100 cursor-pointer" />
        </div>
      </div>
    </UContainer>
  </section id="gallery">
</template>