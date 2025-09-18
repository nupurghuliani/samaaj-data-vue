<template>
  <main class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
    <h1 class="text-3xl sm:text-4xl font-bold text-black">Get Involved</h1>

    <section class="mt-8 space-y-8 text-black/90">
      <p class="text-lg">
        There are many ways to be part of the Samaaj Data movement. Whether you&apos;re an individual, organization, or institution, we welcome your participation in building community-powered data for public good.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="option in involvementOptions" :key="option.title" :class="option.class">
          <h2 class="text-xl font-semibold text-black mb-3">{{ option.title }}</h2>
          <p class="text-black/80 mb-4">{{ option.description }}</p>
          <a :href="option.href" class="inline-flex items-center text-sm font-medium" :style="{ color: '#fbb040' }">
            {{ option.cta }}
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const involvementOptions = [
  {
    title: 'Contribute Data',
    description: 'Share your observations, audits, and local data points. Help build a comprehensive picture of your community&apos;s challenges and assets.',
    href: '#',
    cta: 'Start Contributing →',
    class: 'border border-black/10 rounded-lg p-6 bg-black/5'
  },
  {
    title: 'Join the Collective',
    description: 'Become a member of our network of organizations and institutions working on community-driven data initiatives.',
    href: '#',
    cta: 'Join Now →',
    class: 'border border-black/10 rounded-lg p-6 bg-black/5'
  },
  {
    title: 'Volunteer',
    description: 'Lend your skills in data analysis, community outreach, storytelling, or technology to support our mission.',
    href: '#',
    cta: 'Volunteer With Us →',
    class: 'border border-black/10 rounded-lg p-6 bg-black/5'
  },
  {
    title: 'Donate',
    description: 'Support our work in making data accessible and actionable for communities across the country.',
    href: '#',
    cta: 'Support Our Work →',
    class: 'border border-black/10 rounded-lg p-6 bg-black/5'
  },
  {
    title: 'Work With Us',
    description: 'Partner with Samaaj Data on research projects, policy initiatives, or community programs. Let&apos;s collaborate to amplify the impact of local data.',
    href: 'mailto:hello@samaajdata.org',
    cta: 'Get In Touch →',
    class: 'border border-black/10 rounded-lg p-6 bg-black/5 md:col-span-2'
  }
]
</script>
