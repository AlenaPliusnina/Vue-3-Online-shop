<script setup>

  const commonBtnProps = defineProps({
    text: { type: String, required: true }
  })

</script>

<template>
  <button class="btn">
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>

  .btn {
    background-color: $dark;
    border: 1px solid $dark;
    color: white;
    width: 100%;

    cursor: pointer;

    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;

    padding-top: 19px;
    padding-bottom: 18px;
  }

</style>