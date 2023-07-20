import type { BoxProps } from "@chakra-ui/react";
import { Box, HStack, Skeleton, Text, VStack } from "@chakra-ui/react";
import { useContractRead } from "@starknet-react/core";
import type { FC } from "react";
import { useEffect, useState } from "react";
import type { Abi } from "starknet";
import { json, shortString } from "starknet";

import avnuNft from "../../../../assets/abis/AVNUNft.json";
import environment from "../../../../environment";
import MintButton from "@/lib/shared/components/nft/mint-button";
import type { NftMetadata } from "@/lib/shared/models/nft-metadata";

const compiledAvnuNft: Abi = json.parse(JSON.stringify(avnuNft)) as Abi;

function Info({
  label,
  value,
}: {
  label: string;
  value: JSX.Element | string | undefined;
}) {
  return (
    <HStack align="flex-start">
      <Text minW="100px" fontWeight="semibold">
        {label}
      </Text>
      <Text>{value}</Text>
    </HStack>
  );
}

const Nft: FC<BoxProps> = ({ ...props }) => {
  const { data: tokenUriData } = useContractRead({
    abi: compiledAvnuNft,
    address: environment.nftAddress,
    functionName: "tokenURI",
    args: [{ low: 1, high: 0 }],
  });

  const [metadata, setMetadata] = useState<NftMetadata | undefined>(undefined);
  useEffect(() => {
    if (tokenUriData) {
      fetch(
        // eslint-disable-next-line
        // @ts-ignore
        tokenUriData.uri.reduce(
          (acc: string, cur: string) =>
            acc + shortString.decodeShortString(cur),
          ""
        )
      )
        .then((response: Response) => response.json())
        .then((response: NftMetadata) => {
          setMetadata(response);
        });
    }
    return undefined;
  }, [tokenUriData]);

  return (
    <HStack align="flex-start">
      <VStack maxW="300px">
        <Skeleton h="300px" w="300px" borderRadius="lg" isLoaded={!!metadata}>
          <Box h="full" w="full" {...props}>
            <video src={metadata?.external_url} width="400" autoPlay muted loop>
              Your browser does not support the video tag.
            </video>
          </Box>
        </Skeleton>
        <MintButton w="full" mt={2} />
      </VStack>
      <VStack align="flex-start" maxW="500px">
        <Info label="Name" value={metadata?.name} />
        <Info label="Description" value={metadata?.description} />
      </VStack>
    </HStack>
  );
};

export default Nft;
