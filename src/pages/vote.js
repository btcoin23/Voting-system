import React, { useState } from "react";
import { initWeb3 } from "../lib/initWeb3";

const Vote = () => {
  const [candidateName, setCandidateName] = useState('');
  const [amount, setAmount] = useState(0);

  const handleVote = async () => {
    const { web3, accounts, votingSystemContract } = await initWeb3();
    try {
      await votingSystemContract.methods.vote(candidateName, amount).send({ from: accounts[0] });
      alert("Vote successfully cast!");
    } catch (error) {
      alert("Voting failed!");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <h1>Vote for Candidate</h1>
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Candidate Name" value={candidateName} onChange={(e) => setCandidateName(e.target.value)} />
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="number" placeholder="Amount of Votes" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleVote}>Vote</button>
    </div>
  );
};

export default Vote;
