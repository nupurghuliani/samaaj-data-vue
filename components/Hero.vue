<template>
  <section class="relative h-[calc(100vh-4rem)] min-h-[560px] w-full overflow-hidden">
    <video
      class="absolute inset-0 h-full w-full object-cover opacity-70"
      autoplay
      muted
      loop
      playsinline
    >
      <source src="/hero.mp4" type="video/mp4" />
    </video>

    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center text-white">
      <div class="max-w-3xl">
        <h1 class="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight text-white">
          <span class="block">Data for the people,</span>
          <span class="block">by the people</span>
        </h1>
      </div>
    </div>
  </section>
</template>
