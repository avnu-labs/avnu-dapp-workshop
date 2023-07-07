"use client";

import type { TextProps } from "@chakra-ui/react";
import {
  VStack,
  Text as ChakraText,
  HStack,
  Text,
  Tag,
} from "@chakra-ui/react";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Title() {
  return (
    <VStack align="flex-start">
      <VStack
        bgClip="text"
        spacing={0}
        lineHeight={1.1}
        align="flex-start"
        fontSize="7xl"
        fontWeight="black"
      >
        <Text
          as="h2"
          className="glitch-text glitch layers"
          data-text="Starknet"
          color="white"
        >
          <Text as="span">Starknet</Text>
        </Text>
        <Text
          as="h2"
          className="glitch-text glitch layers"
          data-text="The Quantum Leap"
          color="primary.900"
        >
          <Text as="span">The Quantum Leap</Text>
        </Text>
      </VStack>
      <Tag size="lg">
        <HStack spacing={4} align="center">
          <FontAwesomeIcon icon={faCalendar} />
          <ChakraText fontWeight="black">
            01 July 2023 - 15 July 2023
          </ChakraText>
        </HStack>
      </Tag>
    </VStack>
  );
}
