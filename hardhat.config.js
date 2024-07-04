// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.24",
// };

require("@nomicfoundation/hardhat-toolbox");

const INFURA_API_KEY = "INFURA_API_KEY";

const ACCOUNT_PRIVATE_KEY = "ACCOUNT_PRIVATE_KEY";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {  
  etherscan: {
    apiKey: "8YW13691GIABJRFNPWNVQ3U6VDYV6DBGRY",
  },
  defaultNetwork: "localhost",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [ ACCOUNT_PRIVATE_KEY ],
      chainId: 11155111,
      gas: 2100000,
      gasPrice: 8000000000
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true
          }
        },
      }
    ]
  },
  sourcify: {
    enabled: true
  }
};
