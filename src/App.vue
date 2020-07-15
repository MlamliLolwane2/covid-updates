<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  watch: {
    $route: {
      handler: to => {
        document.title = to.meta.title || "Covid Updates - Home";
      },
      immediate: true
    }
  }
};
</script>

<style>
</style>
