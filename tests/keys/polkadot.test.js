import { generatePolkadotPrivateKey } from '../../src/keys/polkadot';
import { generateMnemonic } from 'bip39';

test('Generates valid Polkadot private key', () => {
    const mnemonic = generateMnemonic(128);
    const privateKey = generatePolkadotPrivateKey(mnemonic);
    expect(privateKey).toBeTruthy();
});
