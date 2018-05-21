/*******************************************************************************
 *
 * Initialize districts object
 *
 * Districts will initially be set to ALL run on the Ropsten (testnet)
 * Taboo Db contract located at 0xACE89580B29fDa7954BcCEf3fde52bb685Ff3ac5
 */
const districts = {}

// US | California
districts['us-ca-los-angeles'] = { name: 'Los Angeles', manager: '0x9F34CF486A4078f79fA97F2a499913aE7be7A4d3' }

// US | Florida
districts['us-fl-miami'] = { name: 'Miami', manager: '0x48Aaf85e8C754e6fDbF01878849285ac02b6DEC3' }

// US | Georgia
districts['us-ga-atlanta'] = { name: 'Atlanta', manager: '0x96b3816af6970D42C13bd74BD307743Ed8326A1a' }

// US | New York
districts['us-ny-bronx']     = { name: 'Bronx',     manager: '0xBF9438FfeaA029CE75B5aE620bbAdA0e84aE9130' }
districts['us-ny-brooklyn']  = { name: 'Brooklyn',  manager: '0x88433F5948505605aCeC2659F3b6Ec2f2eAF13eD' }
districts['us-ny-manhattan'] = { name: 'Manhattan', manager: '0x19dEab20C9358784045423bA7fDd0Ad59d650c96' }
districts['us-ny-queens']    = { name: 'Queens',    manager: '0xD7cBB037dD33b0CA53aF77d7704CA886082F2AD6' }

// US | North Jersey
districts['us-nj-north-jersey'] = { name: 'North Jersey', manager: '0x6082af630980db904bcC67E1BC0c1feB31d510e1' }

export default districts
