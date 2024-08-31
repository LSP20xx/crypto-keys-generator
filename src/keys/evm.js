import { Mnemonic, HDNodeWallet } from "ethers";

export function generateEVMKeys(mnemonicPhrase) {
  const mnemonic = Mnemonic.fromPhrase(mnemonicPhrase);
  const wallet = HDNodeWallet.fromMnemonic(mnemonic);
  return {
    privateKey: wallet.privateKey,
    address: wallet.address,
  };
}
