// app/providers.tsx

"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { StarknetConfig } from "@starknet-react/core";
import type { ReactNode } from "react";
import { constants, Provider } from "starknet";

import theme from "../../../../styles/theme";

export function Providers({ children }: { children: ReactNode }) {
  const connectors = [
    // TODO: Add your connectors here
  ];
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <StarknetConfig
          defaultProvider={
            new Provider({
              sequencer: { network: constants.NetworkName.SN_GOERLI },
            })
          }
          autoConnect
          connectors={connectors}
        >
          {children}
        </StarknetConfig>
      </ChakraProvider>
    </CacheProvider>
  );
}
