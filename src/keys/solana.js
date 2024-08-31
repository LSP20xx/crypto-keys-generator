import { Keypair, PublicKey } from "@solana/web3.js";
import { mnemonicToSeedSync } from "bip39";

export function generateSolanaKeys(mnemonic) {
  const seed = mnemonicToSeedSync(mnemonic).slice(0, 32);
  const keyPair = Keypair.fromSeed(seed);
  const privateKey = Buffer.from(keyPair.secretKey).toString("hex");
  const publicKey = new PublicKey(keyPair.publicKey);
  return {
    privateKey,
    address: publicKey.toString(),
  };
}
