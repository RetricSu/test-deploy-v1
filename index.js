const Web3 = require("web3");

const web3Url = "https://godwoken-testnet-web3-v1-rpc.ckbapp.dev";
const privateKey = "0x6cd5e7be2f6504aa5ae7c0c04178d8f47b7cfc63b71d95d9e6282f5b090431bf";
const from = "0x6DaF63D8411D6E23552658E3cFb48416A6A2CA78";
const CONTRACT = require("./contracts/ErrorReceipt.json");

const web3 = new Web3(web3Url);
web3.eth.accounts.wallet.add(privateKey);

const run = async () => {
  const myContract = new web3.eth.Contract(CONTRACT.abi);

  const contractInstance = await myContract
    .deploy({
      data: "0x" + CONTRACT.bytecode,
    })
    .send({
      gas: "0x30d40",
      gasPrice: "0x00",
      from
    });

  console.log(contractInstance);
};

run();