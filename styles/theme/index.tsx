import type { ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import colors from './colors';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const overrides = {
  config,
  fontSizes: {
    xxs: '11px',
    xs: '13px',
  },
  styles: {
    global: () => ({
      body: {
        // fontFeatureSettings: "'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on",
        // fontVariant: 'none !important',
        _light: {
          bg: 'white',
          color: 'black',
        },
        _dark: {
          bg: 'black',
          color: 'white',
        },
      },
    }),
  },
  colors,
  components: {

  },
};

export default extendTheme(overrides);
