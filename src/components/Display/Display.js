import React, { PureComponent } from 'react'
import '../../css/Estilos.css'

class Display extends PureComponent {
  render() {
    const { estilo } = this.props
    const { valor } = this.props
    const { readO } = this.props
    return (
      <input id='display' type='display' className={estilo} value={valor} readOnly={readO} />
    )
  }
}
export default Display
