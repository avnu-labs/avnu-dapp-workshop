import { Flex, Text } from "@chakra-ui/react";
import {
  useTransactionManager,
  useWaitForTransaction,
} from "@starknet-react/core";
import { useMemo } from "react";

export default function CurrentTransaction() {
  const { hashes } = useTransactionManager();
  const lastHash = useMemo(() => {
    return hashes[hashes.length - 1];
  }, [hashes]);
  const { data, isLoading } = useWaitForTransaction({
    hash: lastHash,
    watch: true,
  });
  return (
    <Flex direction="column">
      <Text>Last transaction</Text>
      {isLoading && !data && <Text>Loading</Text>}
      {!isLoading && data && (hashes.length === 0 ? "Never" : data?.status)}
    </Flex>
  );
}
