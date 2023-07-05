"use client";

import { Container, Grid, GridItem, Image } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

import Footer from "@/lib/shared/layout/footer";

interface Props {
  children: ReactNode;
}
const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <Container h="full" maxW="8xl" pt={20}>
      <Grid
        h="full"
        templateAreas={`"main main"
                  "footer footer"`}
        gridTemplateRows="1fr 120px"
      >
        <GridItem area="main" overflowX="hidden">
          {children}
        </GridItem>
        <GridItem area="footer">
          <Footer />
        </GridItem>
      </Grid>
      <Image
        src="/astro.svg"
        alt="Astro"
        position="absolute"
        bottom={0}
        right={0}
        zIndex={-1}
      />
    </Container>
  );
};

export default BaseLayout;
