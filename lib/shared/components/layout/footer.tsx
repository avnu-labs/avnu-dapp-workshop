"use client";

import { HStack, Link } from "@chakra-ui/react";
import type { ReactNode } from "react";

import GlitchText from "@/lib/shared/components/text/glitch-text";

function MenuItem({ children }: { children: ReactNode }) {
  return (
    <Link>
      <GlitchText>{children}</GlitchText>
    </Link>
  );
}

export default function Footer() {
  return (
    <HStack spacing={20} h="full" align="center" fontWeight="sm">
      <MenuItem>Home</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Partners</MenuItem>
    </HStack>
  );
}
