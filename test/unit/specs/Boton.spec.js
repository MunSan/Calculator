import ButtonComponent from '@/components/Boton.vue'
import { shallowMount } from '@vue/test-utils'

let wrapper
beforeEach(() => {
  wrapper = shallowMount(ButtonComponent, {
    propsData: { value: '=' }
  })
})
describe('Boton.vue', () => {
  it('renderiza el texto del botón', () => {
    wrapper.setProps({ value: '=' })
    expect(wrapper.props().value).toBe('=')
    expect(wrapper.html()).toContain('=')
    // Un valor correcto se envía y el botón adopta
    wrapper.setProps({ value: '@' })
    expect(wrapper.vm.goodEntry('@')).toBeFalsy()
    expect(wrapper.html()).toContain('Bad character entry')
    // Un valor incorrecto devuelve false en goodEntry
  })
  it('pasa valor por evento', () => {
    wrapper.setProps({ value: '+' })
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.getValue()).toBe('+')
  })
  it('spanX y spanY son enteros', () => {
    expect(Number.isInteger(wrapper.vm.spanX)).toBeTruthy()
    expect(Number.isInteger(wrapper.vm.spanY)).toBeTruthy()
  })
  it('spanX y spanY son mayores a cero', () => {
    expect(wrapper.vm.spanX > 0).toBeTruthy()
    expect(wrapper.vm.spanY > 0).toBeTruthy()
  })
  it('el ancho respeta la fórmula', () => {
    let sx = wrapper.vm.spanX
    let sy = wrapper.vm.spanY
    let ht = wrapper.vm.StyleObj.height
    let wt = wrapper.vm.StyleObj.widht
    wrapper.setProps({ spanX: '2' })
    expect(wt).toBe(45 * sx + 2 * (sx - 1) + 'px')
    // 45 * sx + 2 * (sx - 1)
    wrapper.setProps({ spanY: '2' })
    expect(ht).toBe(45 * sy + 2 * (sy - 1) + 'px')
    // 45 * sy + 2 * (sy - 1)
  })
  it('spans toman valores uno respecto del otro', () => {
    wrapper.setProps({ spanX: '2' })
    wrapper.vm.setSpans()
    expect(wrapper.vm.spanY).toBe(1)
    wrapper.setProps({ spanY: '2' })
    wrapper.vm.setSpans()
    expect(wrapper.vm.spanX).toBe(1)
  })
  it('renderiza el texto del botón', () => {
    expect(wrapper.html()).toContain('=')
  })
})
