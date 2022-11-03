<script setup>

  import { defineProps, defineEmits } from 'vue'

  const inputProps = defineProps({
    modelValue: { type: String, required: true },
  })

  const emit = defineEmits(['update:modelValue'])

  const updateInputField = (event) => {
    emit('update:modelValue', event.target.value);
  }

  const clearInput = () => {
    emit('update:modelValue', '');
  }

</script>

<template>
  <div class="input-wrapper">
    <input
      :value="modelValue"
      @input="updateInputField" 
      class="input">
    <div
      class="close-control"
      @click="clearInput()">
    </div> 
  </div>
</template>

<style lang="scss" scoped>

  .input {
    background-color: $light-gray;
    height: 59px;
    width: 100%;

    border: 1px solid $light-gray;

    font-size: 18px;
    font-weight: 500;
    line-height: 22px;

    padding-left: 20px;
  }

  .input:focus {
    outline: none !important;
    border: 1px solid $gray;
  }

  .input-wrapper {
    position: relative;

    @media (max-width: $breakpoint-notebook - 1) {
      max-width: 335px;
      width: 335px;
    }

    @media (min-width: $breakpoint-desktop) {
      max-width: 335px;
      width: 335px;
    }
  }

  .close-control {
    cursor: pointer;
    position: absolute;
    top: 25px;
    right: 26px;
    display: inline-block;
    width: 15px;
    height: 15px;
    background: url(/images/icons/close.svg) 0 0 no-repeat;
  }

</style>
