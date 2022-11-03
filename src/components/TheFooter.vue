<script setup>
</script>

<template>
  <div class="footer">
    <div class="footer__inner">
      <h2>S—SHOP</h2>
      <div class="footer-items">
        <span>Copyright</span>
        <span>Contacts</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .footer {
    padding-top: 40px;
    padding-bottom: 40px;

    background-color: $dark;
    color: white; 

    &__inner {
      padding-left: 20px;
      padding-right: 20px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;

      max-width: 230px;
      margin: 0 auto;


      @media (min-width: $breakpoint-mobile) {
        justify-content: space-between;
        flex-wrap: nowrap;
        max-width: 1440px;
        margin: 0 auto;
      }
    }
  }

  .header > span {
    color: $orange;
    cursor: pointer;
    
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
  }

  .footer-items {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 18px;
    font-weight: 400;
    line-height: 22px;

    max-width: 206px;
    width: 206px;

    margin-top: 20px;
    
    @media (min-width: $breakpoint-mobile) {
      margin-top: 0;
    }
  }

  .footer-items > span:hover {
    color: $orange;
    cursor: pointer;
  }

</style>