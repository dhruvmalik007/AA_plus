import {ethers} from "ethers";
import {PaymasterAPI, SimpleAccountAPI} from "@account-abstraction/sdk"
import {JsonRpcProvider}  from "@ethersproject/providers";
import * as dotenv from 'dotenv'

/**
 * @title class for defining methods for instantiating smart Account and providing methods to interact with corresponding deployed account.
 * credits to https://github.com/stackup-wallet/erc-4337-examples/.
 */

dotenv.config()

class Account {

    protected  account: SimpleAccountAPI;
    constructor(provider: JsonRpcProvider, entryPointAddress: string, factoryAddress: string, paymasterAPI?: PaymasterAPI) {
        const owner = new ethers.Wallet(process.env.PRIV_KEY,provider);  
        //TODO: this is just a reference example (as its not safe and production ready) and for better integration we can integrate with other wallet providers 
        this.account = new SimpleAccountAPI({
            provider, entryPointAddress,owner,factoryAddress,paymasterAPI
        });
    }

    /**
     * @dev fetches the UserOperation receipts which is deployed by the given Account Wallet.
     * @param userOpHash is the hash of the transaction submitted by the user during the creation of account
     * @param timeout  is the time limit after the current wallet till which you want to fetch the details from the user.
     * @param interval is the time interval the method has to fetch the results.
     *  @credits taken from stackup_fi ERC-4337 example.
     */

    async getBatchedUserOpsDetails(userOpHash: string, timeout: number, interval: number) : Promise<string| null>  {
     const endtime = Date.now() + timeout;
     const block = await this.account.provider.getBlock("latest");
     while (Date.now() < endtime) {
        // @ts-ignore
        const events = await sw.entryPointView.queryFilter(
          // @ts-ignore
          this.account.entryPointView.filters.UserOperationEvent(userOpHash),
          Math.max(0, block.number - 100)
        );
        if (events.length > 0) {
          return events[0].transactionHash;
        }
        await new Promise((resolve) => setTimeout(resolve, interval));
      }
      return null;
  
    }


  






}