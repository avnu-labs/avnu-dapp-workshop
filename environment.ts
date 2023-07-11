import * as process from "process";

interface Environment {
  nftAddress: string;
  dev: boolean;
}

const global = {
  nftAddress:
    "0x03906107c71e94075ac691b232faecd9a724a46a5129928f44c79026b7bc9ec9",
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
