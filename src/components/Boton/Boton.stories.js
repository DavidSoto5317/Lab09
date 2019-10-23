import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import '../../css/Estilos.css'
import Boton from './Boton'

storiesOf('Boton', module)
  .add('Boton Default', () => <Boton />, {
    notes: 'Esta es la creacion del componente default para el Boton',
  })
  .add('Agregando Estilo', () =>  <Boton estilo='boton'/>, {
    notes: 'Aqui le agregamos estilo al boton',
  })
  .add('Agregando Texto', () => <Boton estilo='boton' texto='+'></Boton>, {
    notes: 'Aqui se le agrega el texto que llevara el boton',
  })
  .add('Agregando Handle Click para Operar', () => <Boton estilo='boton' texto='+' handle={action('operar')}></Boton>, {
    notes: 'Aqui se le agrega la funcionalidad del click con la funcion operar',
  })
