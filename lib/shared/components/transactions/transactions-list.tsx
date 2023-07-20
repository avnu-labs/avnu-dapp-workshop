import { Flex, Text } from "@chakra-ui/react";
import type { ManagedTransaction } from "@starknet-react/core/src/providers";

function Transaction({ tx }: { tx: ManagedTransaction<object> }) {
  return <div>{tx.hash}</div>;
}
export default function TransactionsList() {
  // TODO use useTransactionManager hook to get all transactions registered
  // const { transactions } = ...
  // Display all transactions hashes
  return (
    <Flex direction="column">
      <Text>All transactions</Text>
      {transactions.map((transaction) => {
        return <Transaction tx={transaction} key={transaction.hash} />;
      })}
    </Flex>
  );
}
