"use client";

import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import {
  useAccount,
  useContractWrite,
  useWaitForTransaction,
} from "@starknet-react/core";
import { useEffect, useState } from "react";

import Title from "@/lib/shared/text/title";
import MintButton from "@/lib/wallet/components/mint-button";

export default function Home() {
  const ethAddress =
    "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
  const [hash, setHash] = useState<string | undefined>(undefined);
  const { address } = useAccount();

  const { data, isLoading, error } = useWaitForTransaction({
    hash,
    watch: true,
  });

  const { data: txData, write } = useContractWrite({
    calls: [
      {
        contractAddress: ethAddress,
        entrypoint: "transfer",
        calldata: [address || "0x0", 1, 0],
      },
    ],
  });

  useEffect(() => {
    console.log(txData);
    if (txData) setHash(txData.transaction_hash);
  }, [txData]);
  const handleMint = () => {
    // For the time call a transfer token
    // write().then((tx) => setHash(tx.transaction_hash));
    write();
  };
  return (
    <main>
      <HStack justify="space-between">
        <VStack align="flex-start">
          <Title />
          <Text mt={8} fontWeight="bold" fontSize="4xl" color="grey.700">
            Don’t witness history, become a part of it!
          </Text>
          <MintButton onMintClick={handleMint} />
          <div>Hash: {hash}</div>
          {isLoading && <div>Loading...</div>}
          {error && <div>Error: {JSON.stringify(error)}</div>}
          {data && <div>Status: {data.status}</div>}
        </VStack>
        <Box
          overflow="hidden"
          borderRadius="xl"
          border="10px solid white"
          boxShadow="xl"
        >
          <Image h="400px" w="auto" src="/nft.jpeg" alt="Astro" />
        </Box>
      </HStack>
    </main>
  );
}
