require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({path: __dirname + '/.env'})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.ALCHEMY_PRIVATE_KEY]
    }
  }
};
