<template>
  <div class="content">
    <div>
      <thead>
        <tr>
          <th><buttonComponent value='1' @give-value="getValue(oper)"> </buttonComponent></th>
          <th><buttonComponent value='2' @give-value="getValue(oper)"> </buttonComponent></th>
          <th><buttonComponent value='3' @give-value="getValue(oper)"> </buttonComponent></th>
          <th><buttonComponent value='+' @give-value="getValue(oper)"> </buttonComponent></th>
        </tr>
      </thead>
    </div>
    <div>
      <thead>
        <tr>
          <th><buttonComponent value='4' @give-value="getValue(oper)"> </buttonComponent></th>
          <th><buttonComponent value='5' @give-value="getValue(oper)"> </buttonComponent></th>
          <th><buttonComponent value='6' @give-value="getValue(oper)"> </buttonComponent></th>
          <th><buttonComponent value='-' @give-value="getValue(oper)"> </buttonComponent></th>
        </tr>
      </thead>
    </div>
    <div>
      <thead>
        <tr>
          <th><buttonComponent value='7' @give-value="getValue(oper)"> </buttonComponent></th>
          <th><buttonComponent value='8' @give-value="getValue(oper)"> </buttonComponent></th>
          <th><buttonComponent value='9' @give-value="getValue(oper)"> </buttonComponent></th>
          <th><buttonComponent value='*' @give-value="getValue(oper)"> </buttonComponent></th>
        </tr>
      </thead>
    </div>
    <div>
      <thead>
        <tr>
          <th><buttonComponent value='0' @give-value="getValue(oper)"> </buttonComponent></th>
          <th><buttonComponent class="content" value='=' spanX=2 @give-value="calCular(oper)"> </buttonComponent></th>
          <th><buttonComponent class="content" value='/' @give-value="getValue(oper)"> </buttonComponent></th>
        </tr>
      </thead>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import ButtonComponent from './Boton.vue'

export default {
  name: 'KeyboardComponent',
  components: {
    ButtonComponent,
    store: store
  },
  props: {
    operando1: { type: Number(), default: '' },
    operando2: { type: Number(), default: '' },
    operador: { type: String(), default: '' }
  },
  methods: {
    calCular () {
      let auxCalc = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y },
        '/': function (x, y) { return x / y },
        '*': function (x, y) { return x * y }
      }
      this.resulTado = auxCalc[this.dataOpr](Number(this.dataOp1), Number(this.dataOp2))
      this.$emit(this.resulTado)
      this.dataOpr = this.dataOp1 = this.dataOp2 = ''
      this.$store.commit('truefirst')
      this.$store.commit('trueheadstart')
      this.$store.commit('truenotready')
    },
    getValue: function (oper) {
      console.log('Ingresando primer operando (getValue)')
      if (isNaN(oper)) {
        this.$store.commit('falsefirst')
        this.dataOpr = oper
      } else {
        if (this.$store.checkfirst === true) {
          this.$store.commit('falseheadstart')
          this.dataOp1 += oper
        } else {
          this.$store.commit('falsenotready')
          this.dataOp2 += oper
        }
      }
    }
  },
  data: function () {
    return {
      dataOp1: { type: Number(), default: this.operando1 },
      dataOp2: { type: Number(), default: this.operando2 },
      dataOpr: { type: String(), default: this.operador },
      resulTado: { type: Number(), default: null }
    }
  }
}
</script>

<style scoped lang="css">
  .content {
    max-width: 200px;
    /* min-width: 58px; */
    margin: auto;
  }
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
</style>
