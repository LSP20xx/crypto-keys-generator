import { generateKeys } from '../src/generateKeys';

test('Generates valid keys', async () => {
    const keys = await generateKeys();
    expect(keys.mnemonic.split(' ').length).toBe(12);
    expect(keys.bitcoinPrivateKey).toBeTruthy();
    expect(keys.litecoinPrivateKey).toBeTruthy();
    expect(keys.dogecoinPrivateKey).toBeTruthy();
    expect(keys.evmPrivateKey).toBeTruthy();
    expect(keys.solanaPrivateKey).toBeTruthy();
    expect(keys.polkadotPrivateKey).toBeTruthy();
    expect(keys.ripplePrivateKey).toBeTruthy();
});
