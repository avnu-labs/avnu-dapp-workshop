import type { ButtonProps } from "@chakra-ui/react";
import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useTransactionManager,
  useWaitForTransaction,
} from "@starknet-react/core";
import { useEffect, useState } from "react";
import type { Abi, AccountInterface } from "starknet";
import { json } from "starknet";

import avnuNft from "@/assets/abis/AVNUNft.json";
import environment from "@/environment";

const compiledAvnuNft: Abi = json.parse(JSON.stringify(avnuNft)) as Abi;
const Balance = ({
  account,
  mintHash,
}: {
  account: AccountInterface;
  mintHash: string | undefined;
}) => {
  const [balance, setBalance] = useState<bigint>(BigInt(0));
  const { data } = useWaitForTransaction({ hash: mintHash, watch: true });

  const { data: tokenBalanceData, refetch } = useContractRead({
    abi: compiledAvnuNft,
    address: environment.nftAddress,
    functionName: "balanceOf",
    args: [account.address],
  });

  useEffect(() => {
    if (tokenBalanceData) {
      // eslint-disable-next-line
      // @ts-ignore
      setBalance(tokenBalanceData.balance.low);
    }
  }, [tokenBalanceData]);

  useEffect(() => {
    if (data && data.status === "ACCEPTED_ON_L2") refetch();
  }, [refetch, data]);

  return <Text>{balance.toString()}</Text>;
};

export default function MintButton({ ...props }: ButtonProps) {
  const { account } = useAccount();
  const { addTransaction } = useTransactionManager();
  const { data: txDataMint, write: writeMint } = useContractWrite({
    calls: [
      {
        contractAddress: environment.nftAddress,
        entrypoint: "mintPublic",
        calldata: [account?.address || "0x0"],
      },
    ],
  });

  const { data: txDataMintAndTransfer, write: writeMintAndTransfer } =
    useContractWrite({
      calls: [
        {
          contractAddress: environment.nftAddress,
          entrypoint: "mintPublic",
          calldata: [account?.address || "0x0"],
        },
        {
          contractAddress: environment.ethAddress,
          entrypoint: "transfer",
          calldata: [
            "0x0312479874C73a1801164B7aA59a3f4af96478dF170BE27F25E683EDF39E91Cb",
            1,
            0,
          ],
        },
      ],
    });

  useEffect(() => {
    if (txDataMint) addTransaction({ hash: txDataMint.transaction_hash });
  }, [txDataMint, addTransaction]);

  useEffect(() => {
    if (txDataMintAndTransfer)
      addTransaction({ hash: txDataMintAndTransfer.transaction_hash });
  }, [txDataMintAndTransfer, addTransaction]);

  return (
    <VStack w="full">
      <Button
        isDisabled={!account}
        colorScheme="blue"
        onClick={() => writeMint()}
        {...props}
      >
        Mint NFT
      </Button>
      <Button
        isDisabled={!account}
        colorScheme="blue"
        onClick={() => writeMintAndTransfer()}
        {...props}
      >
        Mint and Donate :)
      </Button>
      <HStack>
        <Text>Balance:</Text>
        {account ? (
          <Balance
            mintHash={
              txDataMint?.transaction_hash ||
              txDataMintAndTransfer?.transaction_hash
            }
            account={account}
          />
        ) : (
          "0"
        )}
      </HStack>
    </VStack>
  );
}
