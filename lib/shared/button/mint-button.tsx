"use client";

import { Button, Text, VStack } from "@chakra-ui/react";

export default function MintButton() {
  return (
    <VStack spacing={1}>
      <Button>Make history</Button>
      <Text color="grey.700" fontWeight="semibold">
        173&apos;844 minted
      </Text>
    </VStack>
  );
}
