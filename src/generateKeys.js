import { generateBitcoinKeys } from "./keys/bitcoin.js";
import { generateLitecoinKeys } from "./keys/litecoin.js";
import { generateDogecoinKeys } from "./keys/dogecoin.js";
import { generateEVMKeys } from "./keys/evm.js";
import { generateSolanaKeys } from "./keys/solana.js";
import { generatePolkadotKeys } from "./keys/polkadot.js";
import { generateRippleKeys } from "./keys/ripple.js";
import { generateMnemonic } from "bip39";

export async function generateAllKeys() {
  const mnemonic = generateMnemonic(128);
  return {
    mnemonic,
    bitcoin: generateBitcoinKeys(mnemonic),
    litecoin: generateLitecoinKeys(mnemonic),
    dogecoin: generateDogecoinKeys(mnemonic),
    evm: generateEVMKeys(mnemonic),
    solana: generateSolanaKeys(mnemonic),
    polkadot: await generatePolkadotKeys(mnemonic),
    ripple: generateRippleKeys(mnemonic),
  };
}
