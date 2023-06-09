import { expect } from "chai";
import { ethers } from "hardhat";

const helper = async (victim: any, attacker: any) => {
  // add code here that will help you pass the test
  // wait for next block
  await ethers.provider.send("evm_mine", []);
  await attacker.hackContract();
  // wait for next block
  await ethers.provider.send("evm_mine", []);
  await attacker.hackContract();

  // wait for next block
  await ethers.provider.send("evm_mine", []);
  await attacker.hackContract();

  // wait for next block
  await ethers.provider.send("evm_mine", []);
  await attacker.hackContract();
  // wait for next block
  await ethers.provider.send("evm_mine", []);
  await attacker.hackContract();
  // wait for next block
  await ethers.provider.send("evm_mine", []);
  await attacker.hackContract();
  // wait for next block
  await ethers.provider.send("evm_mine", []);
  await attacker.hackContract();
  // wait for next block
  await ethers.provider.send("evm_mine", []);
  await attacker.hackContract();
  // wait for next block
  await ethers.provider.send("evm_mine", []);
  await attacker.hackContract();
  // wait for next block
  await ethers.provider.send("evm_mine", []);
  await attacker.hackContract();
};

export default helper;
