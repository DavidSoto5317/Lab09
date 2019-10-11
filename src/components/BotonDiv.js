import React, { PureComponent } from 'react'
import '../css/Estilos.css'

class BotonDiv extends PureComponent {
  presionarBoton() {
    const { texto } = this.props
    const { handle } = this.props
    handle(texto)
  }

  render() {
    const { estilo } = this.props
    const { texto } = this.props
    let id = texto
    if (texto === '=') {
      id = 'e'
    }
    return (
      <button id={`button${id}`} type='button' className={estilo} onClick={this.presionarBoton.bind(this)} disabled>
        {texto}
      </button>
    )
  }
}
export default BotonDiv
