<script setup>
const timeline = {
  "Pendaftaran": [
    {
      title: "Early Bird",
      date: "18 Agustus  – 27 Agustus 2024",
      place: null
    },
    {
      title: "Pre Sale",
      date: "28 Agustus – 11 September 2024",
      place: null
    },
    {
      title: "Normal Price",
      date: "12 September  – 26 September 2024",
      place: null
    },
  ],
  "Try Out": [
    {
      title: "Technical Meeting Try Out",
      date: "5 Oktober 2024",
      place: null
    },
    {
      title: "Try Out",
      date: "6 Oktober 2024",
      place: null
    },
  ],
  "Perlombaan": [
    {
      title: "Technical Meeting OKN 2024 ",
      date: "12 Oktober 2024 *Online",
      place: "Online"
    },
    {
      title: "Tahap Penyisihan",
      date: "13 Oktober 2024",
      place: "Online"
    },
    {
      title: "Semifinal",
      date: "2 November 2024",
      place: "FMIPA UGM"
    },
    {
      title: "Final",
      date: "3 November 2024",
      place: "FMIPA UGM"
    },

  ]
};

const items = Object.keys(timeline).map(item => ({
  key: item,
  label: item,
  icon: 'i-heroicons-information-circle',
  content: timeline[item]
}));
</script>

<template>
  <section id="timeline" class="py-32">
    <UContainer>
      <h2 class="text-4xl mb-14 text-center" data-aos="fade-left">TIMELINE OKN 2024</h2>
      <UTabs :items="items" :default-index="0">
        <template #default="{ item, index, selected }">
          <span class="truncate" :class="[selected && 'text-primary-500 dark:text-primary-400']"> {{
            item.label }}</span>
        </template>
        <template #item="{ item }">
          <UCarousel v-slot="{ item: timelineItem }" :items="item.content" :ui="{
            item: 'basis-full lg:basis-6/12 mb-14',
            container: 'rounded-lg gap-4'
          }" :prev-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-left-20-solid',
            class: '-left-12 dark:bg-gray-900 hidden lg:flex'
          }" :next-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-right-20-solid',
            class: '-right-12 dark:bg-gray-900 hidden lg:flex'
          }" arrows class="max-w-6xl mx-auto mt-8" draggable="true" indicators>
            <div
              class="w-full bg-yellow-300 dark:bg-yellow-500 backdrop-blur-sm dark:bg-opacity-80 bg-opacity-30 shadow-md p-4">
              <h3>{{ timelineItem.title }}</h3>
              <p>{{ timelineItem.date }}</p>
              <p v-if="timelineItem.place">Tempat: {{ timelineItem.place }}</p>
            </div>
          </UCarousel>
        </template>
      </UTabs>
    </UContainer>
  </section>
</template>