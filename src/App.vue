<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
  font-size: 16px;
  font-family: 微軟正黑體;
}

#app {
  @include size(100%, 100%);
}
</style>
