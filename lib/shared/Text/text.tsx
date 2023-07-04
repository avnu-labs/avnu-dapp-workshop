'use client';
import {TextProps} from "@chakra-ui/react";
import {Text as ChakraText} from "@chakra-ui/react";

export default function Text({children, ...props}: TextProps) {
    return <ChakraText {...props}>{children}</ChakraText>
}