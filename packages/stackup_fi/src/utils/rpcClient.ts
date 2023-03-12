/**
 * initializes the RPC client and initiated operations (GET/PUT/FETCH).
 */

import {HttpRpcClient} from "@account-abstraction/sdk/dist/src/HttpRpcClient"
import {JsonRpcProvider} from "@ethersproject/providers"

interface ProviderType {
    provider: JsonRpcProvider;
    bundleURL: string;
    entrypointAddress: string;
}



class rpcClient {


   
    /**
 * initializes the rpcClient 
 */

public  _provider: ProviderType;
static httpclient: HttpRpcClient;
constructor(_provider: JsonRpcProvider, _bundlerUrl: string, _entryPointAddress: string) 
{
this._provider.provider = _provider;
this._provider.bundleURL = _bundlerUrl;
this._provider.entrypointAddress = _entryPointAddress;
}


public static async initRPC(_provider: ProviderType): Promise<boolean> {
    const chainId = await (_provider.provider.getNetwork()).then((net) => net.chainId);
   this.httpclient = new HttpRpcClient(_provider.bundleURL, _provider.entrypointAddress,chainId);
    return true;
}


}