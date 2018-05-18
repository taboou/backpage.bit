/*******************************************************************************
 *
 * Initialize districts object
 *
 * Districts will initially be set to ALL run on the Ropsten (testnet)
 * Taboo Db contract located at 0xACE89580B29fDa7954BcCEf3fde52bb685Ff3ac5
 */
const districts = {}

// US | New York
districts['us-ny-manhattan'] = { name: 'Manhattan', manager: '0x19dEab20C9358784045423bA7fDd0Ad59d650c96' }
districts['us-ny-queens']    = { name: 'Queens', manager: '0xD7cBB037dD33b0CA53aF77d7704CA886082F2AD6' }

// US | North Jersey
districts['us-nj-north-jersey'] = { name: 'North Jersey', manager: '0x6082af630980db904bcC67E1BC0c1feB31d510e1' }

export default districts
