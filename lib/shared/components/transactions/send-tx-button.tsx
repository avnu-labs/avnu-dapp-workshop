import { Button } from "@chakra-ui/react";
import {
  useAccount,
  useContractWrite,
  useTransactionManager,
} from "@starknet-react/core";
import { useEffect } from "react";

export default function SendTxButton() {
  const { address } = useAccount();
  const { addTransaction } = useTransactionManager();
  const ethAddress =
    "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
  const { data: txData, write } = useContractWrite({
    calls: [
      {
        contractAddress: ethAddress,
        entrypoint: "transfer",
        calldata: [address || "0x0", 1, 0],
      },
    ],
  });

  useEffect(() => {
    console.log(txData);
    if (txData) addTransaction({ hash: txData.transaction_hash });
  }, [txData, addTransaction]);
  return <Button onClick={() => write()}>Send transaction</Button>;
}
