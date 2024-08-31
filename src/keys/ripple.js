import { generateSeed, deriveKeypair, deriveAddress } from "ripple-keypairs";
import { mnemonicToSeedSync } from "bip39";

export function generateRippleKeys(mnemonic) {
  const seed = generateSeed({ entropy: mnemonicToSeedSync(mnemonic) });
  const keypair = deriveKeypair(seed);
  let privateKey = keypair.privateKey;
  if (privateKey.length > 64) {
    privateKey = privateKey.slice(privateKey.length - 64);
  }
  const address = deriveAddress(keypair.publicKey);
  return {
    privateKey,
    address,
  };
}
