/**
 * @notice Posters must agree to the service disclaimer. At the moment
 *		   all that is required is a button click. However, content
 *         control in development & testing include:
 *             1. Phone number verification
 *             2. ID verification
 *             3. Other 3rd-party service verification
 */
export default function(email, password) {
console.log('Signing in with', email, password)

    /* Generate a new private key from the user's email and password. */
    const privateKey = this.web3.utils.soliditySha3(email, password)
console.log('privateKey', privateKey)

    /* Generate a new wallet based on entropy. */
    const account = this.web3.eth.accounts.privateKeyToAccount(privateKey)
// console.log('account', account)

    /* Retrieve the available accounts. */
    // const { accounts } = this.eth

// console.log('this.eth.accounts[0]', this.eth.accounts[0])
// console.log('this.eth.accounts[0] == null', this.eth.accounts[0] == null);
    /* Update the store. */
    if (this.eth.accounts[0] == null)
        this.eth.accounts[0] = account
    else
        this.eth.accounts.push(account)

console.log('this.eth.accounts', this.eth.accounts)

var bitcoin = require('bitcoinjs-lib')
var bigi    = require('bigi')
// var hash = bitcoin.crypto.sha256(Buffer.from('correct horse battery staple'))
var btcHash = bitcoin.crypto.sha256(privateKey)
    var d = bigi.fromBuffer(btcHash)

    var keyPair = new bitcoin.ECPair(d)
    var btcAddress = keyPair.getAddress()
console.log('Bitcoin address', btcAddress)

if (this.btc.accounts[0] == null)
    this.btc.accounts[0] = { address : btcAddress}
else
    this.btc.accounts.push({ address : btcAddress})

console.log('this.btc.accounts', this.btc.accounts)
}
