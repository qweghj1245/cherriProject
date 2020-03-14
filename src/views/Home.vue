<template>
  <div class="flex-row home">
    <Aside />
    <div class="right">
      <Head />
      <router-view />
    </div>
  </div>
</template>

<script>
import Head from '@/components/Head.vue';
import Aside from '@/components/Aside.vue';
export default {
  components: {
    Head,
    Aside,
  },
};
</script>

<style lang="scss" scoped>
.home {
  @include size(100%, 100%);
  .right {
    min-width: 610px;
    width: 100%;
  }
}
</style>