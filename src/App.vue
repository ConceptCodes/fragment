<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
  * {
    font-family: 'Poppins', sans-serif;
  }
  #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
</style>
