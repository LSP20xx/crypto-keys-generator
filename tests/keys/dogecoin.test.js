import { generateDogecoinKeys } from "../../src/keys/dogecoin";
import { mnemonic } from "../mnemonic";

test("generateDogecoinKeys should return correct private key and address", () => {
  const { privateKey, address } = generateDogecoinKeys(mnemonic);
  expect(privateKey).toMatch(/^Q/);
  expect(address).toMatch(/^D/);
});
