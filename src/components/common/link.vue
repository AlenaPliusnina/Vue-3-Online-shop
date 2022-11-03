<script setup>

  const commonBtnProps = defineProps({
    text: { type: String, required: true }
  })

</script>

<template>
  <a class="link">
    {{ text }}
  </a>
</template>

<style lang="scss" scoped>

  .link {
    text-decoration: underline;
    cursor: pointer;
  }

  .link:hover {
    color: $orange;
  }

</style>