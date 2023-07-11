"use client";

import { Flex } from "@chakra-ui/react";

import Nft from "@/lib/shared/components/nft/nft";
import CurrentTransaction from "@/lib/shared/components/transactions/current-transaction";
import SendTxButton from "@/lib/shared/components/transactions/send-tx-button";
import TransactionsList from "@/lib/shared/components/transactions/transactions-list";

export default function Home() {
  return (
    <Flex direction="column">
      <CurrentTransaction />
      <TransactionsList />
      <SendTxButton />
      <Nft />
    </Flex>
  );
}
