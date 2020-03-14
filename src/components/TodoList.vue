<template>
  <div class="todo-list bg-white">
    <div class="content p-24">
      <textarea class="text-area p-8 pl-16 pr-16" placeholder="輸入訊息..." />
      <div class="add-button mt-8 bg-primary p-8 text-center text-white">新增</div>
      <div class="sperator mt-16 mb-16" />
      <div class="list-wrap">
        <div class="list pt-8 pb-8 p-16">
          <div class="add-time text-primary mb-16">1111</div>
          <div class="msg">備忘訊息1</div>
          <img :src="require('@/assets/img/ic_close2.png')" class="close" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.todo-list {
  position: absolute;
  top: calc(100% + 16px);
  right: 8px;
  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 15px 25px 15px;
    border-color: transparent transparent $color-white transparent;
    filter: drop-shadow(0px -4px 3px rgba(0, 0, 0, 0.1));
    position: absolute;
    bottom: 100%;
    right: 24px;
  }
  .content {
    border-radius: 3px;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
    width: 400px;
    .text-area {
      @include size(100%, 120px);
      resize: none;
      font-size: 20px;
      border-color: $color-primary;
      &:focus {
        outline: 0;
      }
    }
    .sperator {
      @include size(100%, 1px);
      background: $color-light-green;
    }
    .list {
      border: solid 1px $color-light-green;
      position: relative;
      .close {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 12px;
      }
    }
  }
}
</style>