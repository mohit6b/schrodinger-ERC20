require("@nomicfoundation/hardhat-toolbox");

const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID || "";
const PRIVATE_KEYS = process.env.PRIVATE_KEYS;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    mainnet: {
      url: "https://mainnet.infura.io/v3/INFURA_PROJECT_ID",
      accounts: PRIVATE_KEYS 
    }
  },
  solidity: "0.8.9",
};
