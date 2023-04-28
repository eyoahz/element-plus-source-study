<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts" setup>
import '../test'
Object.defineProperty(console, 'mylog', {
  value: function (data: any) {
    console.log('s')
  }
})
console.log('%c我在这呢：')
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
