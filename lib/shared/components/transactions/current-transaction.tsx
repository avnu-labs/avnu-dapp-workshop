import { Flex, Text } from "@chakra-ui/react";

export default function CurrentTransaction() {
  // TODO get the last transaction hash using useTransactionManager hook
  // const { hashes } = ...
  // TODO use useWaitForTransaction hook to get the last transaction hash status
  // const { data, isLoading } = ...
  return (
    <Flex direction="column">
      <Text>Last transaction status</Text>
      {!isLoading && data && (hashes.length === 0 ? "-" : data?.status)}
    </Flex>
  );
}
