import { generateAllKeys } from "../src/generateAllKeys";
import { mnemonic } from "./mnemonic";

test("Generate all keys from mnemonic", async () => {
  const keys = await generateAllKeys(mnemonic);
  expect(keys.bitcoin.privateKey).toMatch(/^[KL]/);
  expect(keys.bitcoin.address).toMatch(/^1/);
  expect(keys.dogecoin.privateKey).toMatch(/^Q/);
  expect(keys.dogecoin.address).toMatch(/^D/);
  expect(keys.evm.privateKey).toMatch(/^0x/);
  expect(keys.evm.address).toMatch(/^0x/);
  expect(keys.litecoin.privateKey).toMatch(/^T/);
  expect(keys.litecoin.address).toMatch(/^L/);
  expect(keys.polkadot.privateKey).toMatch(/^[a-f0-9]{64}$/);
  expect(keys.polkadot.address).toMatch(/^[1-5]/);
  expect(keys.ripple.privateKey).toMatch(/^[0-9A-Fa-f]{64}$/);
  expect(keys.ripple.address).toMatch(/^r/);
  expect(keys.solana.privateKey).toMatch(/^[a-f0-9]{128}$/);
  expect(keys.solana.address).toMatch(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/);
});
