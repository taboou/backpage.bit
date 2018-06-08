export default function (_post) {
    /* Initialize moment module. */
    const moment = require('moment')

    /* Retrieve private key from active account. */
    const privateKey = this.eth.accounts[0].privateKey
// console.log('privateKey', privateKey)

    const wallet = new this.ethers.Wallet(privateKey)
// console.log('wallet', wallet)

    /* Generate timestamp (in milliseconds). */
    const nonce = moment().valueOf()
// console.log('nonce', nonce)

    /* Create message for signing. */
    const msgForSigning = 'auth.for.taboou.api.v1.' + nonce
// console.log('msg to be signed ->', msgForSigning)

    /* Create signed message. */
    const signed = wallet.signMessage(msgForSigning)
// console.log('signed', signed)

    /* Initilize authorization signature. */
    const auth = `TABOO-TOKEN Signature=${signed}, Nonce=${nonce}`

    /* Initialize superagent request. */
    const request = require('superagent')

    /* Initialize api endpoint. */
    const endpoint = 'https://api.taboou.com/v1/posts/'

    /* Upload base64 data to imgur (anonymously). */
    request
        .post(endpoint)
        .send(_post)
        .set('Authorization', auth)
        .set('accept', 'json')
        .end((err, res) => {
            if (err) console.error(err)

// console.log('res.body', res.body)
            if (res.body && res.body.errorMsg) {
                /* Retrieve the error message. */
                const errorMsg = res.body.errorMsg

                /* Update the error message. */
                this.errorMsg = errorMsg

                /* Alert the user of the error. */
                $('#modalRateLimit').modal()
            } else {
                /* Retrieve the active district url. */
                const target = `#/district/${this.activeDistrict}`

                /* Redirect to district page. */
                document.location = target
            }
        })
}
