import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brand = defineStyle({
  transition: "0.3s",
  borderRadius: "full",
  fontWeight: "black",
  px: 8,
  boxShadow: "md",
  _hover: {
    boxShadow: "lg",
  },
  _active: {
    boxShadow: "base",
  },
  _light: {
    bg: "primary.900",
    color: "white",
  },
});
export default defineStyleConfig({
  variants: { brand },
  defaultProps: {
    variant: "brand",
  },
});
