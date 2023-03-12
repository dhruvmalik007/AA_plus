/**
 * Script for parsing the method interfaces from the supported ERC standard assets.
 *  input : 
 */

import 'typechain'
import 'axios';

export const contractTypes: string[] = ['20', '721', '777', '1155', '4626', '1271', '1967', '2981' ];

// just for demo 

export const ERC20_ABI = [
    // Read-Only Functions
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",
      // Authenticated Functions
    "function transfer(address to, uint amount) returns (bool)",
    // Events
    "event Transfer(address indexed from, address indexed to, uint amount)",
  ];

export function getABI(contractType:number): Promise<string[]> | string[] {
    
    return ERC20_ABI
}
