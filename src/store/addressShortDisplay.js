export default function () {
    /* Retrieve the account. */
    const account = this.eth.accounts[0].address

    /* Validate anonymous (default) account. */
    if (account == '0xaCADc1e8515774C42615f3085e0C06283aFa7E72')
        return 'Anonymous Guest'
    else
        return account.slice(0, 6) + ' ... ' + account.slice(-4)
}
