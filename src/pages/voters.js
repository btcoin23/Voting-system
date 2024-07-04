import React, { useState, useEffect } from "react";
import { initWeb3 } from "../lib/initWeb3";

const Voters = () => {
  const [voters, setVoters] = useState([]);

  useEffect(() => {
    const loadVoters = async () => {
      const { votingSystemContract } = await initWeb3();
      try {
        const data = await votingSystemContract.methods.getAllVoters().call();
        console.log(data);
        setVoters(data);
      } catch (error) {
        console.error("Error fetching voters:", error);
      }
    };

    loadVoters();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1>Voters List</h1>
      {voters.map((voter, index) => (
        <p key={index}>
          {index} - Address: {voter.voter} - Votes: {Number(voter.votes)}
        </p>
      ))}
    </div>
  );
};

export default Voters;
