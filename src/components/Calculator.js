import React, { PureComponent } from 'react'
import '../css/Estilos.css'
import Display from './Display'
import Boton from './Boton'
import BotonDiv from './BotonDiv'

class Calculator extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      numero1: 0,
      numero2: 0,
      operador: '',
      display: '0',
      igual: false,
    }
  }

  ingresarNumero(numero) {
    const { operador } = this.state
    const { display } = this.state
    const { numero1 } = this.state
    const { numero2 } = this.state
    const { igual } = this.state
    if (display === 'MATH ERROR') {
      this.setState({
        display: '0',
      })
    }

    if (operador === '') {
      if (numero1 <= 99999999) {
        if (igual === true) {
          this.setState({
            igual: false,
            display: numero,
            numero1: parseInt(numero, 10),
          })
        } else if (numero1 === 0) {
          this.setState({
            display: numero,
            numero1: parseInt(numero, 10),
          })
        } else {
          this.setState({
            display: display + numero,
            numero1: parseInt(display + numero, 10),
          })
        }
      } else {
        // console.log('error')
        this.setState({
          display: 'MATH ERROR',
          operador: '',
          numero1: parseInt('0', 10),
          numero2: parseInt('0', 10),
        })
      }
    } else if (numero2 <= 99999999) {
      // console.log('numero2 se esta jalando')
      if (numero2 === 0 || (numero2 === 0 && (operador === 'x' || operador === '/'))) {
        this.setState({
          display: numero,
          numero2: parseInt(numero, 10),
        })
      } else {
        this.setState({
          display: display + numero,
          numero2: parseInt(display + numero, 10),
        })
      }
    } else {
      // console.log('error')
      this.setState({
        display: 'MATH ERROR',
        operador: '',
        numero1: parseInt('0', 10),
        numero2: parseInt('0', 10),
      })
    }
  }

  ingresarOperando(operando) {
    const { operador } = this.state
    const { igual } = this.state
    const { numero1 } = this.state
    const { numero2 } = this.state

    if (igual === true) {
      this.setState({
        igual: false,
      })
    }

    if (numero1 === 0) {
      this.setState({
        operador: '',
      })
    } else if (operador === '') {
      if (operando !== '/') {
        this.setState({
          operador: operando,
        })
      }
    } else if (operador !== '') {
      if (operador === '+') {
        if ((parseInt(numero1 + numero2, 10)) > 999999999) {
          this.setState({
            display: 'MATH ERROR',
            operador: '',
            numero1: parseInt('0', 10),
            numero2: parseInt('0', 10),
          })
        } else {
          this.setState({
            display: (parseInt(numero1 + numero2, 10)).toString(),
            numero1: parseInt(numero1 + numero2, 10),
            numero2: 0,
            operador: operando,
          })
        }
      } else if (operador === '-') {
        if ((parseInt(numero1 - numero2, 10)) < 0) {
          this.setState({
            display: 'MATH ERROR',
            operador: '',
            numero1: parseInt('0', 10),
            numero2: parseInt('0', 10),
          })
        } else {
          this.setState({
            display: (parseInt(numero1 - numero2, 10)).toString(),
            numero1: parseInt(numero1 - numero2, 10),
            numero2: 0,
            operador: operando,
          })
        }
      } else if (operador === 'x') {
        if (numero2 === 0) {
          this.setState({
            display: (parseInt(numero1, 10)).toString(),
            numero1: parseInt(numero1, 10),
            numero2: 0,
            operador: operando,
          })
        } else if ((parseInt(numero1 * numero2, 10)) > 999999999) {
          this.setState({
            display: 'MATH ERROR',
            operador: '',
            numero1: parseInt('0', 10),
            numero2: parseInt('0', 10),
          })
        } else {
          this.setState({
            display: (parseInt(numero1 * numero2, 10)).toString(),
            numero1: parseInt(numero1 * numero2, 10),
            numero2: 0,
            operador: operando,
          })
        }
      }
    }
  }

  operarNumero(operacion) {
    const { numero1 } = this.state
    const { numero2 } = this.state
    const { operador } = this.state
    if (operacion === '=') {
      if (operador === '+') {
        if ((parseInt(numero1 + numero2, 10)) > 999999999) {
          this.setState({
            display: 'MATH ERROR',
            operador: '',
            numero1: parseInt('0', 10),
            numero2: parseInt('0', 10),
          })
        } else {
          this.setState({
            display: (parseInt(numero1 + numero2, 10)).toString(),
            numero1: parseInt(numero1 + numero2, 10),
            numero2: 0,
            operador: '',
            igual: true,
          })
        }
      } else if (operador === '-') {
        if ((parseInt(numero1 - numero2, 10)) < 0) {
          this.setState({
            display: 'MATH ERROR',
            operador: '',
            numero1: parseInt('0', 10),
            numero2: parseInt('0', 10),
          })
        } else {
          this.setState({
            display: (parseInt(numero1 - numero2, 10)).toString(),
            numero1: parseInt(numero1 - numero2, 10),
            numero2: 0,
            operador: '',
            igual: true,
          })
        }
      } else if (operador === 'x') {
        if (numero2 === 0) {
          this.setState({
            display: (parseInt(numero1, 10)).toString(),
            numero1: parseInt(numero1, 10),
            numero2: 0,
            operador: '',
            igual: true,
          })
        } else if ((parseInt(numero1 * numero2, 10)) > 999999999) {
          this.setState({
            display: 'MATH ERROR',
            operador: '',
            numero1: parseInt('0', 10),
            numero2: parseInt('0', 10),
          })
        } else {
          this.setState({
            display: (parseInt(numero1 * numero2, 10)).toString(),
            numero1: parseInt(numero1 * numero2, 10),
            numero2: 0,
            operador: '',
            igual: true,
          })
        }
      } else {
        this.setState({
          display: (parseInt(numero1, 10)).toString(),
          numero1: parseInt(numero1, 10),
          numero2: 0,
          operador: '',
          igual: true,
        })
      }
    }
  }

  render() {
    const { estilo } = this.props
    const { display } = this.state

    return (
      <div type='container' className={estilo}>
        <Display estilo='display' valor={display} />
        <div className='grid'>
          <Boton texto='7' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='8' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='9' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='+' estilo='boton' handle={this.ingresarOperando.bind(this)}> </Boton>
          <Boton texto='-' estilo='boton' handle={this.ingresarOperando.bind(this)}> </Boton>
          <Boton texto='4' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='5' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='6' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='x' estilo='boton' handle={this.ingresarOperando.bind(this)}> </Boton>
          <BotonDiv texto='/' estilo='botonDiv' handle={this.ingresarOperando.bind(this)}> </BotonDiv>
          <Boton texto='1' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='2' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='3' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='0' estilo='boton' handle={this.ingresarNumero.bind(this)}> </Boton>
          <Boton texto='=' estilo='boton' handle={this.operarNumero.bind(this)}> </Boton>
        </div>
      </div>
    )
  }
}
export default Calculator
