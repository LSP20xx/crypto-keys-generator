import { generateEVMPrivateKey } from '../../src/keys/evm';
import { generateMnemonic } from 'bip39';

test('Generates valid EVM private key', () => {
    const mnemonic = generateMnemonic(128);
    const privateKey = generateEVMPrivateKey(mnemonic);
    expect(privateKey).toBeTruthy();
});
