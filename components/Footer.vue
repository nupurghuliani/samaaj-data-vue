<template>
  <footer class="border-t border-white/10 bg-black text-white/80">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-sm">© {{ new Date().getFullYear() }} Samaaj Data</p>
      <div class="text-xs sm:text-sm space-x-4">
        <a href="mailto:hello@samaajdata.org" class="hover:text-white">Contact</a>
        <a href="https://samaajdata.org" target="_blank" rel="noreferrer" class="hover:text-white">Legacy site</a>
      </div>
    </div>
  </footer>
</template>
