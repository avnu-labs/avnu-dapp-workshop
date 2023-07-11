import type { BoxProps } from "@chakra-ui/react";
import { Box, Skeleton } from "@chakra-ui/react";
import { useContractRead } from "@starknet-react/core";
import type { FC } from "react";
import { useEffect, useState } from "react";
import type { Abi } from "starknet";
import { json, shortString } from "starknet";

import avnuNft from "../../../../assets/abis/AVNUNft.json";
import environment from "../../../../environment";
import type { NftMetadata } from "@/lib/shared/models/nft-metadata";

const compiledAvnuNft: Abi = json.parse(JSON.stringify(avnuNft)) as Abi;

const Nft: FC<BoxProps> = ({ ...props }) => {
  const { data } = useContractRead({
    abi: compiledAvnuNft,
    address: environment.nftAddress,
    functionName: "tokenURI",
    args: [{ low: 1, high: 0 }],
  });
  const [uri, setUri] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (data) {
      fetch(
        // eslint-disable-next-line
          // @ts-ignore
        data.uri.reduce(
          (acc: string, cur: string) =>
            acc + shortString.decodeShortString(cur),
          ""
        )
      )
        .then((response: Response) => response.json())
        .then((response: NftMetadata) => {
          setUri(response.external_url);
        });
    }
    return undefined;
  }, [data]);
  return (
    <Skeleton h="300px" w="300px" borderRadius="lg" isLoaded={!!uri}>
      <Box h="full" w="full" {...props}>
        <video src={uri} width="400" autoPlay muted loop>
          Your browser does not support the video tag.
        </video>
      </Box>
    </Skeleton>
  );
};

export default Nft;
