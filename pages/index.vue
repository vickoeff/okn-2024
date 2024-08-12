<template>
  <main class="bg-[url('/banner.png')] bg-yellow-200 dark:bg-gray-900 bg-fixed overflow-hidden">
    <Navbar />
    <Banner />
    <About />
    <Timeline />
    <Prize />
    <Terms />
    <Extra />
    <Gallery />
    <Footer />
  </main>
</template>

<style lang="scss" scoped>
main {
  background-size: 100%;
  background-position: bottom;
  background-repeat: no-repeat;

  @media screen and (min-width: 1280px) {
    background-size: cover;
  }
}
</style>