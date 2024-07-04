import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import Web3 from "web3";

const votingSystemABI = require("../../artifacts/contracts/VotingSystem.sol/VotingSystem.json").abi;
const VOTING_SYSTEM_ADDRESS = "0x3EbF26c3Ba54B5a6CF1845BAB0Cde260CdaC5C70";

export const initWeb3 = async () => {
  let web3;
  try {
    if (window.ethereum) {
      // Use MetaMask's provider
      web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" }); // Request account access
    } else if (window.web3) {
      // Legacy dApp browsers
      web3 = new Web3(window.web3.currentProvider);
    } else {
      // Fallback to HTTP provider
      const provider = new Web3.providers.HttpProvider("https://sepolia.infura.io/v3/79a0f461f9314649b54c3a5248efa810");
      web3 = new Web3(provider);
      console.log("Falling back to HTTP provider.");
    }

    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.getChainId();
    console.log("networkId: " + networkId);
    if (networkId != '11155111') { // Sepolia network ID
      console.error("Contract not deployed on current network.");
      return;
    }

    const votingSystemContract = new web3.eth.Contract(votingSystemABI, VOTING_SYSTEM_ADDRESS);

    return { web3, accounts, votingSystemContract };
  } catch (error) {
    console.error("Failed to load web3, accounts, or contracts. Check console for details.", error);
    throw new Error("Failed to load web3, accounts, or contracts.");
  }
};
