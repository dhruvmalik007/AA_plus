// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;


/// @title ERC4626FactoryVaults
/// @author (credits to ZeframLou for initial version of contract here: https://github.com/timeless-fi/yield-daddy/blob/main/src/base/ERC4626Factory.sol)
/// @notice allows abstracted Account to instantiate vault and then stakeManager can pay for the corresponding fees.
/// @dev to refer to the validateUserOp and execute functions in order to run those transactions.
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC4626} from "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import {UserOperation} from "../../lib/UserOperation.sol"; 
import {IERC4626BaseFactory} from "./IERC4626BaseFactory.sol";

 contract ERC4626Factory is IERC4626BaseFactory {

    public address stakeManager;
    public address accountManager;

    //TODO: instantiate the contract with both address and define functions to instantiate vault.

 enum DeFIProtocol {AAVE, Compound, euler, lido, yearn }

    // events 
event ERC4626Created(ERC20 indexed asset, ERC4626 vault);


function _computeCreate2Address(bytes32 bytecodeHash) internal view virtual returns (address) {
    return keccak256(abi.encodePacked(bytes1(0xFF), address(this), bytes32(0), bytecodeHash))
        // Prefix:
        // Creator:
        // Salt:
        // Bytecode hash:
        .fromLast20Bytes(); // Convert the CREATE2 hash into an address.
}


}