import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import '../../css/Estilos.css'
import BotonDiv from './BotonDiv'

storiesOf('BotonDiv', module)
  .addDecorator(withKnobs)
  .add('Boton Default', () => <BotonDiv />, {
    notes: 'Esta es la creacion del componente default para el Boton de Divisiones',
  })
  .add('Agregando Estilo', () =>  <BotonDiv estilo='botonDiv' />, {
    notes: 'Aqui le agregamos estilo al boton de divisiones',
  })
  .add('Agregando Texto', () => <BotonDiv estilo='botonDiv' texto='/' ></BotonDiv>, {
    notes: 'Aqui se le agrega el texto que llevara el boton de divisiones',
  })
  .add('Agregando Handle Click para Operar', () => <BotonDiv estilo='botonDiv' texto='/' handle={action('operar')} ></BotonDiv>, {
    notes: 'Aqui se le agrega la funcionalidad del click con la funcion operar',
  })
  .add('Desabilitando Boton', () => <BotonDiv estilo='botonDiv' texto='/' handle={action('operar')} dis></BotonDiv>, {
    notes: 'Aqui se desabilita el boton de divisiones',
  })
  .add('Desabilitando Boton with Knob', () => <BotonDiv estilo='botonDiv' texto='/' handle={action('operar')} dis={boolean('Disabled', true)}></BotonDiv>, {
    notes: 'Aqui se permite habilitar y desabilitar el boton de divisiones con un knob',
  })
