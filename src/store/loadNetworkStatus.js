/**
 * Load Network Status
 *
 * @notify Load the user's blockchain account.
 *
 * @dev Uses the `Web3` library to communicate with the blockchain.
 *      Use http://web3js.readthedocs.io/en/1.0/index.html as a reference.
 */
export function loadNetworkStatus() {
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

console.log('loading network status')
    /* Load the last block number. */
    web3.eth.getBlockNumber()
        .then(blockNum => {
console.log('found last block', blockNum)
            this.eth.lastBlockNum = blockNum
        })
}
