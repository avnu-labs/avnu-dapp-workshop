# NextJS - Starknet-react - Cairo • Workshop

**StarknetCC** - Full dApp workshop by AVNU team

You'll find the PDF presentation [here](./files/presentation.pdf)

## Introduction

This workshop will show you how to dev a full Starknet dApp with NextJS & [Starknet-react](https://github.com/apibara/starknet-react), including multi-wallets support([Argent web wallet](https://github.com/argentlabs/argent-x) | [Argent-x](https://github.com/argentlabs/argent-x) | [Braavos](https://braavos.app/)) and multi-call transactions.

You'll also use an ERC-721 contract, with a 'mint' function (see [ABI](src/contracts/abis/AVNUNft.json)).

This workshop currently run on the **Starknet Goerli Testnet** 

## Use case

Explore the contract interactions in NextJS by using an existing ERC-721 contract & ERC-20 contracts deployed on Starknet.

- Contract interactions
    - Start with existing contracts
    - Deploy & connect your own
- Display current information
  - Last block
  - Transactions
- ERC-721 
    - mint
    - balanceOf
- Minting & send (multicalls)


## The Goal

![TODO](./files/todo.png "Title")

## Prerequisite

To follow this workshop you should at least:
- Have a Starknet compatible wallet installed (with some Starknet Goerli ETH in wallet to do TX's)
- Have basic knowledge in ReactJS / NextJS framework
- Have basic knowledge in Cairo smart contracts development
- Have basic knowledge on how Starknet works(BC in general, Account abstraction, ...)

About the tooling:
- IDE
- Yarn or NPM

Clone the repository

```bash
git clone git@github.com:avnu-labs/avnu-dapp-workshop.git
cd avnu-dapp-workshop
```

Install Dependencies

```bash
yarn | npm install 
```

Run in dev

```bash
yarn dev | npm run dev
```

## File tree

Here are the interesting files tree you'll have to update/use during this workshop

- __app__
  - layout.tsx
  - page.tsx
- __assets__
  - __abis__
    - ERC20.json
    - AVNUNft.json
- __lib__
    - __shared__
        - __components__
          - __layout__
          - __nft__
          - __transactions__
        - __models__
          - nft-metadata.tsx
        - __services__
    - __wallet__
        - __components__
          - connect-button.tsx
          - connect-wallet-modal.tsx

## TODO

1) Familiarize a little with the project
    1) See the file tree
    2) Contract addresses are located in [environment](/environment.ts)
    3) (use of [ChakraUI](https://chakra-ui.com/getting-started) components library)
    4) Uncomment part by part the workshop in [page.tsx](app/page.tsx)
2) Fetching block infos
    1) Update the [starknet providers](lib/shared/components/layout/provider.tsx) to connect to the default Starknet provider by using [Starknet-react](https://github.com/apibara/starknet-react)
    2) Update the [footer component](lib/shared/components/layout/footer.tsx) to fetch & display the current block infos
    3) (The UI part is already done here)
3) Wallet connect
    1) Look at the [Connect button component](lib/wallet/components/connect-button.tsx) & [Connect wallet modal component](lib/wallet/components/connect-wallet-modal.tsx)
    2) Update it to ask user wallet connection by using [Starknet-react](https://github.com/apibara/starknet-react) or [Get starknet by argent](https://github.com/argentlabs/argent-x) if you wnt to use argent web wallet.
    3) You should be able to connect with Braavos or ArgentX, and see your current address on the UI
4) Your first transaction ----------- ici -------------
    1) Start by taking a look at the [Contract Provider model](src/context/ContractProvider/model.ts)
    2) You can now update the [RegisterWhitelist component](src/components/wallet/RegisterWhitelist.tsx) to
        1) Fetch the total free slots currently available
        2) Fetch the current whitelisted status of the connected account
        3) Register to the whitelist if there is free slots & the connected account is not currently whitelisted
5) Multi-call
    1) Look at the [MultiMint component](src/components/wallet/MultiMint.tsx)
    2) Here you'll have to
        1) Fetch balances of arfBTC & arfETH when needed
        2) Mint both arfBTC & arfETH in 1 TX using the multicall
    3) (You can also make a 'register to whitelist + mint token' in 1 TX as well)
6) Deploy your own Access Controller
    1) You can put aside IDE for the time & open your terminal
    2) clone the [access-controller](https://github.com/419Labs/access-controller-contracts) repo
        1) ``> git clone git@github.com:419Labs/access-controller-contracts.git``
    3) Use nile to compile & deploy the contracts
        1) ``> nile compile``
        2) ``> nile deploy AccessController --alias my_access_controller [...args] --network=goerli``
        3) Wait until the contract is deployed
            1) You can check the status of the TX by calling [get_transaction](https://docs.starknet.io/docs/CLI/commands#starknet-get_transaction) on the starknet cli
    4) Once it's ok, you can test it by calling *freeSlotsCount* on the deployed contract
        1) With Nile CLI
        2) With the [voyager](https://goerli.voyager.online/)
    5) You can now replace the ACCESS_CONTROLLER_CONTRACT_ADDRESS in [the contract constants](src/contracts/addresses.ts) to use your own
7) Add your feature
    1) In this part you'll add your own feature from A to Z
    2) Start by choosing the feature you want to implement
        1) Remove from whitelist, Get a list of all whitelisted addresses, ...
    3) Implement the feature on the [AccessController_base contract](https://github.com/419Labs/access-controller-contracts/blob/main/contracts/libraries/AccessController_base.cairo) & Add the corresponding @view or @external interface on the [AccessController contract](https://github.com/419Labs/access-controller-contracts/blob/main/contracts/AccessController.cairo)
    4) Compile & Deploy your new contract
        1) Get the new abi.json & update the [current one](src/contracts/abis/AccessController.json)
    5) Implement the new feature on the UI
        1) By create a new component in */src/components/wallet* & add it in the [index](src/pages/index.tsx)

## Contract addresses

#### AVNU ERC-721
    0x039eb1299cbb259edabb45376ec742497c67150b9adc2d9c3c026a8cc58c634a

## Go further

There some improvements you can make to improve this workshop, here is a non-exhaustive list:

- Use other starknet-reacts hooks
  - UseStarkName()
- Save transactions in local storage
- Display current transaction information on the UI (toast, history panel, ...)
- Auto reload of balance after mint
- Implement a button to be able to add a specific token to your wallet
- ...

## Docs

Here is all the docs you'll need to complete the workshop

https://github.com/apibara/starknet-react

https://www.starknetjs.com/

https://www.npmjs.com/package/@argent/get-starknet

https://github.com/OpenZeppelin/cairo-contracts


## License

This workshop is released under the [AGPL-3.0-only](LICENSE).