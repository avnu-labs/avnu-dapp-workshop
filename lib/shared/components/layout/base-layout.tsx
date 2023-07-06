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
      <Box position="absolute" top={50} left={50} zIndex={-1}>
        <Box
          top={0}
          left={20}
          position="absolute"
          h="200px"
          w="200px"
          borderRadius="full"
          background="linear-gradient(to bottom right, rgba(255, 0, 92, 0.20) 0%, rgba(217, 217, 217, 0.00) 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, rgba(255, 0, 92, 0.20) 0%, rgba(217, 217, 217, 0.00) 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, rgba(255, 0, 92, 0.20) 0%, rgba(217, 217, 217, 0.00) 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, rgba(255, 0, 92, 0.20) 0%, rgba(217, 217, 217, 0.00) 50%) top right / 50% 50% no-repeat"
        />
        <Box
          top={0}
          left={0}
          position="absolute"
          h="400px"
          w="400px"
          borderRadius="full"
          bg="linear-gradient(to bottom right, rgba(255, 199, 0, 0.18) 0%, rgba(217, 217, 217, 0.00) 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, rgba(255, 199, 0, 0.18) 0%, rgba(217, 217, 217, 0.00) 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, rgba(255, 199, 0, 0.18) 0%, rgba(217, 217, 217, 0.00) 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, rgba(255, 199, 0, 0.18) 0%, rgba(217, 217, 217, 0.00) 50%) top right / 50% 50% no-repeat"
        />
        <Box
          top={10}
          left={10}
          position="absolute"
          h="400px"
          w="400px"
          borderRadius="full"
          background="linear-gradient(to bottom right, rgba(0, 148, 255, 0.18) 0%, rgba(217, 217, 217, 0.00) 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, rgba(0, 148, 255, 0.18) 0%, rgba(217, 217, 217, 0.00) 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, rgba(0, 148, 255, 0.18) 0%, rgba(217, 217, 217, 0.00) 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, rgba(0, 148, 255, 0.18) 0%, rgba(217, 217, 217, 0.00) 50%) top right / 50% 50% no-repeat"
        />
      </Box>
    </Container>
  );
};

export default BaseLayout;
