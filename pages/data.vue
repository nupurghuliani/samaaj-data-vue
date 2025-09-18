<template>
  <main class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
    <h1 class="text-3xl sm:text-4xl font-bold text-black">Data</h1>

    <section class="mt-8 space-y-6 text-black/90">
      <h2 class="text-2xl font-semibold text-black">About the Data</h2>
      <p>
        Samaaj Data brings together hyper-local, citizen-generated and open government datasets on civic and climate issues that matter most to communities. From toilets and waste systems to trees, water quality, and public institutions, our data is crowd-sourced, crowd-verified, and publicly available.
      </p>
      <p>
        We work with citizens, community-based organizations (CSOs), and local governments to gather and clean data that is often fragmented or inaccessible. Each dataset tells a story of how neighborhoods are functioning — and where they need urgent attention.
      </p>
      <p>
        Our goal is simple: to turn scattered data into usable insights that can strengthen community action, civic engagement, and climate resilience.
      </p>

      <h2 class="mt-10 text-2xl font-semibold text-black">Explore Data</h2>
      <p>The Samaaj Data platform makes it easy to explore information in two ways:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><span class="font-medium text-black">Maps:</span> See data spatially, zoom into your ward, and compare across neighborhoods.</li>
        <li><span class="font-medium text-black">Citizen Data Assistant:</span> Chat with the data, ask questions in plain language, and get insights instantly.</li>
      </ul>
      <p>Dive into the datasets, look for patterns, and use the tools to answer your own civic questions.</p>

      <div class="flex gap-4 pt-4">
        <a href="#" class="inline-flex items-center rounded-md px-6 py-3 text-sm font-semibold text-black" :style="{ backgroundColor: '#fbb040' }">
          Ask a Question
        </a>
        <a href="#" class="inline-flex items-center rounded-md px-6 py-3 text-sm font-semibold text-black" :style="{ backgroundColor: '#fbb040' }">
          Explore on a Map
        </a>
      </div>

      <h2 class="mt-10 text-2xl font-semibold text-black">Contribute Data</h2>
      <p>The Collective thrives on participation. Anyone can help grow Samaaj Data:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><span class="font-medium text-black">As a CSO:</span> Share the data you already collect and see it made accessible to a wider public.</li>
        <li><span class="font-medium text-black">As an Individual Contributor:</span> Add your observations — from reporting a broken streetlight to documenting tree species.</li>
        <li><span class="font-medium text-black">Host a Mapathon with Us:</span> Bring people together to map local assets and challenges, with support from our team.</li>
      </ul>
      <p>Your contributions ensure that the data remains local, relevant, and actionable.</p>

      <h2 class="mt-10 text-2xl font-semibold text-black">Snapshot of Datasets</h2>
      <p>Here are some of the datasets currently available on Samaaj Data:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div v-for="dataset in datasets" :key="dataset.title" class="border border-black/10 rounded-lg p-4 bg-black/5">
          <h3 class="font-medium text-black">{{ dataset.title }}</h3>
          <p class="text-sm text-black/70 mt-1">{{ dataset.description }}</p>
        </div>
      </div>

      <p class="text-sm text-black/70 mt-4">(This list will keep growing as more partners and citizens contribute.)</p>

      <h2 class="mt-10 text-2xl font-semibold text-black">Documentation & Standards</h2>
      <p>
        Coming soon: our approach to data quality, verification, and interoperability standards. This will include open schemas, metadata practices, and guidelines for using and contributing to Samaaj Data.
      </p>
    </section>
  </main>
</template>

<script setup>
const datasets = [
  { title: 'Tree Census (Pune)', description: 'Tree health, species, and ecological attributes.' },
  { title: 'Water Audits (Shrirampur, Bihar & Bangalore)', description: 'Household access, safety, and practices.' },
  { title: 'Lake Water Quality (multiple cities)', description: 'Oxygen levels, nitrates, and heavy metals.' },
  { title: 'Public Toilets (Mumbai & Bangalore)', description: 'Availability, gender access, and infrastructure gaps.' },
  { title: 'Garbage Audits (Nanded & Bangalore)', description: 'Waste dumping reasons, frequency of collection.' },
  { title: 'Solid Waste Data (Delhi, Hyderabad, Chennai, Bangalore)', description: 'Bins, dumps, and collection sites.' },
  { title: 'Citizen Challenges & Voices (national)', description: 'Issues reported via community videos and IVR platforms.' },
  { title: 'Anganwadi Centres (national)', description: 'Infrastructure, toilets, and water supply.' },
  { title: 'Public Parks (Hyderabad)', description: 'Availability, amenities, and safety.' },
  { title: 'Urban Flooding (Bangalore, Chennai, Assam)', description: 'Locations most affected by recurrent floods.' },
  { title: 'Relief Centres (Chennai)', description: 'Distribution of emergency shelters and canteens.' },
  { title: 'Borewells (Delhi)', description: 'Availability and water conditions.' },
  { title: 'Smart Cities (national)', description: '101 cities and their plans.' },
  { title: 'Water-saving Initiatives (Bangalore)', description: 'Tap aerators in schools.' },
]
</script>
