<script setup lang="ts">
import { ref } from 'vue'

const value = ref<Date>(new Date())
</script>

<template>
  <view>
    <el-calendar v-model="value" />
  </view>
</template>
