import * as process from "process";

interface Environment {
  nftAddress: string;
  ethAddress: string;
  dev: boolean;
}

const global = {
  nftAddress:
    "0x039eb1299cbb259edabb45376ec742497c67150b9adc2d9c3c026a8cc58c634a",
  ethAddress:
    "0x049D36570D4e46f48e99674bd3fcc84644DdD6b96F7C741B1562B82f9e004dC7",
  dev: false,
};

const dev: Environment = {
  ...global,
  dev: true,
};

const prod: Environment = {
  ...global,
};

const environment: Environment =
  process.env.NODE_ENV === "development" ? dev : prod;
export default environment;
