"use client";

import type { TextProps } from "@chakra-ui/react";
import { VStack, Text as ChakraText, HStack } from "@chakra-ui/react";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Title(props: TextProps) {
  return (
    <VStack align="flex-start">
      <VStack spacing={0} align="flex-start" fontSize="7xl" fontWeight="black">
        <ChakraText as="h1" {...props}>
          Starknet
        </ChakraText>
        <ChakraText as="h2" {...props}>
          The Quantum Leap
        </ChakraText>
      </VStack>
      <HStack spacing={4} fontSize="2xl" align="center">
        <FontAwesomeIcon icon={faCalendar} />
        <ChakraText fontWeight="black">01 July 2023 - 15 July 2023</ChakraText>
      </HStack>
    </VStack>
  );
}
