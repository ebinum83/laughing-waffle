const { expect } = require("chai");
const { deployer, web3 } = require("truffle");

describe("deployer function", () => {
  it("should deploy Migrations contract", async () => {
    const deployerInstance = deployer();
    await deployerInstance.deploy(Migrations);

    // Check if the contract is deployed successfully
    const contractAddress = await web3.eth.contract(Migrations.abi).options
      .address;
    expect(contractAddress).to.exist;
  });
});
