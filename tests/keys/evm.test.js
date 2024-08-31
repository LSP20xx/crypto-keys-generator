import { generateEVMKeys } from "../../src/keys/evm";
import { mnemonic } from "../mnemonic";

test("generateEVMKeys should return correct private key and address", () => {
  const { privateKey, address } = generateEVMKeys(mnemonic);
  expect(privateKey).toMatch(/^0x/);
  expect(address).toMatch(/^0x/);
});
