import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brand = defineStyle({
  header: {
    bg: "white",
    borderRadius: "md",
    px: 8,
  },
  dialog: {
    bg: "white",
    paddingBottom: 4,
    borderRadius: "xl",
  },
});

export default defineStyleConfig({
  variants: { brand },
});
