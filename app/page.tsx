"use client";

import { Text, VStack } from "@chakra-ui/react";

import Nft from "@/lib/shared/components/nft/nft";
import CurrentTransaction from "@/lib/shared/components/transactions/current-transaction";
import TransactionsList from "@/lib/shared/components/transactions/transactions-list";

function Title({ children }: { children: string }) {
  return (
    <Text fontWeight="semibold" fontSize="xl">
      {children}
    </Text>
  );
}
export default function Home() {
  return (
    <VStack spacing={10} align="flex-start">
      <VStack align="flex-start">
        <Title>Transaction part</Title>
        <CurrentTransaction />
        <TransactionsList />
      </VStack>
      <VStack align="flex-start">
        <Title>ERC-721 part</Title>
        <Nft />
      </VStack>
    </VStack>
  );
}
