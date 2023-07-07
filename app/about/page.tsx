"use client";

import { Text } from "@chakra-ui/react";

import Main from "@/lib/shared/components/layout/main";

export default function About() {
  return (
    <main>
      <Main title="About">
        <Text as="p">
          Welcome to Starknet v0.12, a new chapter in our story. With
          &apos;Starknet Ascending&apos;, our unique NFT, we celebrate a big
          moment: reaching 100 transactions per second, a record for Ethereum
          for any L2.
        </Text>
        <Text as="p">
          Minting &apos;Starknet Ascending&apos; isn&apos;t just about owning a
          piece of digital art. It&apos;s about being part of this moment,
          joining a community that&apos;s pushing boundaries and making history.
        </Text>
        <Text as="p">
          In the words of Neil Armstrong, it&apos;s &apos;one small step for
          Starknet, one giant leap for Ethereum&apos;. Come, be part of our
          journey, and let&apos;s write the next chapter of this story together.
        </Text>
      </Main>
    </main>
  );
}
