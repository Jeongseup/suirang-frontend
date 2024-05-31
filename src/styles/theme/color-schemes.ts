import type { ColorSystemOptions } from '@mui/material/styles';

import { california, kepple, neonBlue, nevada, redOrange, shakespeare, stormGrey } from './colors';
import type { ColorScheme } from './types';

export const colorSchemes = {
  dark: {
    palette: {
      action: { disabledBackground: 'rgba(0, 0, 0, 0.12)' },
      background: {
        default: '#121212',
        defaultChannel: '18 18 18',
        paper: '#1D1D1D',
        level1: '#2C2C2C',
        level2: '#383838',
        level3: '#424242',
      },
      common: { black: '#000000', white: '#ffffff' },
      divider: '#424242',
      dividerChannel: '66 66 66',
      error: {
        ...redOrange,
        light: redOrange[300],
        main: redOrange[400],
        dark: redOrange[500],
        contrastText: '#000000',
      },
      info: {
        ...shakespeare,
        light: shakespeare[300],
        main: shakespeare[400],
        dark: shakespeare[500],
        contrastText: '#000000',
      },
      neutral: { ...nevada },
      primary: {
        ...neonBlue,
        light: neonBlue[300],
        main: neonBlue[400],
        dark: neonBlue[500],
        contrastText: '#000000',
      },
      secondary: {
        ...nevada,
        light: nevada[100],
        main: nevada[200],
        dark: nevada[300],
        contrastText: '#000000',
      },
      success: {
        ...kepple,
        light: kepple[300],
        main: kepple[400],
        dark: kepple[500],
        contrastText: '#000000',
      },
      text: {
        primary: '#E0E0E0',
        primaryChannel: '224 224 224',
        secondary: '#B0BEC5',
        secondaryChannel: '176 188 197',
        disabled: '#757575',
      },
      warning: {
        ...california,
        light: california[300],
        main: california[400],
        dark: california[500],
        contrastText: '#000000',
      },
    },
  },
  light: {
    palette: {
      action: { disabledBackground: 'rgba(0, 0, 0, 0.12)' },
      background: {
        default: '#121212',
        defaultChannel: '18 18 18',
        paper: '#1D1D1D', // Slightly lighter background for paper elements
        level1: '#2C2C2C',
        level2: '#383838',
        level3: '#424242',
      },
      common: { black: '#000000', white: '#ffffff' },
      divider: '#424242',
      dividerChannel: '66 66 66',
      error: {
        ...redOrange,
        light: redOrange[300],
        main: redOrange[400],
        dark: redOrange[500],
        contrastText: '#000000',
      },
      info: {
        ...shakespeare,
        light: shakespeare[300],
        main: shakespeare[400],
        dark: shakespeare[500],
        contrastText: '#000000',
      },
      neutral: { ...nevada },
      primary: {
        ...neonBlue,
        light: neonBlue[300],
        main: neonBlue[400],
        dark: neonBlue[500],
        contrastText: '#000000',
      },
      secondary: {
        ...nevada,
        light: nevada[100],
        main: nevada[200],
        dark: nevada[300],
        contrastText: '#000000',
      },
      success: {
        ...kepple,
        light: kepple[300],
        main: kepple[400],
        dark: kepple[500],
        contrastText: '#000000',
      },
      text: {
        primary: '#E0E0E0',
        primaryChannel: '224 224 224',
        secondary: '#B0BEC5',
        secondaryChannel: '176 188 197',
        disabled: '#757575',
      },
      warning: {
        ...california,
        light: california[300],
        main: california[400],
        dark: california[500],
        contrastText: '#000000',
      },
    },
  },
} satisfies Partial<Record<ColorScheme, ColorSystemOptions>>;
