<script setup>
const handleClickMini = () => {
  AMessage.info('hello cici, click mini AButton!')
}
</script>

<template>
  <div>hello vue3+ts, This is home page!</div>
  <a-space>
    <a-button type="primary" size="mini" @click="handleClickMini"
      >Mini</a-button
    >
    <a-button type="primary" size="small">Small</a-button>
    <a-button type="primary">Medium</a-button>
    <a-button type="primary" size="large">Large</a-button>
  </a-space>
  <HelloWorld />
</template>

<style scoped></style>
