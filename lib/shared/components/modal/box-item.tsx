import type { FlexProps } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import type { FC } from "react";

interface Props extends FlexProps {
  disabled?: boolean;
  showBorder?: boolean;
}

const BoxItem: FC<Props> = ({
  children,
  disabled = false,
  showBorder = false,
  onClick,
  ...props
}: Props) => (
  <Flex
    cursor={disabled ? "inherit" : "pointer"}
    _hover={{ background: disabled ? "transparent" : "grey.300" }}
    transition="all .2s ease-in"
    w="full"
    justify="center"
    py={4}
    px={4}
    onClick={onClick}
    borderRadius="xl"
    bg={disabled ? "transparent" : "grey.200"}
    border={disabled && showBorder ? "1px solid" : "none"}
    borderColor="grey.200"
    {...props}
  >
    {children}
  </Flex>
);

export default BoxItem;
