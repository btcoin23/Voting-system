# Voting System - DApp

It is a decentralized application (DApp) built on the Ethereum blockchain, leveraging smart contracts to manage voting processes with enhanced transparency, security, and integrity. It uses a web-based interface developed with Next.js and React, allowing users to interact with the system seamlessly through MetaMask for Ethereum transactions.



### Short requirements
- Contract owner could add Candidates (any amount).
- Voters could register by themselves.
- Voters receive 10 tokens upon registration
- Voters could transfer their tokens to other voters.
- Voters could vote for any Candidates (1 token 1 vote) with any amount of votes they have.
- We could view a list of candidates and vote for them.
- We could view a list of voters, how many votes they spent and how many votes they still have.

## Explanation
#### Voter Registration
Allows users to register as voters using their Ethereum wallet addresses. Upon registration, the smart contract assigns ten voting tokens to each registered voter.

#### Voting (Casting Votes)
Allows registered voters to cast their votes for their preferred candidates by spending their allocated tokens.  Voters choose a candidate and specify the number of tokens they wish to use as votes. Each token represents one vote. The smart contract then verifies the voter's balance and records the votes, updating the total count for the chosen candidate.


#### Transferring Tokens
Allows voters to transfer their voting tokens to other registered voters. This feature allows voters to delegate their voting power to others, who can then use these tokens to vote. The smart contract handles the transfer securely, ensuring that tokens are moved from one voter's balance to another.


#### Viewing Candidates and Vote Totals
Displays a list of all candidates and the current number of votes each has received. The smart contract maintains a record of all candidates and their vote counts, which can be queried by the DApp to display up-to-date voting results.


#### Listing Registered Voters
Shows all registered voters along with their current token balances and the amount of tokens they have spent on voting. Each voter’s registration and voting history are stored in the blockchain, allowing the system to retrieve and display comprehensive details about voter participation.


## System Architecture and Technologies
### Smart Contracts
Written in Solidity, these contracts run on the Ethereum blockchain and are responsible for all critical operations like voter registration, voting, and token transfers.

### Web Interface
Built using Next.js and React, the web interface interacts with the smart contracts through Web3.js, which facilitates blockchain transactions. Users manage their interactions via MetaMask, a popular Ethereum wallet and browser extension.

### MetaMask Integration
Enables Ethereum transactions and account management directly from the web browser, providing a user-friendly interface for accessing the Ethereum blockchain.
