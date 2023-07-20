"use client";

import { Flex, Text } from "@chakra-ui/react";
import { useBlock } from "@starknet-react/core";

export default function Footer() {
  const { data } = useBlock();
  return (
    <Flex h="full" justify="flex-end" align="center">
      <Text>Block number {data?.block_number}</Text>
    </Flex>
  );
}
