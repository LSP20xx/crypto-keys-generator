import { generateBitcoinPrivateKey } from '../../src/keys/bitcoin';
import { generateMnemonic } from 'bip39';

test('Generates valid Bitcoin private key', () => {
    const mnemonic = generateMnemonic(128);
    const privateKey = generateBitcoinPrivateKey(mnemonic);
    expect(privateKey).toBeTruthy();
});
