"use client";

import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

import Footer from "@/lib/shared/components/layout/footer";

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
        <GridItem area="main">{children}</GridItem>
        <GridItem area="footer">
          <Footer />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default BaseLayout;
