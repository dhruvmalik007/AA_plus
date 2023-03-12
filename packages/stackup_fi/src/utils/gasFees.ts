import {BigNumberish, ethers} from 'ethers';
import {JsonRpcProvider} from "@ethersproject/providers"

interface Gas {
    maxFeePerGas: BigNumberish,
    maxPriorityFeePerGas: BigNumberish
}

//  fees from the alchemy / infura or any other jsonProvider using EIP-1559 gas calculation


export async function fetchGasFees(provider: JsonRpcProvider): Promise<Gas> {
const [fee,blocks] =  await Promise.all([
    provider.send("eth_maxPriorityFeePerGas", []),
    provider.getBlock("latest"),
  ]);
 
  const tip = ethers.BigNumber.from(fee);
  const buffer = tip.div(100).mul(13);
  const maxPriorityFeePerGas = tip.add(buffer);

  const maxFeePerGas = blocks.baseFeePerGas
    ? blocks.baseFeePerGas.mul(2).add(maxPriorityFeePerGas)
    : maxPriorityFeePerGas;


  return { maxFeePerGas, maxPriorityFeePerGas };
}


