import { generateLitecoinKeys } from "../../src/keys/litecoin";
import { mnemonic } from "../mnemonic";

test("generateLitecoinKeys should return correct private key and address", () => {
  const { privateKey, address } = generateLitecoinKeys(mnemonic);
  expect(privateKey).toMatch(/^T/);
  expect(address).toMatch(/^L/);
});
