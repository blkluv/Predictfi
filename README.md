# PredictFi

PredictFi is a blockchain-based prediction market platform that enables users to forecast real-world events and transact using ERC20 tokens. Built with **Next.js** and integrated with **ThirdWeb**, PredictFi ensures transparency, security, and decentralization in prediction-based transactions.

## Features

- **Decentralized Prediction Market** – Users can predict outcomes in various categories, including sports, politics, and finance.
- **Blockchain-Powered Transactions** – Smart contracts handle predictions and payouts, ensuring complete fairness and immutability.
- **ERC20 Token Integration** – Transactions and rewards are conducted in standard ERC20 tokens.
- **Seamless User Experience** – Built with **Next.js** for a fast, responsive, and scalable interface.
- **ThirdWeb Integration** – Simplifies blockchain interactions, making deployment and token management efficient.

## Technologies Used

- **Next.js** – React-based framework for server-side rendering and optimized performance.
- **Solidity** – Smart contract development language for Ethereum.
- **ThirdWeb** – Simplifies blockchain deployment and interactions.
- **ERC20 Standard** – Ensures compatibility with Ethereum-based tokens.
- **Foundry (Forge)** – Smart contract testing and deployment framework.
- **Tailwind CSS** – Modern utility-first styling for a clean UI.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/predictfi.git
cd predictfi
npm install  # or yarn install
```

### Running the Development Server

Start the development server with:

```bash
npm run dev  # or yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to access the application.

## Smart Contract Deployment

PredictFi utilizes Solidity smart contracts for secure predictions and payouts. Deploy contracts using ThirdWeb:

```bash
yarn deploy  # Deploy contracts to the blockchain
```

Ensure you have a valid Ethereum wallet (e.g., MetaMask) connected.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) – Official Next.js documentation.
- [ThirdWeb Docs](https://portal.thirdweb.com/) – Learn about deploying smart contracts easily.
- [Ethereum Smart Contracts](https://ethereum.org/en/developers/docs/smart-contracts/) – Understand Ethereum's smart contract ecosystem.
- [ERC20 Token Standard](https://eips.ethereum.org/EIPS/eip-20) – Learn about ERC20 tokens and their functionalities.

## Deployment

PredictFi is optimized for deployment on **Vercel**. To deploy:

```bash
git push origin main  # Push changes to the main branch
```

Then, connect your repository to [Vercel](https://vercel.com/) for automated deployment.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For inquiries or contributions, please contact [your email or GitHub profile].
