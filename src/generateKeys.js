import { generateBitcoinPrivateKey } from './keys/bitcoin.js';
import { generateLitecoinPrivateKey } from './keys/litecoin.js';
import { generateDogecoinPrivateKey } from './keys/dogecoin.js';
import { generateEVMPrivateKey } from './keys/evm.js';
import { generateSolanaPrivateKey } from './keys/solana.js';
import { generatePolkadotPrivateKey } from './keys/polkadot.js';
import { generateRipplePrivateKey } from './keys/ripple.js';
import { generateMnemonic } from 'bip39';

export async function generateKeys() {
    const mnemonic = generateMnemonic(128);
    return {
        mnemonic,
        bitcoinPrivateKey: generateBitcoinPrivateKey(mnemonic),
        litecoinPrivateKey: generateLitecoinPrivateKey(mnemonic),
        dogecoinPrivateKey: generateDogecoinPrivateKey(mnemonic),
        evmPrivateKey: generateEVMPrivateKey(mnemonic),
        solanaPrivateKey: generateSolanaPrivateKey(mnemonic),
        polkadotPrivateKey: await generatePolkadotPrivateKey(mnemonic),
        ripplePrivateKey: generateRipplePrivateKey(mnemonic),
    };
}