<template lang="html">
  <div>
    <button
    class="goodButton"
    type="button"
    :style="StyleObj"
    @click = getValue()
    v-if = goodEntry(value)
    >
      {{ value }}
    </button>
    <button
    class="badButton"
    type="button"
    :style="StyleObj"
    @click = getValue()
    v-else
    >
      Bad character entry
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    value: String(), // Dígito, signo de operación o signo igual
    spanX: {
      type: Number(),
      default: 1
    },
    spanY: {
      type: Number(),
      default: 1
    }
  },
  methods: {
    goodEntry (value) {
      var arr = ['C', '%', '^', '/', '*', '+', '-', '=', '(', ')',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      if (String(this.value) in arr) {
        return true
      } else {
        return false
      }
    },
    getValue () {
      return this.value
    },
    setSpans () {
      if (this.spanX >= 1) {
        this.spanX = parseInt(Math.sqrt(Math.pow(this.spanX, 2)), 10)
        this.spanY = 1
      } else {
        this.spanX = 1
      }
      if (this.spanY >= 1) {
        this.spanY = parseInt(Math.sqrt(Math.pow(this.spanY, 2)), 10)
        this.spanX = 1
      } else {
        this.spanY = 1
      }
      // Haciendo raíz del resultado al cuadrado, me desligo de los números negativos
    }
  },
  computed: {
    StyleObj: function () {
      return {
        height: String(this.computedHeight.height) + 'px',
        widht: String(this.computedWidht.widht) + 'px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'rgb(5, 5, 5)',
        margin: '2px'
      }
    },
    computedHeight () {
      let height = Number
      if (this.spanY > 1) {
        height = (this.spanX > 1)
          ? 45 : (45 * this.spanY + 2 * (this.spanY - 1))
      } else {
        height = 45
      }
      return {
        height
      }
    },
    computedWidht () {
      let widht = Number
      if (this.spanX > 1) {
        widht = (this.spanY > 1)
          ? 45 : (45 * this.spanX + 2 * (this.spanX - 1))
      } else {
        widht = 45
      }
      return {
        widht
      }
    }
  },
  created () {
    this.setSpans()
  }
}
</script>

<style lang="css">
  /*button { font-size: 18px; font-weight: bold; color: rgb(5, 5, 5); margin: 2px; }*/
</style>
