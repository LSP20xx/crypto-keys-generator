import { Mnemonic, HDNodeWallet } from 'ethers';

export function generateEVMPrivateKey(mnemonicPhrase) {
    const mnemonic = Mnemonic.fromPhrase(mnemonicPhrase);
    const wallet = HDNodeWallet.fromMnemonic(mnemonic);
    return wallet.privateKey;
}