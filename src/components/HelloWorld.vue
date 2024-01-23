<script setup>
const name = ref('cici')
</script>
<template>
  <div>hello {{ name }}, this is helloworld components</div>
  <button class="btn-style">Button</button>
</template>
<style scoped>
.btn-style {
  @apply bg-blue-400 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200;
  @apply hover:bg-blue-500;
  @apply dark:bg-blue-500 dark:hover:bg-blue-600;
}
</style>
