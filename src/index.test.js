import React from 'react'
import { mount, shallow } from 'enzyme'
import App from './components/App'

describe('Test para el componente principal de la calculadora', () => {
  it('renderiza la calculadora sin tronar', () => {
    shallow(<App />)
  })
})

describe('Test para probar que los botones numericos', () => {
  it('renderiza los numeros en el display de la calculadora', () => {
    const wrapper = mount(<App />)
    wrapper.find('#button1').simulate('click')
    wrapper.find('#button2').simulate('click')
    wrapper.find('#button3').simulate('click')
    wrapper.find('#button4').simulate('click')
    wrapper.find('#button5').simulate('click')
    wrapper.find('#button6').simulate('click')
    wrapper.find('#button7').simulate('click')
    wrapper.find('#button8').simulate('click')
    wrapper.find('#button9').simulate('click')
    expect(wrapper.find('#display').props().value).toEqual('123456789')
  })
})

describe('Test para probar los botones de operaciones', () => {
  it('renderiza solo los numeros seguidos despues presionar la operacion en el display de la calculadora', () => {
    const wrapper = mount(<App />)
    wrapper.find('#button6').simulate('click')
    wrapper.find('#button9').simulate('click')
    wrapper.find('#buttons').simulate('click')
    wrapper.find('#button4').simulate('click')
    wrapper.find('#button5').simulate('click')
    expect(wrapper.find('#display').props().value).toEqual('45')
  })
})

describe('Test para probar la secuencia de botones para una suma', () => {
  it('renderiza el resultado de una suma en el display de la calculadora', () => {
    const wrapper = mount(<App />)
    wrapper.find('#button1').simulate('click')
    wrapper.find('#button2').simulate('click')
    wrapper.find('#buttons').simulate('click')
    wrapper.find('#button1').simulate('click')
    wrapper.find('#button8').simulate('click')
    wrapper.find('#buttone').simulate('click')
    expect(wrapper.find('#display').props().value).toEqual('30')
  })
})

describe('Test para probar la secuencia de botones para una resta', () => {
  it('renderiza el resultado de una resta en el display de la calculadora', () => {
    const wrapper = mount(<App />)
    wrapper.find('#button2').simulate('click')
    wrapper.find('#button1').simulate('click')
    wrapper.find('#buttonr').simulate('click')
    wrapper.find('#button1').simulate('click')
    wrapper.find('#button2').simulate('click')
    wrapper.find('#buttone').simulate('click')
    expect(wrapper.find('#display').props().value).toEqual('9')
  })
})

describe('Test para probar la secuencia de botones para una multiplicacion', () => {
  it('renderiza el resultado de una multiplicacion en el display de la calculadora', () => {
    const wrapper = mount(<App />)
    wrapper.find('#button4').simulate('click')
    wrapper.find('#button0').simulate('click')
    wrapper.find('#buttonx').simulate('click')
    wrapper.find('#button1').simulate('click')
    wrapper.find('#button0').simulate('click')
    wrapper.find('#button0').simulate('click')
    wrapper.find('#buttone').simulate('click')
    expect(wrapper.find('#display').props().value).toEqual('4000')
  })
})

describe('Test para probar que por medio de botones numericos el display no exceda 999999999', () => {
  it('renderiza el mensaje de MATH ERROR en el display de la calculadora', () => {
    const wrapper = mount(<App />)
    wrapper.find('#button9').simulate('click')
    wrapper.find('#button9').simulate('click')
    wrapper.find('#button9').simulate('click')
    wrapper.find('#button9').simulate('click')
    wrapper.find('#button9').simulate('click')
    wrapper.find('#button9').simulate('click')
    wrapper.find('#button9').simulate('click')
    wrapper.find('#button9').simulate('click')
    wrapper.find('#button9').simulate('click')
    wrapper.find('#button9').simulate('click')
    expect(wrapper.find('#display').props().value).toEqual('MATH ERROR')
  })
})

describe('Test para probar que el display no muestre numeros negativos a traves de un resultado obtenido', () => {
  it('renderiza el mensaje de MATH ERROR en el display de la calculadora', () => {
    const wrapper = mount(<App />)
    wrapper.find('#button4').simulate('click')
    wrapper.find('#buttonr').simulate('click')
    wrapper.find('#button1').simulate('click')
    wrapper.find('#button0').simulate('click')
    wrapper.find('#buttone').simulate('click')
    expect(wrapper.find('#display').props().value).toEqual('MATH ERROR')
  })
})

describe('Test para probar que el display no exceda 999999999 a traves de un resultado obtenido', () => {
  it('renderiza el mensaje de MATH ERROR en el display de la calculadora', () => {
    const wrapper = mount(<App />)
    wrapper.find('#button9').simulate('click')
    wrapper.find('#button9').simulate('click')
    wrapper.find('#button9').simulate('click')
    wrapper.find('#button9').simulate('click')
    wrapper.find('#button9').simulate('click')
    wrapper.find('#button9').simulate('click')
    wrapper.find('#button9').simulate('click')
    wrapper.find('#button9').simulate('click')
    wrapper.find('#button9').simulate('click')
    wrapper.find('#buttons').simulate('click')
    wrapper.find('#button1').simulate('click')
    wrapper.find('#buttone').simulate('click')
    expect(wrapper.find('#display').props().value).toEqual('MATH ERROR')
  })
})
