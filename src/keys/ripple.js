import { BIP32Factory } from "bip32";
import * as tinysecp from "tiny-secp256k1";
import { mnemonicToSeedSync } from "bip39";

const bip32 = BIP32Factory(tinysecp);

export function generateRippleKeys(mnemonic) {
  const seed = mnemonicToSeedSync(mnemonic);
  const node = bip32.fromSeed(seed);
  const keyPair = node.derivePath("m/44'/144'/0'/0/0");
  const privateKey = keyPair.toWIF();
  const { address } = payments.p2pkh({ pubkey: keyPair.publicKey });
  return {
    privateKey,
    address,
  };
}
