"use client";

import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import {
  useAccount,
  useContractWrite,
  useWaitForTransaction,
} from "@starknet-react/core";
import { useEffect, useMemo, useState } from "react";

import Main from "@/lib/shared/components/layout/main";
import Title from "@/lib/shared/text/title";
import MintButton from "@/lib/wallet/components/mint-button";

const getHomeData = () => {
  return {
    title: "tata",
    data: <Text>Home</Text>,
  };
};

const getAboutData = () => {
  return {
    title: "",
    data: (
      <>
        <Text as="p">
          Welcome to Starknet v0.12, a new chapter in our story. With
          &apos;Starknet Ascending&apos;, our unique NFT, we celebrate a big
          moment: reaching 100 transactions per second, a record for Ethereum
          for any L2.
        </Text>
        <Text as="p">
          Minting &apos;Starknet Ascending&apos; isn&apos;t just about owning a
          piece of digital art. It&apos;s about being part of this moment,
          joining a community that&apos;s pushing boundaries and making history.
        </Text>
        <Text as="p">
          In the words of Neil Armstrong, it&apos;s &apos;one small step for
          Starknet, one giant leap for Ethereum&apos;. Come, be part of our
          journey, and let&apos;s write the next chapter of this story together.
        </Text>
      </>
    ),
  };
};

const getPartnersData = () => {
  return {
    title: "coucou",
    data: <Text>Partners</Text>,
  };
};

enum PageData {
  HOME,
  ABOUT,
  PARTNERS,
}

export default function Home() {
  const ethAddress =
    "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
  const [hash, setHash] = useState<string | undefined>(undefined);
  const [page, setPage] = useState<PageData>(PageData.HOME);
  const pageData = useMemo(() => {
    switch (page) {
      case PageData.HOME:
        return getHomeData();
      case PageData.ABOUT:
        return getAboutData();
      case PageData.PARTNERS:
        return getPartnersData();
      default:
        return getHomeData();
    }
  }, [page]);
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
          <Main title={pageData.title}>{pageData.data}</Main>
        </VStack>
        <VStack>
          <Box
            overflow="hidden"
            borderRadius="xl"
            border="10px solid white"
            boxShadow="xl"
          >
            <Image h="400px" w="auto" src="/nft.jpeg" alt="Astro" />
          </Box>
          <MintButton onMintClick={mint} />
          <div>Hash: {hash}</div>
          {isLoading && <div>Loading...</div>}
          {error && <div>Error: {JSON.stringify(error)}</div>}
          {data && <div>Status: {data.status}</div>}
        </VStack>
      </HStack>
    </main>
  );
}
