// SPDX-License-Identifier: MIT
import "hardhat/console.sol";

pragma solidity ^0.8.9;

contract Delegate {
    address public owner;

    constructor(address _owner) {
        owner = _owner;
    }

    function pwn() public {
        console.log('pwn is called');
        owner = msg.sender;
    }
}

contract Delegation {
    address public owner;
    Delegate public delegate;

    constructor(address _delegateAddress) {
        delegate = Delegate(_delegateAddress);
        owner = msg.sender;
    }

    fallback() external {
        console.log("Fallback is called");
        (bool result, ) = address(delegate).delegatecall(msg.data);
        if (result == true) {
            this;
        }
    }
}
