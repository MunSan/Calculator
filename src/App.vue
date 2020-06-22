<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <section>
       <button-component
        value=7 spanX=0>
       </button-component>
    </section>
  </div>
</template>

<script>
import ButtonComponent from './components/Boton.vue'

export default {
  name: 'App',
  components: {
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
