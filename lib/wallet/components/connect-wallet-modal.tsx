import { Link, Text, VStack } from "@chakra-ui/react";
import type { Connector } from "@starknet-react/core";
import { useConnectors } from "@starknet-react/core";
import type { FC } from "react";
import { useEffect } from "react";

import BoxItem from "../../shared/components/modal/box-item";
import Modal from "../../shared/components/modal/modal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectWalletModal: FC<Props> = ({ isOpen, onClose }) => {
  const { available, connect, refresh } = useConnectors();
  useEffect(() => {
    if (available.length === 0) {
      const interval = setInterval(refresh, 0);
      return () => clearInterval(interval);
    }
  }, [available, refresh]);
  const handleClickConnect = (connector: Connector) => () => {
    connect(connector);
    onClose();
  };

  return (
    <Modal title="Connect wallet" isOpen={isOpen} onClose={onClose}>
      {available.length > 0 ? (
        <VStack>
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
          <BoxItem disabled>
            <Text fontSize="xs">You agree with terms & conditions</Text>
          </BoxItem>
        </VStack>
      ) : (
        <Link
          href="https://www.starknet-ecosystem.com/en/academy"
          isExternal
          fontSize="sm"
        >
          <BoxItem>No wallet detected, you can download one here</BoxItem>
        </Link>
      )}
    </Modal>
  );
};

export default ConnectWalletModal;
