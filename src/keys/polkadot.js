import { mnemonicToMiniSecret, cryptoWaitReady } from '@polkadot/util-crypto';
import { sr25519PairFromSeed } from '@polkadot/util-crypto/sr25519';

export async function generatePolkadotPrivateKey(mnemonic) {
    await cryptoWaitReady();

    const seed = mnemonicToMiniSecret(mnemonic);
    const keyPair = sr25519PairFromSeed(seed);
    return Buffer.from(keyPair.secretKey).toString('hex');
}
