import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: 'grey',
  colorSecondary: 'red',

  // UI
  appBg: 'black',
  appContentBg: 'rgba(128,0,0,0.9)',
  appBorderColor: 'black',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'grey',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: 'black',
  barBg: 'red',

  // Form colors
  inputBg: 'white',
  inputBorder: 'black',
  inputTextColor: 'black',
  inputBorderRadius: 4,
});