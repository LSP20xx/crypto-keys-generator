import { Keypair } from '@solana/web3.js';
import { mnemonicToSeedSync } from 'bip39';

export function generateSolanaPrivateKey(mnemonic) {
    const seed = mnemonicToSeedSync(mnemonic).slice(0, 32);
    const keyPair = Keypair.fromSeed(seed);
    return Buffer.from(keyPair.secretKey).toString('hex');
}
