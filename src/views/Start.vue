<template>
  <div class="flex-column justify-center align-center start">
    <img :src="require('@/assets/img/img_default.png')" alt="">
    <div class="text-primary start-text font-bold mt-16">開始使用Cherri Chat</div>
  </div>
</template>

<style lang="scss" scoped>
.start {
  height: calc(100% - 80px);
  .start-text {
    font-size: 28px;
  }
}
</style>