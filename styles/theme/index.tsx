import type { ThemeConfig } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import Modal from "./components/modal";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const overrides = {
  config,
  fontSizes: {
    xxs: "11px",
    xs: "13px",
  },
  styles: {
    global: () => ({
      body: {
        _light: {
          bg: "linear-gradient(68.66deg,#e8e2ff 1.3%,#f7f5ff 50%)",
          color: "black",
        },
        _dark: {
          bg: "black",
          color: "white",
        },
      },
    }),
  },
  colors,
  components: {
    Modal,
  },
};

export default extendTheme(overrides);
