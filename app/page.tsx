"use client";

import { Text, VStack } from "@chakra-ui/react";

import MintButton from "@/lib/shared/button/mint-button";
import Title from "@/lib/shared/text/title";

export default function Home() {
  return (
    <main>
      <VStack align="flex-start">
        <Title />
        <Text mt={8} fontWeight="bold" fontSize="4xl" color="grey.700">
          Don’t witness history, become a part of it!
        </Text>
        <MintButton />
      </VStack>
    </main>
  );
}
