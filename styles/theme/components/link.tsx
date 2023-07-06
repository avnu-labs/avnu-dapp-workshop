import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brand = defineStyle({
  fontSize: "4xl",
  fontWeight: "black",
  _hover: {},
  _light: {},
});
const brandSelected = defineStyle({
  color: "red",
  _hover: {},
  _light: {},
});
export default defineStyleConfig({
  variants: { brand, brandSelected },
  defaultProps: {
    variant: "brand",
  },
});
