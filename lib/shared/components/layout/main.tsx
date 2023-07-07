import type { FlexProps } from "@chakra-ui/react";
import { Text, VStack } from "@chakra-ui/react";

interface Props extends FlexProps {
  title: string;
}
export default function Main({ children, title, ...props }: Props) {
  return (
    <VStack
      align="flex-start"
      spacing={4}
      maxW="lg"
      fontWeight="medium"
      fontSize="lg"
      color="greyDark.700"
      {...props}
    >
      <Text mt={8} fontWeight="bold" fontSize="2xl" color="greyDark.100">
        {title}
      </Text>

      {children}
    </VStack>
  );
}
