# Crypto Keys Generator

This project is a tool for generating private keys for multiple cryptocurrencies from a 12-word mnemonic seed phrase.

## Features

- Generates private keys for:
  - Bitcoin (BTC)
  - Litecoin (LTC)
  - Dogecoin (DOGE)
  - Ethereum-compatible networks (EVM)
  - Solana (SOL)
  - Polkadot (DOT)
  - Ripple (XRP)

- Uses a single private key for EVM-compatible networks and others where applicable.
- Modular design for easy extension and maintenance.
- Written in modern JavaScript, compatible with a wide range of JavaScript environments and frameworks.

## Installation

```bash
npm install
```

## Usage

To generate a new set of private keys:

```bash
npm start
```

This will generate a 12-word mnemonic and derive the private keys for each supported cryptocurrency.

## Running Tests

```bash
npm test
```

## Project Structure

```bash
my-crypto-key-generator/
│
├── src/
│   ├── keys/
│   │   ├── bitcoin.js
│   │   ├── litecoin.js
│   │   ├── dogecoin.js
│   │   ├── evm.js
│   │   ├── solana.js
│   │   ├── polkadot.js
│   │   └── ripple.js
│   └── generateKeys.js
│
├── tests/
│   ├── generateKeys.test.js
│   └── keys/
│       ├── bitcoin.test.js
│       ├── litecoin.test.js
│       ├── dogecoin.test.js
│       ├── evm.test.js
│       ├── solana.test.js
│       ├── polkadot.test.js
│       └── ripple.test.js
│
├── .gitignore
├── README.md
└── package.json
```

## License

MIT License

## Author

Lautaro Santiago Perrotti
