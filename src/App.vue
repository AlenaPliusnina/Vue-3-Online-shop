<script setup>
  import TheHeader from './components/TheHeader.vue'
  import TheFooter from './components/TheFooter.vue'
  import catalogSection from './components/catalog/section.vue'

  import { ref } from 'vue'

  const basketOpened = ref(false)

</script>

<template>
  <div class="wrapper">
    <div class="content-wrapper">
      <TheHeader @openBasket="basketOpened = true" @closeBasket="basketOpened = false"/>
      <catalogSection/>
    </div>
    <TheFooter/>
    <div class="shadow" v-if="basketOpened"></div>
  </div>
</template>

<style lang="scss" scoped>

  .wrapper {
    height: 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .content-wrapper {
    flex-grow: 1;
  }

  .shadow {
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: fixed;
  }

</style>
