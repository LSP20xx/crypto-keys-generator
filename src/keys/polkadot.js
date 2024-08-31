import { mnemonicToMiniSecret, cryptoWaitReady } from "@polkadot/util-crypto";
import { sr25519PairFromSeed } from "@polkadot/util-crypto/sr25519";

export async function generatePolkadotKeys(mnemonic) {
  await cryptoWaitReady();

  const seed = mnemonicToMiniSecret(mnemonic);
  const keyPair = sr25519PairFromSeed(seed);
  const privateKey = Buffer.from(keyPair.secretKey).toString("hex");
  const publicKey = Buffer.from(keyPair.publicKey).toString("hex");
  return {
    privateKey,
    address: publicKey,
  };
}
