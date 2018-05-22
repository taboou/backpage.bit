/*******************************************************************************
 *
 * Initialize districts object
 *
 * Districts will initially be set to ALL run on the Ropsten (testnet)
 * Taboo Db contract located at 0xACE89580B29fDa7954BcCEf3fde52bb685Ff3ac5
 */
const districts = {}

// US | Alabama (AL)
districts['us-al-auburn']     = { name: 'Auburn',     manager: '0x64991997308EE37F299fFB02509Ea1027Ae2Ce53' }
districts['us-al-birmingham'] = { name: 'Birmingham', manager: '0x55178d57eec0476b9A6cBbfeB1E80e082dA2fCEa' }

// US | Alaska (AK)
districts['us-ak-anchorage'] = { name: 'Anchorage', manager: '0xfD917817E00936d1fa62CFB09978141F02849ab9' }

// US | Arizona (AZ)
districts['us-az-phoenix'] = { name: 'Phoenix', manager: '0x3161130E0834ab833d36D91AB314624b00Ca2E5B' }

// US | Arkansas (AR)
districts['us-ar-little-rock'] = { name: 'Little Rock', manager: '0xd1dae31df76D3Aee4B17c5b296726dE436D26a29' }

// US | California (CA)
districts['us-ca-los-angeles'] = { name: 'Los Angeles', manager: '0x9F34CF486A4078f79fA97F2a499913aE7be7A4d3' }

// US | Florida (FL)
districts['us-fl-miami'] = { name: 'Miami', manager: '0x48Aaf85e8C754e6fDbF01878849285ac02b6DEC3' }

// US | Georgia (GA)
districts['us-ga-atlanta'] = { name: 'Atlanta', manager: '0x96b3816af6970D42C13bd74BD307743Ed8326A1a' }

// US | Illinois (IL)
districts['us-il-chicago'] = { name: 'Chicago', manager: '0x508C00Ff412841b845Cc07EB73Cf7e6BB095d310' }

// US | New York (NY)
districts['us-ny-bronx']     = { name: 'Bronx',     manager: '0xBF9438FfeaA029CE75B5aE620bbAdA0e84aE9130' }
districts['us-ny-brooklyn']  = { name: 'Brooklyn',  manager: '0x88433F5948505605aCeC2659F3b6Ec2f2eAF13eD' }
districts['us-ny-manhattan'] = { name: 'Manhattan', manager: '0x19dEab20C9358784045423bA7fDd0Ad59d650c96' }
districts['us-ny-queens']    = { name: 'Queens',    manager: '0xD7cBB037dD33b0CA53aF77d7704CA886082F2AD6' }

// US | North Jersey (NJ)
districts['us-nj-north-jersey'] = { name: 'North Jersey', manager: '0x6082af630980db904bcC67E1BC0c1feB31d510e1' }

export default districts
