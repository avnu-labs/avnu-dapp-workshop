"use client";

import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  VStack,
} from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

import Footer from "@/lib/shared/components/layout/footer";
import Nft from "@/lib/shared/components/nft/nft";
import Title from "@/lib/shared/text/title";
import MintButton from "@/lib/wallet/components/mint-button";

interface Props {
  children: ReactNode;
}
const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <Container flexGrow={1} maxW="8xl" pt={20}>
      <Grid
        h="full"
        templateAreas={`"header nft"
                  "main nft"
                  "footer nft"`}
        gridTemplateRows="200px 1fr 120px"
        gridTemplateColumns="1fr 500px"
        gap="1"
      >
        <GridItem area="header">
          <Title />
        </GridItem>
        <GridItem area="main">
          <Flex align="flex-start">{children}</Flex>
        </GridItem>
        <GridItem area="nft">
          <Nft />
        </GridItem>
        <GridItem area="footer">
          <Footer />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default BaseLayout;
