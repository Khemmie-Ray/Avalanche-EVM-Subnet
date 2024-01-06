import { ethers } from "hardhat";

async function main() {

  //deploy Token
  const Token = await ethers.deployContract("Token");
  await Token.waitForDeployment();
  console.log(`Token  deployed to ${Token.target}`);


  //deploy GamersVault
  const GamersVault = await ethers.deployContract("GamersVault");
  await GamersVault.waitForDeployment();
  console.log(`GamersVault deployed to ${GamersVault.target}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});