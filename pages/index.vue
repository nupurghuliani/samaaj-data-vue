<template>
  <main>
    <Hero />
    <div class="text-[21px]">
      <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <p class="mt-0 max-w-5xl mx-auto text-black/90 text-lg sm:text-xl leading-relaxed text-justify">
          Samaaj Data is a community-powered platform that makes public data useful for everyday civic action. We bring together grassroots organizations, researchers, and citizens to map what matters in neighborhoods, trees, toilets, water quality, waste systems, and more, and turn those insights into change.
        </p>
        <div class="mt-8 flex gap-4 justify-center">
          <NuxtLink to="/about" class="inline-flex items-center justify-center rounded-md bg-black text-white px-6 py-3 text-sm font-medium hover:opacity-90 w-48">Learn more</NuxtLink>
          <NuxtLink to="/collective" class="inline-flex items-center justify-center rounded-md border border-black/30 text-black px-6 py-3 text-sm font-medium hover:bg-black/10 w-48">Meet the Collective</NuxtLink>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div class="mx-auto max-w-5xl rounded-2xl border border-black/15 bg-black/5 backdrop-blur px-8 py-12 sm:px-12 sm:py-14">
          <RotatingEmotions />
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 class="text-2xl sm:text-3xl font-semibold mb-8 text-black">What&apos;s new</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a v-for="i in 3" :key="i" href="#" class="group rounded-lg overflow-hidden border border-black/10 hover:border-black/30 transition-colors">
            <div class="aspect-video bg-black/10" />
            <div class="p-4">
              <h3 class="font-medium group-hover:underline text-black">Data story title {{ i }}</h3>
              <p class="mt-2 text-black/70 text-sm">Short description of the latest story goes here as a placeholder.</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  </main>
</template>
