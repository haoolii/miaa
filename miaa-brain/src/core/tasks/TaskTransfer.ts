import { Task } from "../Task";
import { ethers } from "ethers";
const pk = "0x3b283c117de8724e2dc28adfb246d5571502c1fabf9121113ba95bfd248b1e3a";
const toAddress = "0x7bd0d01ed6d9da14861f022b94467f8d2f8bb536";

let provider = new ethers.JsonRpcProvider("https://artio.rpc.berachain.com/", {
  chainId: 80085,
  name: "Berachain Artio",
});

let usage = 0;

export class TaskTransfer extends Task {
  constructor(id: string, name: string, description: string) {
    super(id, name, description);
  }
  execute(parameters: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const signer = new ethers.Wallet(pk, provider);
      try {
        usage++;
        const nonce = await provider.getTransactionCount(signer.address);
        console.log("nonce", nonce);
        console.log("usage", usage);
        const tx = await signer.sendTransaction({
          to: toAddress,
          value: ethers.parseUnits("0.001", "ether"),
          nonce: nonce,
        });

        if (usage > 5) {
          provider = new ethers.JsonRpcProvider(
            "https://artio.rpc.berachain.com/",
            { chainId: 80085, name: "Berachain Artio" }
          );
          usage = 0;
        }

        provider.once(tx.hash, (receipt) => {
          resolve(receipt);
          console.log("Transaction confirmed:");
          console.log("Transaction sent:", tx.hash);
        });
      } catch (e) {
        console.log("err", e);
        reject(e);
      }
    });
  }
}
