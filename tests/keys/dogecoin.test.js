import { generateDogecoinPrivateKey } from '../../src/keys/dogecoin';
import { generateMnemonic } from 'bip39';

test('Generates valid Dogecoin private key', () => {
    const mnemonic = generateMnemonic(128);
    const privateKey = generateDogecoinPrivateKey(mnemonic);
    expect(privateKey).toBeTruthy();
});
