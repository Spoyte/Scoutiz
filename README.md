# Scoutix

Scoutix is a decentralized scouting platform. Anyone can create future proofs of interest in a player, with a description and choose to reveal it later and to whomever they want. A confidence score is given to unrevealed picks through tokens hold, how long, and other parameters.

# Description
Scoutix is a decentralized scouting platform. In the football world, and generally in the sport world, scouting is an important part of the industry. However, nowadays, local people can have more accurate information than scouting departments far away. The next world star could emerge from anywhere, and no football club would want to miss him. 
Currently, clubs have scouting departments that are big, slow, and expensive. Often, they need to choose the places they keep informed about and place they give up on.
With Scoutix, anyone can create a future proof of interest in a player, with a description of him. This is the first part of the platform, but not the only one. This part is important to let future bright scouts emerge with proof of their abilities. If someone can prove in 2 or 3 years that he was the first to let his eyes on the new Messi/Ronaldo, clubs will suddenly be interested in having his information. Today this is not possible, as you cannot really prove that you knew a certain player would become a great one, and that you do not just say this for every young player.
Through Scoutix, people can choose to reveal their predictions whenever they want, with a timestamp and exact description of their prediction about the players, to whomever they want.
A confidence score is given to unrevealed picks through tokens holdings, how long, and other parameters.
For example, having tokens $PSG since a long time might indicate an interest in this club and its region, given a higher confidence on the picks of this person if they are French / Parisians players or if they have a link to the club (playing there in the junior teams, plying against this team a lot, etc…)
Other than this, as the predictions will become either accurate and revealed, or will stay hidden, it will be able to affect the confidence score. After a few years, a prediction will be either correct, or not good enough for the scout to want to reveal it, which will indicate it was a bad one, possibly reducing his confidence score.

# How it’s made

The project makes use of solidity and the EVM for the smart contracts. I used Remix and Hardhat for developing the smart contracts. I used scaffold with React.js, nextJS and hardhat for the frontend and wagmi for the wallet connectivity. With Chiliz I configured Metamask enabling connectivity to the mainnet and spicy testnet. I also added Arbitrum testnet to test deployment, with the goal to allow usage of the Dapp also from other network, using a bridge to get information about the holdings of the user at submission of new data. I also used Worldcoin to avoid Sybil attacks where someone would create many different users that all predict a few players, in order to have at least one account where it would be considered as a high confidence account that only made great predictions.
The front create a hash of the information provided by the user, and then the smart-contract store this hash and link it to the user’s address. Then the actual data is stored encrypted using the private key of the user, in Filecoin (this is not implemented). Another thing that could be a nice thing to add, is the ability through ZK for exemple, to allow people to search for profiles they want (let’s say an attacker aged 16-19, good in possession style, left footed, right wing) without revealing all the details of the scout’s information. The scout would just prove he has this type of profile.
Currently, the market place is in the form of a manual P2P market.











# 🏗 Scaffold-ETH 2

<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Website</a>
</h4>

🧪 An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
- 🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of common web3 components to quickly build your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

![Debug Contracts tab](https://github.com/scaffold-eth/scaffold-eth-2/assets/55535804/b237af0c-5027-4849-a5c1-2e31495cccb1)

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/scaffold-eth-2.git
cd scaffold-eth-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend in `packages/nextjs/pages`
- Edit your deployment scripts in `packages/hardhat/deploy`

## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
