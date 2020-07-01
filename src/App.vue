<script src="https://unpkg.com/vuex"></script>
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
       <keyboard-component>
       </keyboard-component>
  </div>
</template>

<script>
import KeyboardComponent from './components/Teclado.vue'
import ButtonComponent from './components/Boton.vue'

export default {
  name: 'App',
  components: {
    KeyboardComponent,
    ButtonComponent
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
