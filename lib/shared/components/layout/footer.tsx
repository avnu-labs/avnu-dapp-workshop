"use client";

import { HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import type { ReactNode } from "react";

import GlitchText from "@/lib/shared/components/text/glitch-text";

function MenuItem({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link as={NextLink} href={href}>
      <GlitchText>{children}</GlitchText>
    </Link>
  );
}

export default function Footer() {
  return (
    <HStack spacing={20} h="full" align="center" fontWeight="sm">
      <MenuItem href="/">Home</MenuItem>
      <MenuItem href="/about">About</MenuItem>
      <MenuItem href="/partners">Partners</MenuItem>
    </HStack>
  );
}
