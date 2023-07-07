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

  const { data: txData, write: mint } = useContractWrite({
    calls: [
      {
        contractAddress: ethAddress,
        entrypoint: "transfer",
        calldata: [address || "0x0", 1, 0],
      },
    ],
  });

  useEffect(() => {
    if (txData) setHash(txData.transaction_hash);
  }, [txData]);
  return (
    <main>
      <HStack justify="space-between" align="flex-start">
        <VStack align="flex-start">
          <Title />
          <Text mt={8} fontWeight="bold" fontSize="2xl" color="greyDark.100">
            One small step for Starknet, one giant leap for the Ethereum
            community.
          </Text>
          <VStack
            spacing={4}
            maxW="lg"
            mt={8}
            fontWeight="bold"
            fontSize="lg"
            color="greyDark.700"
          >
            <Text as="p">
              Welcome to Starknet v0.12, a new chapter in our story. With
              'Starknet Ascending', our unique NFT, we celebrate a big moment:
              reaching 100 transactions per second, a record for Ethereum for
              any L2.
            </Text>
            <Text as="p">
              Minting 'Starknet Ascending' isn't just about owning a piece of
              digital art. It's about being part of this moment, joining a
              community that's pushing boundaries and making history.
            </Text>
            <Text as="p">
              In the words of Neil Armstrong, it's 'one small step for Starknet,
              one giant leap for Ethereum'.  Come, be part of our journey, and
              let's write the next chapter of this story together.
            </Text>
          </VStack>
          <MintButton onMintClick={mint} />
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
