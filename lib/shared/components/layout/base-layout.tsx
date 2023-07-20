"use client";

import { Container, Grid, GridItem } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

import Footer from "@/lib/shared/components/layout/footer";
import Header from "@/lib/shared/components/layout/header";

interface Props {
  children: ReactNode;
}
const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <main>
      <Container maxW="8xl" h="full">
        <Grid
          h="full"
          templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
          gridTemplateRows="100px 1fr 56px"
          gap="1"
        >
          <GridItem area="header">
            <Header />
          </GridItem>
          <GridItem area="main">{children}</GridItem>
          <GridItem area="footer">
            <Footer />
          </GridItem>
        </Grid>
      </Container>
    </main>
  );
};

export default BaseLayout;
