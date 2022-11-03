<script setup>

  const btnAddProps = defineProps({
    added: { type: Boolean, required: true }
  })

</script>

<template>
  <div class="btn__wrapper" @click="addToBasket">
    <button :class="['btn',{ 'btn-checked': added }]">
      {{ added ? 'Added' : 'Add to basket' }}
    </button>
    <img :class="['btn__icon', { 'btn__icon-checked': added }]" :src="added ? 'images/icons/check.svg' : 'images/icons/plus.svg'">
  </div>

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

    padding: 20px;
    text-align: left;

    &__wrapper {
      position: relative;
      max-width: 335px;
    }

    &__icon {
      position: absolute;
      top: 22px;
      right: 22px;
      cursor: pointer;
    }

    &__icon-checked {
      top: 25px;
      right: 25px;
    }
  }

  .btn-checked {
    background-color: white;
    color: black;
  }

</style>