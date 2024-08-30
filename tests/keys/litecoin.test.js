import { generateLitecoinPrivateKey } from '../../src/keys/litecoin';
import { generateMnemonic } from 'bip39';

test('Generates valid Litecoin private key', () => {
    const mnemonic = generateMnemonic(128);
    const privateKey = generateLitecoinPrivateKey(mnemonic);
    expect(privateKey).toBeTruthy();
});
