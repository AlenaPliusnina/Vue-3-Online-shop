<script setup>
</script>

<template>
  <div class="checkout-btn__wrapper">
    <button class="checkout-btn">
      Checkout
    </button>
    <img class="img" src="images/icons/arrow-next.svg">
  </div>
</template>

<style lang="scss" scoped>

  .checkout-btn {
    background-color: black;
    color: white;
    border: 1px solid black;

    width: 100%;
    text-align: start;

    font-size: 20px;
    font-weight: 500;
    line-height: 24px;

    padding-left: 41px;
    padding-top: 30px;
    padding-bottom: 30px;

    cursor: pointer;

    &__wrapper {
      position: relative;
    }
  }

  .checkout-btn:hover {
    background-color: $gray;
    border: 1px solid $gray;
  }

  .img {
    position: absolute;
    top: 35px;
    right: 100px;
    cursor: pointer;
  }
</style>