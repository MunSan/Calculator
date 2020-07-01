import ButtonComponent from '@/components/Boton.vue'
import { shallowMount, mount } from '@vue/test-utils'
import sinon from 'sinon'

let wrapper
beforeEach(() => {
  wrapper = shallowMount(ButtonComponent, {
    propsData: { value: '=' }
  })
})
describe('Boton.vue', () => {
  it('renderiza el texto del botón', () => {
    expect(wrapper.props().value).toBe('=')
    expect(wrapper.html()).toContain('=')
  })
  it('pasa valor por evento', () => {
    let espia = sinon.spy()
    let wrapper = mount(ButtonComponent, {
      propsData: {
        value: espia
      }})
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.value).toHaveBeenCalled()
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
    wrapper.vm.setSpans()
    let sx = wrapper.vm.dataSpanX
    let sy = wrapper.vm.dataSpanY
    let ht = wrapper.vm.StyleObj.height
    let wt = wrapper.vm.StyleObj.widht
    wrapper.setProps({ spanX: '2' })
    wrapper.vm.setSpans()
    expect(wt).toBe(45 * sx + 2 * (sx - 1) + 'px')
    // 45 * sx + 2 * (sx - 1)
    wrapper.setProps({ spanY: '2' })
    wrapper.setSpans()
    expect(ht).toBe(45 * sy + 2 * (sy - 1) + 'px')
    // 45 * sy + 2 * (sy - 1)
  })
  it('spans toman valores uno respecto del otro', () => {
    wrapper.setProps({ spanX: '2' })
    wrapper.vm.setSpans()
    expect(wrapper.vm.dataSpanY).toBe(1)
    wrapper.setProps({ spanY: '2' })
    wrapper.vm.setSpans()
    expect(wrapper.vm.dataSpanX).toBe(1)
  })
  it('renderiza el texto del botón', () => {
    expect(wrapper.html()).toContain('=')
  })
})
