<script setup>

  import { defineProps, defineEmits, ref } from 'vue'

  const commonSelectProps = defineProps({
    options: { type: Array, required: true },
  })

  const emit = defineEmits(['selectUpdated'])
  const selected = ref(null)
  const open = ref(false)
  
  const updateSelectField = (option) => {
    selected.value = option
    open.value = false
    emit('selectUpdated', selected.value)
  }

</script>

<template>
  <div
    :class="['select', { 'open': open }]"
    @blur="open = false"
    :style="{ 
      'background-image': `url(${ open ? '/images/icons/arrow-up.svg' : '/images/icons/arrow-down.svg'})`,
      'background-repeat': 'no-repeat', 'background-position': 'bottom 27px right 27px' }">
    <div class="selected" @click="open = !open">
      {{ selected }}
    </div>
    <div :class="['items', { 'selectHide': !open }]">
      <div
        v-for="(option, idx) of options"
        :key="idx"
        @click="updateSelectField(option)"
        :style="{ 'display': option !== selected ? 'block' : 'none'}">
          <div>{{ option }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .select {
    background-color: $light-gray;
    height: 61px;
    width: 100%;

    border: 1px solid $light-gray;

    font-size: 18px;
    font-weight: 500;
    line-height: 22px;

    position: relative;
  }

  .input:focus {
    outline: none !important;
    border: 1px solid $light-gray;
  }

  .selected {
    cursor: pointer;
    padding: 19px;
  }

  .items {
    position: absolute;
    background-color: $light-gray;
    left: 0;
    right: 0;
    z-index: 100;
  }

  .items div {
    cursor: pointer;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 10px;
  }

  .items div:hover {
    background-color: $gray;
  }

  .selectHide {
    display: none;
  }

  .items::-webkit-scrollbar { 
    width: 5px;
  }

  .items::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px $gray; 
  }

</style>