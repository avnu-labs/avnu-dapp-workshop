"use client";

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

import Main from "@/lib/shared/components/layout/main";

interface Partner {
  src: string;
  href: string;
  alt: string;
  maxH?: string;
}
function PartnerItem({ src, alt, href, maxH = "40px" }: Partner) {
  return (
    <Flex align="center" justify="center" height="80px">
      <Link as={NextLink} isExternal href={href}>
        <Image w="full" maxH={maxH} src={src} alt={alt} />
      </Link>
    </Flex>
  );
}

const partners = [
  {
    src: "/partners/avnu.svg",
    alt: "AVNU",
    href: "https://avnu.fi/",
    maxH: "30px",
  },
  {
    src: "/partners/argent.webp",
    alt: "Argent",
    href: "https://www.argent.xyz/",
  },
  {
    src: "/partners/starknetid.webp",
    alt: "Starknet ID",
    href: "https://starknet.id/",
    maxH: "80px",
  },
  {
    src: "/partners/starkware.webp",
    alt: "Starkware",
    href: "https://starkware.co/",
  },
  {
    src: "/partners/starknet.webp",
    alt: "Starknet",
    href: "https://starknet.io/",
  },
  {
    src: "/partners/braavos.webp",
    alt: "Braavos",
    href: "https://braavos.app/",
    maxH: "80px",
  },
];

export default function Partners() {
  return (
    <main>
      <Main maxW="2xl" title="Partners">
        <Grid w="full" templateColumns="repeat(3, 1fr)" gap={12}>
          {partners.map((partner) => (
            <GridItem w="100%">
              <PartnerItem key={partner.alt} {...partner} />
            </GridItem>
          ))}
        </Grid>
      </Main>
    </main>
  );
}
