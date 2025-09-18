<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b backdrop-blur" :style="{ backgroundColor: '#575858', borderBottomColor: '#575858' }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <NuxtLink to="/" class="flex items-center">
          <img
            src="/logo.png"
            alt="Samaaj Data"
            width="300"
            height="300"
            class="rounded mt-14 ml-1"
          />
        </NuxtLink>
        <nav class="hidden md:flex items-center gap-6">
          <NuxtLink
            v-for="link in links"
            :key="link.href"
            :to="link.href"
            :class="`text-sm font-bold transition-colors ${
              $route.path === link.href ? 'text-white' : 'text-white hover:text-white'
            }`"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            to="https://ai.samaajdata.org"
            external
            target="_blank"
            class="ml-2 inline-flex items-center rounded-md px-4 py-2 text-sm font-bold text-black hover:opacity-90"
            :style="{ backgroundColor: '#fbb040' }"
          >
            Try the CDA
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const links = [
  { href: '/about', label: 'About' },
  { href: '/collective', label: 'The Collective' },
  { href: '/data', label: 'Data' },
  { href: '/resources', label: 'Resources' },
  { href: '/get-involved', label: 'Get Involved' },
]
</script>
