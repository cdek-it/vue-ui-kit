import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import './newLabel.css';

const theme = create({
  base: 'light',
  
  brandTitle: 'CDEK UI Kit',
  brandUrl: '',
  brandImage: './assets/CDEK.svg',
  brandTarget: '_self',
});

addons.setConfig({
  theme,
});
