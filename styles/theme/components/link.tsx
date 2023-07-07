import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brand = defineStyle({
  fontSize: "4xl",
  fontWeight: "regular",
  transition: "all .5s",
  _hover: {
    textDecoration: "none",
    opacity: 0.5,
  },
  _light: {},
});
export default defineStyleConfig({
  variants: { brand },
  defaultProps: {
    variant: "brand",
  },
});