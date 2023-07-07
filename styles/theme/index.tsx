import type { ThemeConfig } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import Button from "./components/button";
import Link from "./components/link";
import Modal from "./components/modal";
import Tag from "./components/tag";

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
        // fontFeatureSettings: "'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on",
        // fontVariant: 'none !important',
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
    Button,
    Link,
    Modal,
    Tag,
  },
};

export default extendTheme(overrides);
