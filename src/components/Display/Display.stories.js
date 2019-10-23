import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import '../../css/Estilos.css'
import Display from './Display'

storiesOf('Display', module)
  .addDecorator(withKnobs)
  .add('Display Default', () => <Display />, {
    notes: 'Esta es la creacion del componente default para el Display',
  })
  .add('Agregando Estilo', () =>  <Display estilo='display' />, {
    notes: 'Aqui se le agrega estilo al componente Display',
  })
  .add('Valor Default', () =>  <Display estilo='display' valor='0' />, {
    notes: 'Aqui se le incluye un valor default en el display que no puede ser cambiado a mano, solo con la propiedad value',
  })
  .add('Display ReadOnly', () =>  <Display estilo='display' valor='0' readO/>, {
    notes: 'Aqui se hace que el Display se solo ReadOnly',
  })
  .add('ReadOnly with Knob', () =>  <Display estilo='display' valor='0' readO={boolean('ReadOnly', true)}/>, {
    notes: 'Aqui se permite desabilitar y habilitar el componente Input del Display con un knob',
  })
  
