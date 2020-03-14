<template>
  <div class="aside">
    <div class="text-grey p-16 title">好友列表(3)</div>
    <div class="people flex-row align-center p-16" v-for="user in asideUser" :key="user.id">
      <div class="head mr-8" />
      <div>
        <div class="font-bold name mb-8">{{user.name}}</div>
        <div class="text-grey msg">{{user.message}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { asideUser } from '@/lib/user.js';
export default {
  data() {
    return {
      asideUser,
    };
  },
};
</script>

<style lang="scss" scoped>
.aside {
  @include size(350px, 100vh);
  min-width: 350px;
  box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.2);
  .title {
    border-bottom: solid 1px $color-light-green;
    font-size: 20px;
  }
  .people {
    border-bottom: solid 1px $color-light-green;
    cursor: pointer;
    &:hover {
      background: $color-light-grey;
    }
    .head {
      @include size(70px, 70px);
      border-radius: 50%;
      border: solid 1px $color-light-green;
    }
    .name {
      font-size: 24px;
    }
    .msg {
      font-size: 20px;
    }
  }
}
</style>