import {
  mnemonicToMiniSecret,
  cryptoWaitReady,
  encodeAddress,
} from "@polkadot/util-crypto";
import { sr25519PairFromSeed } from "@polkadot/util-crypto/sr25519";

export async function generatePolkadotKeys(mnemonic) {
  await cryptoWaitReady();

  const seed = mnemonicToMiniSecret(mnemonic);
  const keyPair = sr25519PairFromSeed(seed);
  const privateKey = Buffer.from(keyPair.secretKey).toString("hex");

  const address = encodeAddress(keyPair.publicKey, 0);

  return {
    privateKey,
    address,
  };
}
