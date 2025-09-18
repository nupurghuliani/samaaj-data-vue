<template>
  <div>
    <NavBar />
    <div class="pt-16 min-h-screen flex flex-col">
      <div class="flex-1">
        <slot />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
// Components are auto-imported in Nuxt
</script>
