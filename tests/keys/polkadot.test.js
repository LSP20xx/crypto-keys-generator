import { generatePolkadotKeys } from "../../src/keys/polkadot";
import { mnemonic } from "../mnemonic";

test("generatePolkadotKeys should return correct private key and address", async () => {
  const { privateKey, address } = await generatePolkadotKeys(mnemonic);
  expect(privateKey).toMatch(/^[a-f0-9]{64}$/);
  expect(address).toMatch(/^[1-5]/);
});
