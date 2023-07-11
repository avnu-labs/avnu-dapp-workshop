"use client";

import { Text } from "@chakra-ui/react";
import { useAccount } from "@starknet-react/core";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { StarknetIdNavigator } from "starknetid.js";

import { cropAddress } from "../../shared/services/address.service";

interface Props {
  address: string;
}
const StarkName: FC<Props> = ({ address }) => {
  const { account } = useAccount();
  const [name, setName] = useState<string>(cropAddress(address));
  useEffect(() => {
    if (account) {
      console.log(account);
      const starknetIdNavigator = new StarknetIdNavigator(account);
      starknetIdNavigator
        .getStarkName(address)
        .then(setName)
        .catch(() => {
          console.log(`Get your Starkname at https://starknet.id`);
        });
    }
    // eslint-disable-next-line
  }, [address, account]);

  return <Text>{name}</Text>;
};

export default StarkName;
