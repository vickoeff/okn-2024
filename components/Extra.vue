<template>
  <section id="extra" class="py-32">
    <UContainer>
      <h2 class="text-4xl mb-14 text-center text-white" data-aos="fade-right">
        Biaya Pendaftaran
      </h2>
      <div class="flex flex-col lg:flex-row justify-center items-center gap-4">
        <div class="price min-w-40" data-aos="fade-up">
          <div>
            <h3 class="text-grayscale-900 text-xl text-center mb-2">Early Bird</h3>
            <p class="text-white font-bold text-2xl text-center backdrop-blur-md rounded-full">Rp 65.000</p>
          </div>
        </div>
        <div class="price min-w-40" data-aos="fade-up" data-aos-delay="300">
          <div>
            <h3 class="text-grayscale-900 text-xl text-center mb-2">Pre Sale</h3>
            <p class="text-white font-bold text-2xl text-center backdrop-blur-md rounded-full">Rp 75.000</p>
          </div>
        </div>
        <div class="price min-w-40" data-aos="fade-up" data-aos-delay="600">
          <div>
            <h3 class="text-grayscale-900 text-xl text-center mb-2">Normal Price</h3>
            <p class="text-white font-bold text-2xl text-center backdrop-blur-md rounded-full">Rp 85.000</p>
          </div>
        </div>
      </div>
      <h3 class="text-xl w-fit mx-auto mb-14 text-center text-white bg-primary p-2 px-4 rounded-3xl" data-aos="fade-up">
        Jumlah Peserta <b>500++</b> dari Seluruh Indonesia
      </h3>
    </UContainer>
  </section>
</template>

<style scoped>
.price {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-image: url("/purple-planet.png");
  background-size: 100% 100%;
}
</style>