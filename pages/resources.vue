<template>
  <main class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
    <h1 class="text-3xl sm:text-4xl font-bold text-black">Resources</h1>

    <section class="mt-8 space-y-6 text-black/90">
      <h2 class="text-2xl font-semibold text-black">Data Narratives</h2>
      <p>
        Explore our collection of data stories, insights, and case studies that showcase how communities are using data to drive change. From water audits to waste management, these narratives bring data to life through real community experiences.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div v-for="narrative in narratives" :key="narrative.title" class="border border-black/10 rounded-lg p-4 bg-black/5 hover:bg-black/10 transition-colors">
          <h3 class="font-medium text-black mb-2">{{ narrative.title }}</h3>
          <p class="text-sm text-black/70 mb-3">{{ narrative.description }}</p>
          <span class="text-xs" :style="{ color: '#fbb040' }">Case Study →</span>
        </div>
      </div>

      <div class="pt-6">
        <a 
          href="https://linktr.ee/samaajdata" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center rounded-md px-6 py-3 text-sm font-semibold text-black hover:opacity-90" 
          :style="{ backgroundColor: '#fbb040' }"
        >
          See All Data Narratives
        </a>
      </div>

      <h2 class="mt-10 text-2xl font-semibold text-black">Documentation and Standards</h2>
      <p>
        Coming soon: comprehensive documentation on our data collection methodologies, quality standards, and best practices for community-driven data initiatives. This will include guidelines for data contributors, verification processes, and interoperability standards.
      </p>
    </section>
  </main>
</template>

<script setup>
const narratives = [
  {
    title: 'Water Champions in Assam',
    description: 'How 13,000 water-saving actions influenced national policy and transformed the Jal Jeevan Mission.'
  },
  {
    title: 'Stubble Burning Prevention',
    description: 'Data-driven advocacy prevented burning across 10,500 acres in Punjab, improving air quality.'
  },
  {
    title: 'Civic Audits in Karnataka',
    description: 'Crowdsourced audits of toilets, footpaths, and potholes shaping local governance responses.'
  },
  {
    title: 'Tree Census Impact',
    description: 'Community mapping of tree health and species data driving urban forestry decisions in Pune.'
  }
]
</script>
