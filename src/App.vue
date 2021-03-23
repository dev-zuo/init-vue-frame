<template>
  <div id="app">
    <div id="nav">
      <p>{{ $t('un') }}</p>
      <p>{{ $t('message.hello') }} {{ $t('message.greeting') }}</p>
      <p>{{ $t('message.arr')[0] }} {{ $t('message.arr')[1] }}</p>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    setTimeout(() => {
      console.log('lang change')
      this.$root.$i18n.locale = 'en'
    }, 5000)
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
