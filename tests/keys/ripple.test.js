import { generateRipplePrivateKey } from '../../src/keys/ripple';
import { generateMnemonic } from 'bip39';

test('Generates valid Ripple private key', () => {
    const mnemonic = generateMnemonic(128);
    const privateKey = generateRipplePrivateKey(mnemonic);
    expect(privateKey).toBeTruthy();
});
