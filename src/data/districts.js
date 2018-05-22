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

// US | Colorado (CO)
districts['us-co-denver'] = { name: 'Denver', manager: '0xaFd17E7f0296db152E5Bbc800120ed6eCc1D62C2' }

// US | Connecticut (CT)
districts['us-ct-hartford'] = { name: 'Hartford', manager: '0x9FB54e00a1fe2dF35F685F46C9C78B7cFcc9c5CB' }

// US | Delaware (DE)

// US | District of Columbia (DC)
districts['us-dc'] = { name: 'Washington D.C.', manager: '0x88129c616a7fb56CE879D74Ee2E23EF1d4C6d1f8' }

// US | Florida (FL)
districts['us-fl-miami'] = { name: 'Miami', manager: '0x48Aaf85e8C754e6fDbF01878849285ac02b6DEC3' }

// US | Georgia (GA)
districts['us-ga-atlanta'] = { name: 'Atlanta', manager: '0x96b3816af6970D42C13bd74BD307743Ed8326A1a' }

// US | Illinois (IL)
districts['us-il-chicago'] = { name: 'Chicago', manager: '0x508C00Ff412841b845Cc07EB73Cf7e6BB095d310' }

// US | Indiana (IN)
districts['us-in-indianapolis'] = { name: 'Indianapolis', manager: '0x219a0A0250F8Da2CcD9AF34B952Ba92c2b12CD81' }

// US | Maryland (MD)
districts['us-md-baltimore'] = { name: 'Baltimore', manager: '0xAa8e3FaA51a93b563779B7160F325f5a53cBf5DC' }

// US | Massachusetts (MA)
districts['us-ma-boston'] = { name: 'Boston', manager: '0x3D4414aD072321172562aFD8bda990AE5FBfDd67' }

// US | Nevada (NV)
districts['us-nv-las-vegas'] = { name: 'Las Vegas', manager: '0x40f98A26e55DdEC039862252Ed53B5E710Ac75e5' }

// US | North Jersey (NJ)
districts['us-nj-north-jersey'] = { name: 'North Jersey', manager: '0x6082af630980db904bcC67E1BC0c1feB31d510e1' }

// US | New York (NY)
districts['us-ny-bronx']     = { name: 'Bronx',     manager: '0xBF9438FfeaA029CE75B5aE620bbAdA0e84aE9130' }
districts['us-ny-brooklyn']  = { name: 'Brooklyn',  manager: '0x88433F5948505605aCeC2659F3b6Ec2f2eAF13eD' }
districts['us-ny-manhattan'] = { name: 'Manhattan', manager: '0x19dEab20C9358784045423bA7fDd0Ad59d650c96' }
districts['us-ny-queens']    = { name: 'Queens',    manager: '0xD7cBB037dD33b0CA53aF77d7704CA886082F2AD6' }

// US | Pennsylvania (PA)
districts['us-pa-philadelphia'] = { name: 'Philadelphia', manager: '0x6B4B8fB6F00E5A2d435472EF32601369F1137e0d' }

// US | Texas (TX)
districts['us-tx-austin'] = { name: 'Austin', manager: '0xd01C2a47ceEb389cc08580e34c26a7d600B50B60' }

// CA | British Columbia (BC)
districts['ca-bc-vancouver'] = { name: 'Vancouver', manager: '0xF6bc0e1FaD17298DE52C2afEDb10fAc8C3541D15' }

// CA | Ontario (ON)
districts['ca-on-toronto'] = { name: 'Toronto', manager: '0x9035c0b30775b3DE338eAE0eB3a7EdCee1651b45' }

// EU | France (FR)
districts['eu-fr-paris'] = { name: 'Paris', manager: '0x7cbd5131e74D46C4ef514d9BFf7d46883271F083' }

// EU | Netherlands (NL)
districts['eu-nl-amsterdam'] = { name: 'Amsterdam', manager: '0xEAEbA73F21d7A4e4d76c458A44B8108af70af119' }

// EU | United Kingdom (UK)
districts['eu-uk-london'] = { name: 'London', manager: '0xDDb0e4FDEB77347246507038F6bA3B65F5E3a4d2' }

// Asia | China (CN)
districts['asia-cn-beijing'] = { name: 'Beijing', manager: '0xC83912Fccd25ab96dA8fb9029fD2DC988b76Fc8f' }

// Asia | Hong Kong (HK)
districts['asia-hk'] = { name: 'Hong Kong', manager: '0x1332291f083EAfAc21791BB81856c7bbf7ecAb3E' }

// Asia | India (IN)
districts['asia-in-mumbai'] = { name: 'Mumbai', manager: '0x9845B74907f7f3DA848D9D4E50c8ED872522B139' }

// Asia | Japan (JP)
districts['asia-jp-tokyo'] = { name: 'Tokyo', manager: '0x8CE6DFFeea505C83120A387e5db9475F9c9Cf8D6' }

// South Korea (KR)
districts['asia-kr-seoul'] = { name: 'Seoul', manager: '0xEe0ba7c60dE31Ab26ab4CF859BCD56e63fB24018' }

// Macau (MO)
districts['asia-mo'] = { name: 'Macau', manager: '0xa15EE69fD1c089D8bD3382d9B69c911A21FF8797' }

// Philippines (PH)
districts['asia-ph-manila'] = { name: 'Manila', manager: '0x959e93964d63628b40ec80B2F122ec2318CAc3A1' }

// Singapore (SG)
districts['asia-sg'] = { name: 'Singapore', manager: '0x29704a9B6387a95bD6A8c5d125d7aed0eD14a552' }

// Thailand (TH)
districts['asia-th-bangkok'] = { name: 'Bangkok', manager: '0x37B4D6D5c6C9680b9596afC3A58964e0Baa92581' }

// Australia (AU)
districts['oceania-au-sydney'] = { name: 'Sydney', manager: '0x189307e85E76D1C5573b1A72Eda494288D1a8440' }

// Brazil (BR)
districts['latin-br-sao-paulo'] = { name: 'São Paulo', manager: '0xC14456eb6d0251bB846B61321a7867F7eA9C679C' }

// South Africa (SA)
districts['africa-sa-johannesburg'] = { name: 'Johannesburg', manager: '0xF4D4332d55c45A4E5eB7df45b1894DAc81aAc904' }

export default districts
