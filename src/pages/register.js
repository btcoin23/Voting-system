import React from "react";
import Web3 from "web3";
import { initWeb3 } from "../lib/initWeb3";

const Register = () => {
  const registerVoter = async () => {
    const { web3, accounts, votingSystemContract } = await initWeb3();
    try {
      await votingSystemContract.methods.registerVoter().send({ from: accounts[0] });
      alert("Registered successfully!");
    } catch (error) {
      alert("Registration failed!");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1>Register as a Voter</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={registerVoter}>Register</button>
    </div>
  );
};

export default Register;
