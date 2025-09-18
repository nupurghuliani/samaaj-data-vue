<template>
  <div class="text-center text-2xl sm:text-3xl text-black font-semibold leading-tight">
    <div class="mx-auto max-w-2xl">
      <div class="flex justify-center items-baseline">
        <span class="mr-1">I am</span>
        <span class="inline-block text-center align-baseline" :style="{ minWidth: '120px' }">
          <span :key="currentEmotion" class="inline-block animate-fade-slide text-[#fbb040]">
            {{ currentEmotion }}
          </span>
        </span>
      </div>
      <p class="mt-2 text-base sm:text-lg text-black/85 font-normal">
        Help me use data to make my neighborhood better
      </p>
      <div class="mt-6 flex items-center justify-center gap-4">
        <a href="#" class="inline-flex items-center justify-center rounded-md bg-black text-white px-6 py-2.5 text-sm font-medium hover:opacity-90 w-20">Explore</a>
        <a href="#" class="inline-flex items-center justify-center rounded-md border border-black/30 text-black px-6 py-2.5 text-sm font-medium hover:bg-black/10 w-20">Learn</a>
        <a href="#" class="inline-flex items-center justify-center rounded-md border border-black/30 text-black px-6 py-2.5 text-sm font-medium hover:bg-black/10 w-20">Act</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const emotions = ['angry', 'curious', 'frustrated', 'desperate', 'worried']
const currentIndex = ref(0)
const currentEmotion = computed(() => emotions[currentIndex.value])

let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % emotions.length
  }, 1800)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style>
@keyframes fade-slide {
  0% { opacity: 0; transform: translateY(8px); }
  15% { opacity: 1; transform: translateY(0); }
  85% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-8px); }
}
.animate-fade-slide {
  animation: fade-slide 1.8s ease-in-out;
}
</style>
