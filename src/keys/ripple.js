import { generateSeed, deriveKeypair, deriveAddress } from "ripple-keypairs";
import { mnemonicToSeedSync } from "bip39";

export function generateRippleKeys(mnemonic) {
  const seed = generateSeed({ entropy: mnemonicToSeedSync(mnemonic) });

  const keypair = deriveKeypair(seed);

  const address = deriveAddress(keypair.publicKey);

  return {
    privateKey: keypair.privateKey,
    address,
  };
}
