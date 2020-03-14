<template>
  <div class="head bg-primary flex-row">
    <div class="flex-row align-center justify-between flex-auto pl-32 pr-32">
      <div class="project-title text-white">Cherri Chat</div>
      <div class="flex-row translate">
        <div class="bg-white text-primary flex-row align-center mr-8">中文</div>
        <div class="text-white">English</div>
      </div>
    </div>
    <div class="sperator bg-white" />
    <div class="flex-row align-center pl-32 pr-32">
      <div class="photo bg-white mr-8" />
      <div class="name text-white">潔西卡</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.head {
  height: 80px;
  width: 100%;
  .project-title {
    font-size: 28px;
    font-weight: 400;
  }
  .sperator {
    @include size(1px, 100%);
  }
  .translate {
    & > div {
      padding: 4px 24px;
      border-radius: 30px;
      cursor: pointer;
      &:last-child {
        border: solid 1px $color-white;
      }
    }
  }
  .photo {
    @include size(50px, 50px);
    border-radius: 50%;
  }
  .name {
    font-size: 24px;
    font-weight: 400;
  }
}
</style>