// app/providers.tsx

"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { InjectedConnector, StarknetConfig } from "@starknet-react/core";
import type { ReactNode } from "react";

import theme from "../../../../styles/theme";

export function Providers({ children }: { children: ReactNode }) {
  const connectors = [
    new InjectedConnector({ options: { id: "braavos" } }),
    new InjectedConnector({ options: { id: "argentX" } }),
  ];
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <StarknetConfig autoConnect connectors={connectors}>
          {children}
        </StarknetConfig>
      </ChakraProvider>
    </CacheProvider>
  );
}
