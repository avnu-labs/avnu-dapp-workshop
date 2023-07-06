"use client";

import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

import MintButton from "@/lib/shared/button/mint-button";
import Title from "@/lib/shared/text/title";

export default function Home() {
  return (
    <main>
      <HStack justify="space-between">
        <VStack align="flex-start">
          <Title />
          <Text mt={8} fontWeight="bold" fontSize="4xl" color="grey.700">
            Don’t witness history, become a part of it!
          </Text>
          <MintButton />
        </VStack>
        <Box
          overflow="hidden"
          borderRadius="xl"
          border="10px solid white"
          boxShadow="xl"
        >
          <Image h="400px" w="auto" src="/nft.jpeg" alt="Astro" />
        </Box>
      </HStack>
    </main>
  );
}
