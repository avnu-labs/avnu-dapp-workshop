import { validateAndParseAddress } from "starknet";

export const cropAddress = (value: string): string =>
  `${value.substring(0, 6)}...${value.substring(
    value.length - 4,
    value.length
  )}`;

export const isAddressValid = (address: string) => {
  try {
    validateAndParseAddress(address);
    return true;
  } catch (_) {
    return false;
  }
};
