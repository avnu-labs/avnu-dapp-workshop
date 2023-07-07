import type { BoxProps } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function GlitchText({ children }: BoxProps) {
  const [isHover, setHover] = useState(false);
  return isHover ? (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box className="glitch-text-line">
        <Text as="span" className="line">
          {children}
        </Text>
        <Text as="span" className="line">
          {children}
        </Text>
        <Text as="span" className="line">
          {children}
        </Text>
        <Text as="span" className="line">
          {children}
        </Text>
        <Text as="span" className="line">
          {children}
        </Text>
        <Text as="span" className="line">
          {children}
        </Text>
        <Text as="span" className="line">
          {children}
        </Text>
        <Text as="span" className="line">
          {children}
        </Text>
        <Text as="span" className="line">
          {children}
        </Text>
      </Box>
    </Box>
  ) : (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </Box>
  );
}
