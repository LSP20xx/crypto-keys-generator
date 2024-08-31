import { generateSolanaKeys } from "../../src/keys/solana";
import { mnemonic } from "../mnemonic";

test("generateSolanaKeys should return correct private key and address", () => {
  const { privateKey, address } = generateSolanaKeys(mnemonic);
  expect(privateKey).toMatch(/^[a-f0-9]{128}$/);
  expect(address).toMatch(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/);
});
