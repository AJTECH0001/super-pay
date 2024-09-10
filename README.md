#  SuperPay Subscription Payment 

## Introduction

### The SuperPay Subscription Payment is a decentralized application (dApp) that demonstrates how to set up real-time payment streams using the Superfluid protocol. Users can connect their crypto wallet, input a recipient address, and specify a flow rate to initiate continuous token transfers in real time. This project is designed to showcase the power of Superfluid in automating payments for services like subscriptions, salaries, and rewards.

## Features

Wallet Connection: Connect your wallet (e.g., MetaMask) using RainbowKit and Wagmi.

Real-Time Payments: Set up continuous payment streams using Superfluid’s asset streaming capabilities.

User-Friendly Interface: Input fields for recipient address and flow rate, with clear feedback for successful stream creation.

Stream Status: Displays active stream details, such as the connected wallet address and stream parameters.


## Installation and Setup

### Prerequisites
Before running the application, ensure you have the following installed:

Node.js (v16 or higher)
npm or yarn package manager
A crypto wallet like MetaMask

### Getting Started

Clone the repository:

```
git clone https://https://github.com/AJTECH0001/super-pay.git
```

Navigate into the project directory:

```
cd super-pay
```

Install the dependencies:

```
npm install
or
yarn install
```

Start the development server:

```
npm run dev
```

## Usage

### Connecting Your Wallet
When you first load the app, you will see a "Connect Wallet" button.
Click the button and follow the steps to connect your MetaMask or preferred wallet.

### Creating a Payment Stream

Once your wallet is connected, input the following details:
Token Address: The address of the token you wish to stream.
Recipient Address: The address of the wallet that will receive the stream.
Flow Rate: The rate at which tokens will be transferred (e.g., tokens/second).
Click "Start Stream" to initiate the real-time payment.

### Technologies Used

React: Frontend framework to create a responsive user interface.
Tailwind CSS: For styling and designing the components.
Superfluid SDK: Enables the streaming of cryptocurrency in real-time.
RainbowKit & Wagmi: For wallet connection and blockchain interactions.
Ethereum/Polygon: Compatible with EVM-compatible blockchains like Ethereum or Polygon.

### Future Enhancements

Stream Management: Allow users to pause, resume, or stop ongoing streams.
Dashboard: Build a dashboard to visualize all active streams and flow rates.
Multi-Chain Support: Add support for other EVM-compatible blockchains (e.g., Arbitrum, Optimism).