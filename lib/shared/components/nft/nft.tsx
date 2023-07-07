import { Box, Image, VStack } from "@chakra-ui/react";
import {
  useAccount,
  useContractWrite,
  useWaitForTransaction,
} from "@starknet-react/core";
import { useEffect, useState } from "react";

import MintButton from "@/lib/wallet/components/mint-button";

export default function Nft() {
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
  );
}
