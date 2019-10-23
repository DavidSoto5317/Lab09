import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import myTheme from './myTheme';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);

// Option defaults.
addParameters({
  options: {
    theme: myTheme,
  },
});