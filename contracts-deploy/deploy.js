const hre = require("hardhat");

async function deployVoting(){
    const contract = await hre.ethers.deployContract("VotingSystem");
    await contract.waitForDeployment();
  
    console.log(`VotingSystem deployed to ${contract.target}`)
}

deployVoting().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});