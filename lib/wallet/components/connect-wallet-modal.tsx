import { Link, VStack } from "@chakra-ui/react";
import type { Connector } from "@starknet-react/core";
import type { FC } from "react";

import BoxItem from "../../shared/components/modal/box-item";
import Modal from "../../shared/components/modal/modal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectWalletModal: FC<Props> = ({ isOpen, onClose }) => {
  // TODO use starknet-react to get available connectors
  const handleClickConnect = (connector: Connector) => () => {
    // connect(connector);
    onClose();
  };

  return (
    <Modal title="Connect wallet" isOpen={isOpen} onClose={onClose}>
      {/* TODO uncomment this part when you have import the available connectors */}
      {/* {available.length > 0 ? (
        <VStack w="full">
          {available.map((connector) => (
            <BoxItem
              key={`connector-${connector.id}`}
              onClick={handleClickConnect(connector)}
            >
              {connector.name}
            </BoxItem>
          ))}
        </VStack>
      ) : (
        <Link
          href="https://www.starknet-ecosystem.com/en/academy"
          isExternal
          fontSize="sm"
        >
          <BoxItem>No wallet detected, you can download one here</BoxItem>
        </Link>
      )} */}
    </Modal>
  );
};

export default ConnectWalletModal;
