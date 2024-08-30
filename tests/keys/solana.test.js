import { generateSolanaPrivateKey } from '../../src/keys/solana';
import { generateMnemonic } from 'bip39';

test('Generates valid Solana private key', () => {
    const mnemonic = generateMnemonic(128);
    const privateKey = generateSolanaPrivateKey(mnemonic);
    expect(privateKey).toBeTruthy();
});
