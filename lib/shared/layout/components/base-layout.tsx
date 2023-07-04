"use client";

import { Container } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const BaseLayout: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default BaseLayout;
