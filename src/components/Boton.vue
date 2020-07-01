<template lang="html">
  <div>
    <button class="goodButton"
    type="button"
    :disabled="$store.commit('checkstate', value)"
    :style="StyleObj"
    @click="giveValue('get-value', value)"
    v-if="goodEntry(value)"
    >
      {{ value }}
    </button>
    <button class="badButton" type="button" :style="StyleObj" @click="giveValue(value)"
    v-else
    >
      Bad character entry
    </button>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'ButtonComponent',
  props: {
    value: String(), // Dígito, signo de operación o signo igual
    spanX: { type: Number(), default: 1 },
    spanY: { type: Number(), default: 1 },
    store: store
  },
  data: function () {
    return {
      dataSpanX: { type: Number(), default: this.spanX },
      dataSpanY: { type: Number(), default: this.spanY }
    }
  },
  methods: {
    goodEntry (value) {
      let arr = ['C', '%', '^', '/', '*', '+', '-', '=', '(', ')',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      if (arr.includes(this.value)) {
        return true
      } else {
        return false
      }
    },
    giveValue () {
      this.$emit('get-value', this.value)
      // console.log(String(this.computedHeight))
    },
    setSpans () {
      if (this.spanX > 1) {
        this.dataSpanX = parseInt(Number(this.spanX), 10)
        this.dataSpanY = 1
      } else {
        this.dataSpanX = 1
      }
      if (this.spanY > 1) {
        this.dataSpanY = parseInt(Number(this.spanY), 10)
        this.dataSpanX = 1
      } else {
        this.dataSpanY = 1
      }
    }
  },
  computed: {
    StyleObj () {
      return {
        height: String(this.computedHeight) + 'px',
        width: String(this.computedWidth) + 'px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'rgb(5, 5, 5)',
        margin: '1px'
      }
    },
    computedHeight () {
      let height = Number
      if (this.dataSpanY > 1) {
        height = (this.dataSpanX > 1)
          ? 45 : (45 * this.dataSpanY + 2 * (this.dataSpanY - 1))
      } else {
        height = 45
      }
      return height
    },
    computedWidth () {
      let width = Number
      if (this.dataSpanX > 1) {
        width = (this.dataSpanY > 1)
          ? 45 : (45 * this.dataSpanX + 2 * (this.dataSpanX - 1))
      } else {
        width = 45
      }
      return width
    }
  },
  mounted: function () {
    this.setSpans()
  }
}
</script>

<style scoped lang="css">
  /*button { font-size: 18px; font-weight: bold; color: rgb(5, 5, 5); margin: 2px; }*/
</style>
