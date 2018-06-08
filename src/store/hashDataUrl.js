/* Hash a data url to solidity sha3. */
export default function (dataUrl) {
    /* Extract base64 data. */
    const base64Data = dataUrl.split(',')[1]
// console.log('base64Data', base64Data)

    /* Decode the data into binary. */
    const binData = window.atob(base64Data)
// console.log('binData', binData)

    /* Hash the binary data. */
    const hashedData = this.web3.utils.soliditySha3(binData)
// console.log('hashedData', hashedData)

    /* Return the data. */
    return hashedData
}
