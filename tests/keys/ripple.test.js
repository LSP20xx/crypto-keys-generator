import { generateRippleKeys } from "../../src/keys/ripple";
import { mnemonic } from "../mnemonic";

test("generateRippleKeys should return correct private key and address", () => {
  const { privateKey, address } = generateRippleKeys(mnemonic);
  expect(privateKey).toMatch(/^[0-9A-Fa-f]{64}$/);
  expect(address).toMatch(/^r/);
});
