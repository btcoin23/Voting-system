import React, { useState } from "react";
import { initWeb3 } from "../lib/initWeb3";

const AddCandidate = () => {
  const [name, setName] = useState('');

  const handleAddCandidate = async () => {
    const { web3, accounts, votingSystemContract } = await initWeb3();
    try {
      await votingSystemContract.methods.addCandidate(name).send({ from: accounts[0] });
      alert("Successfully added");
    } catch (error) {
      alert("Adding failed!");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <h1>Add new candidate</h1>
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Candidate Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleAddCandidate}>Add</button>
    </div>
  );
};

export default AddCandidate;
