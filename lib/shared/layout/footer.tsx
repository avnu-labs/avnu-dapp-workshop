"use client";

import { Text, HStack, Link } from "@chakra-ui/react";
import type { ReactNode } from "react";

function MenuItem({ children }: { children: ReactNode }) {
  return <Link>{children}</Link>;
}
export default function Footer() {
  return (
    <HStack spacing={20} h="full" align="center">
      <MenuItem>Home</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Partners</MenuItem>
    </HStack>
  );
}
