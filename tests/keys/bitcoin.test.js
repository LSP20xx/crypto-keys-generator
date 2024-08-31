import { generateBitcoinKeys } from "../../src/keys/bitcoin";
import { mnemonic } from "../mnemonic";

test("generateBitcoinKeys should return correct private key and address", () => {
  const { privateKey, address } = generateBitcoinKeys(mnemonic);
  expect(privateKey).toMatch(/^[KL]/);
  expect(address).toMatch(/^1/);
});
