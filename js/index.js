const solana = require("@solana/web3.js");
const Markets = require("./markets.json");

const AWESOME_MARKETS = Markets.map(market => {
  return {
    address: new solana.PublicKey(market.address),
    name: market.name,
    programId: new solana.PublicKey(market.programId),
    deprecated: market.deprecated
  };
});

module.exports = AWESOME_MARKETS;
