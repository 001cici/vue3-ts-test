<script setup>
import switchLayoutList from '@/layout/switch/index.ts'
import { useSystemStore } from '@/stores/system'

const systemStore = useSystemStore()

// 初始化布局列表
systemStore.initSwitchLayout(switchLayoutList)
console.log('switchLayoutList:', switchLayoutList)
</script>

<template>
  <div class="switch-index">
    <component :is="systemStore.currentSwitchlayout" />
  </div>
</template>

<style scoped></style>
