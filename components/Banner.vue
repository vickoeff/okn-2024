<template>
  <section id="banner">
    <UContainer>
      <div class="min-h-[60vh] lg:min-h-[115vh] flex flex-col justify-center items-center">
        <NuxtImg src="/rocket.png" width="300" class="rocket mb-4" />
        <p class="text-xl lg:text-xl dark:text-white text-gray-700">OLIMPIADE KIMIA NASIONAL</p>
        <h1 class="text-4xl lg:text-8xl dark:text-white text-gray-700">OKN 2024</h1>
      </div>
    </UContainer>
  </section>
</template>

<style lang="scss" scoped>
#banner {
  background-position: bottom;
  background-size: 100%;
  background-repeat: no-repeat;
}

.rocket {
  position: relative;
  animation-name: rocket;
  animation-duration: 1.5s;
  animation-direction: linear;
}

@keyframes rocket {
  from {
    transform: translateY(100vh);
  }

  to {
    transform: translateY(0);
  }
}
</style>