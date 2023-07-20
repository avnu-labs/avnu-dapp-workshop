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

// Compiled ABI for AVNUNft contract
const compiledAvnuNft: Abi = json.parse(JSON.stringify(avnuNft)) as Abi;

// Fetching balance of an account
const Balance = ({
  account,
  mintHash,
}: {
  account: AccountInterface;
  mintHash: string | undefined;
}) => {
  // Internal state representing the current balance of the account
  const [balance, setBalance] = useState<bigint>(BigInt(0));
  // TODO use useWaitForTransaction hook to wait for the mint transaction to be accepted on L2 -> Use to refresh the balance after mint
  // const { data } = ...

  // TODO use useContractRead hook to fetch the balance of the account
  // const { data: tokenBalanceData, refetch } = ...

  // Set the internal state balance when the tokenBalanceData is fetched
  useEffect(() => {
    if (tokenBalanceData) {
      // eslint-disable-next-line
      // @ts-ignore
      setBalance(tokenBalanceData.balance.low);
    }
  }, [tokenBalanceData]);

  // Refresh the balance when the mint transaction is accepted on L2
  useEffect(() => {
    if (data && data.status === "ACCEPTED_ON_L2") refetch();
  }, [refetch, data]);

  return <Text>{balance.toString()}</Text>;
};

export default function MintButton({ ...props }: ButtonProps) {
  const { account } = useAccount();
  const { addTransaction } = useTransactionManager();

  // TODO use useContractWrite hook to call the mint function of the AVNUNft contract
  // const { data: txDataMint, write: writeMint } = ...

  // TODO use useContractWrite hook to call the mint function of the AVNUNft contract && transfer some eth to the contract (multicall)
  // const { data: txDataMintAndTransfer, write: writeMintAndTransfer } = ...

  // Add transaction to the manager once transaction is submitted
  useEffect(() => {
    if (txDataMint) addTransaction({ hash: txDataMint.transaction_hash });
  }, [txDataMint, addTransaction]);

  // Add transaction to the manager once transaction is submitted
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
