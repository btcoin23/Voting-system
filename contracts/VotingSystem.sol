// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingSystem {
    struct Candidate {
        string name;
        uint voteCount;
    }

    struct Voter {
        bool registered;
        address voter;
        uint votes;
    }

    Candidate[] public candidates;
    Voter[] public voterList;

    address public chairPerson;

    constructor(){
        chairPerson = msg.sender;
    }

    function getVoter(address voter) internal view returns (Voter memory) {
        for (uint i = 0; i < voterList.length; i++) {
            if(voterList[i].voter == voter)
            return voterList[i];
        }
        return Voter(false, address(0), 0);
    }

    function addVotes(address voter, uint amount) internal{
        for (uint i = 0; i < voterList.length; i++) {
            if(voterList[i].voter == voter)
                voterList[i].votes += amount;
        }
    }

    function subVotes(address voter, uint amount) internal{
        for (uint i = 0; i < voterList.length; i++) {
            if(voterList[i].voter == voter)
                voterList[i].votes -= amount;
        }
    }

    function registerVoter() external {
        require(!getVoter(msg.sender).registered, "Voter is already registered.");
        // Ensure that the voter is not already registered
        voterList.push(Voter(true, msg.sender, 10));
    }

    function addCandidate(string memory name) external {
        require(msg.sender == chairPerson, "Only chairperson can give right to vote.");
        candidates.push(Candidate(name, 0));
    }

    function transferVotes(address to, uint amount) external {
        require(getVoter(msg.sender).registered, "Sender is not registered.");
        require(getVoter(to).registered, "Recipient is not registered.");
        require(getVoter(msg.sender).votes >= amount, "Not enough votes.");

        subVotes(msg.sender, amount);
        addVotes(to, amount);
    }

    function vote(string memory to, uint amount) external {
        require(getVoter(msg.sender).registered, "You must be registered to vote.");
        require(amount > 0, "You need to vote with at least some votes");
        require(getVoter(msg.sender).votes >= amount, "Not enough votes");

        bool flag;
        for (uint i = 0; i < candidates.length; i++) {
            string storage candidateName = candidates[i].name;
            if(keccak256(abi.encodePacked(candidateName)) == keccak256(abi.encodePacked(to))) {
                candidates[i].voteCount += amount;
                flag = true;
                break; // Exit the loop once a match is found
            }
        }
        require(flag, "Invalid candidate");
        subVotes(msg.sender, amount);
    }

    function getWinner() external view returns (string memory) {
        uint highestVoteCount = 0;
        uint winningCandidateId;
        for (uint i = 0; i < candidates.length; i++) {
            if (candidates[i].voteCount > highestVoteCount) {
                highestVoteCount = candidates[i].voteCount;
                winningCandidateId = i;
            }
        }
        return candidates[winningCandidateId].name;
    }

    function getAllCandidates() external view returns (Candidate[] memory){
        return candidates;
    }

    function getAllVoters() external view returns (Voter[] memory){
        return voterList;
    }

    function getVotes() external  view returns (uint){
        return getVoter(msg.sender).votes;
    }
}