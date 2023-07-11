"use client";

import { Flex, Text } from "@chakra-ui/react";

import ConnectButton from "@/lib/wallet/components/connect-button";

export default function Header() {
  return (
    <Flex align="center" justify="space-between" py={4}>
      <Text fontSize="lg" fontWeight="bold">
        AVNU Workshop
      </Text>
      <ConnectButton colorScheme="blue" />
    </Flex>
  );
}
