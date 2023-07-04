"use client";

import type { TextProps } from "@chakra-ui/react";
import { VStack, Text as ChakraText } from "@chakra-ui/react";

export default function Title(props: TextProps) {
  return (
    <VStack>
      <ChakraText as="h1" fontWeight="bold" {...props}>
        Starknet
      </ChakraText>
      <ChakraText as="h2" fontWeight="bold" {...props}>
        The Quantum Leap
      </ChakraText>
    </VStack>
  );
}
