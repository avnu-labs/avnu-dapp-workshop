import type { ButtonProps } from "@chakra-ui/react";
import { Button, Text, Tooltip } from "@chakra-ui/react";
import { useAccount, useConnectors } from "@starknet-react/core";
import type { FC } from "react";
import { useState } from "react";

import { cropAddress } from "@/lib/shared/services/address.service";

import ConnectWalletModal from "./connect-wallet-modal";

interface Props extends ButtonProps {
  onMintClick: () => void;
  size?: "sm" | "lg";
}
const MintButton: FC<Props> = ({
  onMintClick,
  size = "lg",
  children,
  ...props
}) => {
  const { status, address } = useAccount();
  const { disconnect } = useConnectors();
  const [isConnectModalOpen, setConnectModalOpen] = useState<boolean>(false);
  const pending = false;
  const handleClickConnect = () => {
    setConnectModalOpen(true);
  };

  return (
    <>
      {status !== "connected" || !address ? (
        <Button
          py={size === "lg" ? 5 : 1}
          fontWeight={size === "lg" ? "semibold" : "medium"}
          fontSize="sm"
          variant="brand"
          onClick={handleClickConnect}
          {...props}
        >
          {children || "Connect"}
        </Button>
      ) : (
        <Tooltip
          variant="brand"
          label="pending"
          placement="bottom"
          isDisabled={!pending}
        >
          <Button
            py={size === "lg" ? 5 : 1}
            fontWeight={size === "lg" ? "semibold" : "medium"}
            fontSize="sm"
            variant="brand"
            onClick={onMintClick}
            {...props}
          >
            Mint
          </Button>
        </Tooltip>
      )}
      <ConnectWalletModal
        isOpen={isConnectModalOpen}
        onClose={() => setConnectModalOpen(false)}
      />
      <Text color="grey.700" fontWeight="semibold">
        173&apos;844 minted
      </Text>
      {address && (
        <Text onClick={disconnect} color="grey.700" fontWeight="semibold">
          connected with {cropAddress(address)}
        </Text>
      )}
    </>
  );
};

export default MintButton;
