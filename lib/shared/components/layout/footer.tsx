"use client";

import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  // TODO Use the useBlock hook from starknet-react to get the current block number
  return (
    <Flex h="full" justify="flex-end" align="center">
      <Text>Block number {/* Add block number here */}</Text>
    </Flex>
  );
}
