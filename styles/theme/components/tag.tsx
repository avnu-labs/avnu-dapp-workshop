import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brand = defineStyle({
  container: {
    transform: "rotate(2deg)",
    bg: "white",
    color: "greyDark.100",
    boxShadow: "md",
  },
});
export default defineStyleConfig({
  variants: { brand },
  defaultProps: {
    variant: "brand",
  },
});
