<template lang="html">
  <div :style="StyleObj">
    <button
    type="button"
    name="button"
    @click = "adaptEntry"
    >
      {{ buttonEntry }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    buttonEntry: String, // Dígito, signo de operación o signo igual
    goodEntry: Boolean,
    spanX: Number(1),
    spanY: Number(1),
    StyleObj: {
      height: (this.spanX === 1)
        ? (Math.sqrt(Math.pow(((45 * this.spanY) + (2 * (this.spanY - 1)))), 2)) : 1 + 'px',
      widht: (this.spanY === 1)
        ? (Math.sqrt(Math.pow(((45 * this.spanX) + (2 * (this.spanX - 1)))), 2)) : 1 + 'px'
    }
  },
  data: function () {
    return this.buttonEntry
  },
  methods: {
    adaptEntry (buttonEntry) {
      var arr = ['C', '%', '^', '/', '*', '+', '-', '=', '(', ')',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      if (this.buttonEntry in arr) {
        return this.buttonEntry
      } else if (isNaN(this.buttonEntry) === false) {
        this.goodEntry = false
      } else {
        this.goodEntry = false
      }
    }
  }
}
</script>

<style lang="css">
  button {
    font-size: 45px;
    font-weight: bold;
    color: rgb(5, 5, 5);
    margin: 2px;
  }
</style>
