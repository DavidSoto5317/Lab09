import React, { PureComponent } from 'react'
import '../css/Estilos.css'

class Boton extends PureComponent {
  presionarBoton() {
    const { texto } = this.props
    const { handle } = this.props
    handle(texto)
  }

  render() {
    const { estilo } = this.props
    const { texto } = this.props
    let id = texto
    if (texto === '+') {
      id = 's'
    } else if (texto === '-') {
      id = 'r'
    } else if (texto === '/') {
      id = 'd'
    } else if (texto === '=') {
      id = 'e'
    }
    return (
      <button id={`button${id}`} type='button' className={estilo} onClick={this.presionarBoton.bind(this)}>
        {texto}
      </button>
    )
  }
}
export default Boton
