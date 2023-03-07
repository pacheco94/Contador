const contador = artifacts.require("contador.sol");
const { expect } = require('chai');
/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("testContador", function (/* accounts */) {
 let value = 20;
 beforeEach(async function() {
  this.Contador = await contador.new();

 });
  it("should set the time", async function () {
    let time = (await this.Contador.setDurationGamen(20)).toString();
    expect(time,value,"Not its the time");
  });

  it("Should get deration game time.",async function() {
     let gettime = await this.Contador.getDuration();
     expect(gettime,value,"Is's not the value time.");
  });

  it("Should reset game time.",async function() {
    expect(await this.Contador.resetTime(),value,"Coud'nt reset time.");
  });

  it("Should show remaning time.", async function() {
    await this.Contador.remaningTime();
  });
});
