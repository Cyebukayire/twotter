<template>
<div id="app">
  <nav>
    <router-link to='/'>
        <div class="navigation__logo">
          Twotter
          </div>
    </router-link>

    <router-link to="/">
      <div class="navigation__user">
        {{ user.username }}
      </div>
    </router-link>
  </nav>
  <router-view/>
</div>
</template>

<script>
// import { reactive } from 'vue'

export default {
  name: 'App',

  //  setup() {
  //   const state = reactive({
  //     user: {
  //       username: '_PeaceAida'
  //     }
  //   })

  //   return {
  //     state
  //   }
  // }


  data() {
    return {
      user: {
        username: '_Peace'
      }
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #F3F5FA;
  
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: deeppink;
    color: white;

    .navigation__logo {
      font-weight: bold;
      font-size: 24px;
    }

    .navigation__user {
      font-weight: bold;
    }
  }
}
</style>
