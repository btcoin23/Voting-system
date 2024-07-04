import React, { useState, useEffect } from "react";
import { initWeb3 } from "../lib/initWeb3";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const loadCandidates = async () => {
      const { votingSystemContract } = await initWeb3();
      try {
        const data = await votingSystemContract.methods.getAllCandidates().call();
        console.log(data);
        setCandidates(data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    loadCandidates();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1>Candidates List</h1>
      {candidates.map((candidate, index) => (
        <p key={index}>
          {index} - Name: {candidate.name} - Votes: {Number(candidate.voteCount)}
        </p>
      ))}
    </div>
  );
};

export default Candidates;
