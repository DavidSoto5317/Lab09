import React, { PureComponent } from 'react'
import '../css/Estilos.css'

class Display extends PureComponent {
  render() {
    const { estilo } = this.props
    const { valor } = this.props
    return (
      <input id='display' type='display' className={estilo} value={valor} readOnly />
    )
  }
}
export default Display
