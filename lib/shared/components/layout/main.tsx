import type { StackProps } from "@chakra-ui/react";
import { Text, VStack } from "@chakra-ui/react";

interface Props extends StackProps {
  title: string;
}
export default function Main({ children, title, ...props }: Props) {
  return (
    <VStack
      align="flex-start"
      spacing={4}
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
