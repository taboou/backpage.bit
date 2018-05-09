/**
 * Load Network Status
 *
 * @notify Load the user's blockchain account.
 *
 * @dev Uses the `Web3` library to communicate with the blockchain.
 *      Use http://web3js.readthedocs.io/en/1.0/index.html as a reference.
 */
export default async function() {
    console.info('Now loading the network status...')

    /* Initialize Web3 library. */
    const Web3 = require('web3')

    /* Initialize web3 object. */
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider)
    } else {
        // set the provider you want from Web3.providers
        var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'))
        // var web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'))
    }

    /* Request the last block number. */
    const lastBlockNum = await web3.eth.getBlockNumber()
    console.info('    -> Network Status: Last block was #', lastBlockNum)

    /* Update the store. */
    this.eth.lastBlockNum = lastBlockNum
}
