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
console.log('account', account)

    /* Retrieve the available accounts. */
    const { accounts } = this.eth

    /* Update the store. */
    this.eth.accounts[0] = account.address
    // this.eth.accounts.push(account.address)
    // accounts.push(account.address)

console.log('this.eth.accounts', this.eth.accounts);
}
