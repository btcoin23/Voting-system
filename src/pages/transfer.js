import React, { useState } from "react";
import { initWeb3 } from "../lib/initWeb3";

const TransferVotes = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState(0);

  const handleTransfer = async () => {
    const { web3, accounts, votingSystemContract } = await initWeb3();
    try {
      await votingSystemContract.methods.transferVotes(recipient, amount).send({ from: accounts[0] });
      alert("Votes transferred successfully!");
    } catch (error) {
      alert("Transfer failed!");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <h1>Transfer Votes</h1>
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Recipient Address" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="number" placeholder="Amount of Votes" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleTransfer}>Transfer</button>
    </div>
  );
};

export default TransferVotes;
