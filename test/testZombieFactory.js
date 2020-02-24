//import truffle assertions
const truffleAssert = require('truffle-assertions')

// import the contract artifact
const ZombieFactory = artifacts.require('.ZombieFactory.sol')

// test starts here
contract('ZombieFactory', function (accounts) {
  // predefine the contract instance
  let ZombieFactoryInstance

  // before each test, create a new contract instance
  beforeEach(async function () {
    ZombieFactoryInstance = await ZombieFactory.new()
  })

    // first test: define what it should do in the string

  })
})