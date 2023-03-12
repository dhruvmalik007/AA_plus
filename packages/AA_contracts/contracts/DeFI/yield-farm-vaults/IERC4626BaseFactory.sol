pragma solidity ^0.8.10;
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC4626} from "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";


interface IERC4626BaseFactory {

function createERC4626(ERC20 asset) external virtual returns (ERC4626 vault);

function computeERC4626Address(ERC20 asset) external view virtual returns (ERC4626 vault);
}