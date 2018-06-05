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
districts['us-al-dothan'] = { name: 'Dothan', manager: '0x539fE47cfE69416C53515508DFef84e040b9b652' }
districts['us-al-montgomery'] = { name: 'Montgomery', manager: '0x8b1bA2333e7aCA67C25F0D2116F47F3B42308973' }

// US | Alaska (AK)
districts['us-ak-anchorage'] = { name: 'Anchorage', manager: '0xfD917817E00936d1fa62CFB09978141F02849ab9' }

// US | Arizona (AZ)
districts['us-az-phoenix'] = { name: 'Phoenix', manager: '0x3161130E0834ab833d36D91AB314624b00Ca2E5B' }

// US | Arkansas (AR)
districts['us-ar-fayetteville'] = { name: 'Fayetteville', manager: '0x749696Fc45f373912c5CAEdCcf746bdbeE4ec618' }
districts['us-ar-little-rock'] = { name: 'Little Rock', manager: '0xd1dae31df76D3Aee4B17c5b296726dE436D26a29' }

// US | California (CA) ✓
districts['us-ca-bakersfield']         = { name: 'Bakersfield',         manager: '0x9E1f309E70dD1EC122c7873a545Bdc7ab58E44FB' }
districts['us-ca-chico']               = { name: 'Chico',               manager: '0x83B7535442f916D6c949C1abC4286781DAb8d329' }
districts['us-ca-fresno']              = { name: 'Fresno',              manager: '0x29B9c6f11494E58Ed7F1B2eEd8Dca5957b2c4fFd' }
districts['us-ca-humboldt-county']     = { name: 'Humboldt County',     manager: '0xCb26DD138b35171189bba1DA2B81e6Fd470F9CB0' }
districts['us-ca-imperial-county']     = { name: 'Imperial County',     manager: '0x9E9c693E8193D5F7827D4cb903da9318a4D8E0c3' }
districts['us-ca-inland-empire']       = { name: 'Inland Empire',       manager: '0x537fecee6D9aa8D93fEB8f19d15B44D96fF4EA24' }
districts['us-ca-long-beach']          = { name: 'Long Beach',          manager: '0x26643e0598dcB50B700a9cB9D27602fe3836730B' }
districts['us-ca-los-angeles']         = { name: 'Los Angeles',         manager: '0x9F34CF486A4078f79fA97F2a499913aE7be7A4d3' }
districts['us-ca-mendocino']           = { name: 'Mendocino',           manager: '0x09b091bBFf8D543D71f2fBfe8b8Ad1408ecc7CE5' }
districts['us-ca-merced']              = { name: 'Merced',              manager: '0x72bd5ca88138a8113DdAF760BFa0D7e0a138c35d' }
districts['us-ca-modesto']             = { name: 'Modesto',             manager: '0xbc1c95189c4A34550aaEd8B36D466C8ff7B45d9a' }
districts['us-ca-monterey']            = { name: 'Monterey',            manager: '0xb1a9A59fbda12F3Eec24a7cf4d9cE21f47cb0711' }
districts['us-ca-north-bay']           = { name: 'North Bay',           manager: '0x64723144d6cfFa40e0101a9FBF604a910fce5208' }
districts['us-ca-oakland-east-bay']    = { name: 'Oakland/East Bay',    manager: '0xee9A242E79a707dd607FAaCc5B907A87bFf2684a' }
districts['us-ca-orange-county']       = { name: 'Orange County',       manager: '0x9ff4DfF9064031f26812b3b886D6736258Db581E' }
districts['us-ca-palm-springs']        = { name: 'Palm Springs',        manager: '0xf32641510c1eF71cd932eb55A0466163f78C1D39' }
districts['us-ca-palmdale-lancaster']  = { name: 'Palmdale/lancaster',  manager: '0x557e5a0776704AB67eFfDd43B6005cD58d22C69d' }
districts['us-ca-redding']             = { name: 'Redding',             manager: '0x204873309534FFDd5153E38d8FdD3013EF3e66cD' }
districts['us-ca-sacramento']          = { name: 'Sacramento',          manager: '0xca52B1A8722432E968e4a0d6EDCf4FBA1708933D' }
districts['us-ca-san-diego']           = { name: 'San Diego',           manager: '0x3E8126ce271874bdC43173bb08f5754a8055A173' }
districts['us-ca-san-fernando-valley'] = { name: 'San Fernando Valley', manager: '0xDc56EEe9bA1634f6926Ae5FEDdFe6d51Cf81Caf2' }
districts['us-ca-san-francisco']       = { name: 'San Francisco',       manager: '0xf3E27daE0Cf444522af42941c01B79827d4c4dF3' }
districts['us-ca-san-gabriel-valley']  = { name: 'San Gabriel Valley',  manager: '0x5A3AB63a18D2aE1156BeFe28d2e43fF8c53EA3f1' }
districts['us-ca-san-jose']            = { name: 'San Jose',            manager: '0x7a2A7DA9cb17f17B52fE1F7349fE2635c3f4b93A' }
districts['us-ca-san-luis-obispo']     = { name: 'San Luis Obispo',     manager: '0x6FBAee245061698C84782aA334A4a475729e73cD' }
districts['us-ca-san-mateo']           = { name: 'San Mateo',           manager: '0x89c3504c4Ab883a2568A9aF078e6B8dC9297bb65' }
districts['us-ca-santa-barbara']       = { name: 'Santa Barbara',       manager: '0xaD01b80CC0f328139C683e06f128A641313f36F5' }
districts['us-ca-santa-cruz']          = { name: 'Santa Cruz',          manager: '0x7295bdcB2b8215B84d2303C9aD02c122b9887bc4' }
districts['us-ca-santa-maria']         = { name: 'Santa Maria',         manager: '0xB29E77d52E7d18902F146f0C08C8A95cEa462551' }
districts['us-ca-siskiyou']            = { name: 'Siskiyou',            manager: '0x8E1794b0EB930dbBbd0904E2257F9963D0c2d7d5' }
districts['us-ca-stockton']            = { name: 'Stockton',            manager: '0xd53e5B5711c3C275b002d9ED978a820b6148F8Da' }
districts['us-ca-susanville']          = { name: 'Susanville',          manager: '0x00FfEb2aFE60e1C7AaDc1e526891225Ab2c502a0' }
districts['us-ca-ventura']             = { name: 'Ventura',             manager: '0x316629cb00D0917F496C4ec8443D4a8012Ab8484' }
districts['us-ca-visalia']             = { name: 'Visalia',             manager: '0x19c0086e3C49F99bA8A96ff5BF939A1C055B0FD5' }

// US | Colorado (CO)
districts['us-co-boulder'] = { name: 'Boulder', manager: '0xE8395564Dd30Fc5C932aa4A21F60d6b6f7159a9A' }
districts['us-co-denver'] = { name: 'Denver', manager: '0xaFd17E7f0296db152E5Bbc800120ed6eCc1D62C2' }

// US | Connecticut (CT) ✓
districts['us-ct-bridgeport']            = { name: 'Bridgeport',            manager: '0xe55fB09ABAF7BFcc3759eC562278587D2EE8dc33' }
districts['us-ct-eastern-connecticut']   = { name: 'Eastern Connecticut',   manager: '0xeAccd0E330Db72DAaa61A16349BF52A6295B97BE' }
districts['us-ct-hartford']              = { name: 'Hartford',              manager: '0x9FB54e00a1fe2dF35F685F46C9C78B7cFcc9c5CB' }
districts['us-ct-new-haven']             = { name: 'New Haven',             manager: '0xEcFbC634C6D4e8Cdf7e74398AbDfFd26a4853549' }
districts['us-ct-northwest-connecticut'] = { name: 'Northwest Connecticut', manager: '0x969ef174502b08e82aD714231311Ab251b781740' }
districts['us-ct-stamford']              = { name: 'Stamford',              manager: '0x5149017643baC928a8180Cf6a77c9Ba7411e6F10' }

// US | Delaware (DE)
districts['us-de-dover'] = { name: 'Dover', manager: '0xdF16B57813FF35E3D0a1B8Eb64e7e93105717B0F' }
districts['us-de-wilmington'] = { name: 'Wilmington', manager: '0x09E18d7A342Ec881580beAe5c2D3d5987E6dd50c' }

// US | District of Columbia (DC)
districts['us-dc-northern-virginia'] = { name: 'Northern Virginia', manager: '0xdbf20550D0B06Cd8050dF01acab55d6E7D6aA94f' }
districts['us-dc-southern-maryland'] = { name: 'Southern Maryland', manager: '0xa4a53A391dff73BB1340f476416963d7707317EE' }
districts['us-dc'] = { name: 'Washington D.C.', manager: '0x88129c616a7fb56CE879D74Ee2E23EF1d4C6d1f8' }

// US | Florida (FL)
districts['us-fl-daytona'] = { name: 'Daytona', manager: '0x5433Ead50Bc8a22f15d596d2aC6A7B314aDC1ec4' }
districts['us-fl-fort-lauderdale'] = { name: 'Fort Lauderdale', manager: '0x4CFCAbD819B72B94449D9120eab6b4E23a01621c' }
districts['us-fl-gainesville'] = { name: 'Gainesville', manager: '0x984CAeAf9A0B3A03B7FD8500e7779A33cee73907' }
districts['us-fl-jacksonville'] = { name: 'Jacksonville', manager: '0xf38cd8De26132432EC61ACF524Ae58507333bC6C' }
districts['us-fl-miami'] = { name: 'Miami', manager: '0x48Aaf85e8C754e6fDbF01878849285ac02b6DEC3' }
districts['us-fl-orlando'] = { name: 'Orlando', manager: '0xc8A1a680B204C634D9Bfe38e12534F857e3D9d6E' }
districts['us-fl-tallahassee'] = { name: 'Tallahassee', manager: '0xf61760360Fe770A3035BC774b9881EA2EAb5DdBF' }
districts['us-fl-tampa'] = { name: 'Tampa', manager: '0xbD5F0d88484DC800e95fDB49930b0dc24C1bD200' }

// US | Georgia (GA) ✓
districts['us-ga-albany']            = { name: 'Albany',            manager: '0x625556f53E1D3dab8dA51d41AeE212F323972350' }
districts['us-ga-athens']            = { name: 'Athens',            manager: '0x6e478c2FdaD785B8233fBE2919F0e7E2F5E8cE89' }
districts['us-ga-atlanta']           = { name: 'Atlanta',           manager: '0x96b3816af6970D42C13bd74BD307743Ed8326A1a' }
districts['us-ga-augusta']           = { name: 'Augusta',           manager: '0x47A00F78b608D31518392b49C9c1Ab524f2DeDcB' }
districts['us-ga-brunswick']         = { name: 'Brunswick',         manager: '0x2626a2c5111b52dbBf3340555EFd01F7A65C799c' }
districts['us-ga-columbus']          = { name: 'Columbus',          manager: '0x8D9E49f56ACe139017E2bA88BBA72FF4d34caB66' }
districts['us-ga-macon']             = { name: 'Macon',             manager: '0x03dF3ae0325BD4FB856F0464f4688A1Dd2f67ea3' }
districts['us-ga-northwest-georgia'] = { name: 'Northwest Georgia', manager: '0x86040c92224Ae8C465dC6cF11d1564dB95f5786c' }
districts['us-ga-savannah']          = { name: 'Savannah',          manager: '0x3c83e461e9b88A256b2ec7d6580a8F1d3d1480fD' }
districts['us-ga-statesboro']        = { name: 'Statesboro',        manager: '0xE9A83e17e9cc68319f6E72aD70a184C67FfA62D0' }
districts['us-ga-valdosta']          = { name: 'Valdosta',          manager: '0xEd25a52D5768519A50F03f1996E7239b90194C1A' }

// US | Hawaii (HI)
districts['us-id-honolulu'] = { name: 'Honolulu', manager: '0x67DafF4DF11c6a6036b3FE90FcF989ffFC57299f' }

// US | Idaho (ID)
districts['us-id-boise'] = { name: 'Boise', manager: '0x9f99Cc25ceC2C50Bc174A2c212F745BB6fE4bC23' }

// US | Illinois (IL)
districts['us-il-chicago'] = { name: 'Chicago', manager: '0x508C00Ff412841b845Cc07EB73Cf7e6BB095d310' }

// US | Indiana (IN)
districts['us-in-ft-wayne'] = { name: 'Ft Wayne', manager: '0xB2AE5d6A9d9e5e6Ed58472694165bCEA80c6db66' }
districts['us-in-indianapolis'] = { name: 'Indianapolis', manager: '0x219a0A0250F8Da2CcD9AF34B952Ba92c2b12CD81' }

// US | Iowa (IA)
districts['us-ia-des-moines'] = { name: 'Des Moines', manager: '0x83B131747FDA48A41657c5a1Df04E04130F5108f' }

// US | Kansas (KS)
districts['us-ks-topeka'] = { name: 'Topeka', manager: '0xCae271040e7B81aEeeE39c4B3fdeec0710F12e8B' }
districts['us-ks-wichita'] = { name: 'Wichita', manager: '0xd44E6253Db66Ff6f2bA8A53773Ef7406BfAB9797' }

// US | Kentucky (KY)
districts['us-ky-louisville'] = { name: 'Louisville', manager: '0x586dD3e038586e47BEd9521137a65a664aEBdA87' }

// US | Louisiana (LA)
districts['us-la-new-orleans'] = { name: 'New Orleans', manager: '0xf29bA32c112f385f496Ed8D99C2755B8C6217476' }

// US | Maine (ME)
districts['us-me-portland'] = { name: 'Portland', manager: '0x6ae25991c53baf40bb3b8e22e16496f334926afd' }

// US | Maryland (MD)
districts['us-md-baltimore'] = { name: 'Baltimore', manager: '0xAa8e3FaA51a93b563779B7160F325f5a53cBf5DC' }

// US | Massachusetts (MA)
districts['us-ma-boston'] = { name: 'Boston', manager: '0x3D4414aD072321172562aFD8bda990AE5FBfDd67' }

// US | Michigan (MI)
districts['us-mi-detroit'] = { name: 'Detroit', manager: '0x5Dc7A1C3C56fed36a39Bbae226529b21cbBA1c52' }

// US | Minnesota (MN)
districts['us-mn-minneapolis'] = { name: 'Minneapolis / St. Paul', manager: '0xBc1Ea44F110821741c54713FcE96A8a77fe0F443' }

// US | Mississippi (MS)
districts['us-ms-jackson'] = { name: 'Jackson', manager: '0x6de031E117D2D26Fc5dFD9e8ac460dB766b0cB1A' }

// US | Missouri (MO)
districts['us-mo-kansas-city'] = { name: 'Kansas City', manager: '0xd28717a93A9492f4592b936CFF548C5597B63644' }

// US | Montana (MT)
districts['us-mt-billings'] = { name: 'Billings', manager: '0xcce095e89eC0A24f996f0a2b6b2BB1AbA5b21af1' }

// US | Nebraska (NE)
districts['us-ne-omaha'] = { name: 'Omaha', manager: '0x8c6D87e1b6a28BAa17E2c48C9e1E3aFdcAA69367' }

// US | Nevada (NV)
districts['us-nv-las-vegas'] = { name: 'Las Vegas', manager: '0x40f98A26e55DdEC039862252Ed53B5E710Ac75e5' }

// US | New Hampshire (NH)
districts['us-nh-manchester'] = { name: 'Manchester', manager: '0xbee4e0a52717a779f78fbcb4ac234283b3403fd3' }

// US | North Jersey (NJ) ✓
districts['us-nj-atlantic-city']  = { name: 'Atlantic City',  manager: '0x657C162116e0907A843d963961A4280Cf76C464B' }
districts['us-nj-central-jersey'] = { name: 'Central Jersey', manager: '0xBfC7E049bc770f29a00C39757754c6BBE4CE5b49' }
districts['us-nj-jersey-shore']   = { name: 'Jersey Shore',   manager: '0xe894Df326f03a828532d76DCd8FAfC1d0FBaEcFE' }
districts['us-nj-north-jersey']   = { name: 'North Jersey',   manager: '0x6082af630980db904bcC67E1BC0c1feB31d510e1' }
districts['us-nj-south-jersey']   = { name: 'South Jersey',   manager: '0xE2b4643a47c0aec07e5de1e6c31869B845f2a7fC' }

// US | New Mexico (NM)
districts['us-nm-albuquerque'] = { name: 'Albuquerque', manager: '0xc413B604383ef221f1dc12C7ff7313Ff51a7f170' }

// US | New York (NY) ✓
districts['us-ny-albany']        = { name: 'Albany',        manager: '0xa5716DeCFa5ded6415DC0E374b2fE1B0b1731961' }
districts['us-ny-binghamton']    = { name: 'Binghamton',    manager: '0xbC0130E4E4bd69C77e2A61333757d1C5e7F785a7' }
districts['us-ny-bronx']         = { name: 'Bronx',         manager: '0xBF9438FfeaA029CE75B5aE620bbAdA0e84aE9130' }
districts['us-ny-brooklyn']      = { name: 'Brooklyn',      manager: '0x88433F5948505605aCeC2659F3b6Ec2f2eAF13eD' }
districts['us-ny-buffalo']       = { name: 'Buffalo',       manager: '0xBe808E06aFD7014cF39c5E5E4af68462c045055F' }
districts['us-ny-catskills']     = { name: 'Catskills',     manager: '0xc4622B7CaD117b68Af994861623a7d234A961784' }
districts['us-ny-chautauqua']    = { name: 'Chautauqua',    manager: '0x6541Df8f5801Df45Dc87C6737bEe55Ed325f78A3' }
districts['us-ny-elmira']        = { name: 'Elmira',        manager: '0x4C29954b0D62e77414faed1D119b2A3F943F7501' }
districts['us-ny-fairfield']     = { name: 'Fairfield',     manager: '0x74B618B04595A19192C40b8A53D544E8d2979469' }
districts['us-ny-finger-lakes']  = { name: 'Finger Lakes',  manager: '0x9D787684aA990Ef8cda3161e3B10412FdEbaB72A' }
districts['us-ny-glens-falls']   = { name: 'Glens Falls',   manager: '0x162F2C20cf64a28829E99109D78fAd89F7c6C262' }
districts['us-ny-hudson-valley'] = { name: 'Hudson Valley', manager: '0x5Eb2678DD04F0e8Bb4d0F690dDC8fF1A3e3BD99c' }
districts['us-ny-ithaca']        = { name: 'Ithaca',        manager: '0xF428CfecAE94740cAd314F51FB68A5846d2e20C7' }
districts['us-ny-long-island']   = { name: 'Long Island',   manager: '0x5449443C3E1a049aCcb9D072C36E072c441d70aD' }
districts['us-ny-manhattan']     = { name: 'Manhattan',     manager: '0x19dEab20C9358784045423bA7fDd0Ad59d650c96' }
districts['us-ny-oneonta']       = { name: 'Oneonta',       manager: '0x0916B8e80d12a8D461DD4FB13d1c670fa9513EBd' }
districts['us-ny-plattsburgh']   = { name: 'Plattsburgh',   manager: '0xfc81D72049372822064C36A1e2d3F072415fFc16' }
districts['us-ny-potsdam']       = { name: 'Potsdam',       manager: '0x344b9B232B6cC099354cdC23C2CB7D9abbaBB10a' }
districts['us-ny-queens']        = { name: 'Queens',        manager: '0xD7cBB037dD33b0CA53aF77d7704CA886082F2AD6' }
districts['us-ny-rochester']     = { name: 'Rochester',     manager: '0x59e752f998A59D6Bc0A976c582C68354db84cd32' }
districts['us-ny-staten-island'] = { name: 'Staten Island', manager: '0x4279aF30883787DB66ce7950403C7b4A6e18C6E9' }
districts['us-ny-syracuse']      = { name: 'Syracuse',      manager: '0x59F63EEDb0FD66fd2DdF13D516490e9A649E8c5D' }
districts['us-ny-twin-tiers']    = { name: 'Twin Tiers',    manager: '0xaC550eb35E067D4b91dF0C68862B273d33869b55' }
districts['us-ny-utica']         = { name: 'Utica',         manager: '0x5216CEC5039faf77825834f21Fe941a82E0D862d' }
districts['us-ny-watertown']     = { name: 'Watertown',     manager: '0x5E14e1DE2B354757312c3b8FDCEE43b8aBbd56e7' }
districts['us-ny-westchester']   = { name: 'Westchester',   manager: '0x3E50cCc8ed4235E69Cb59014da0452B173e8e614' }

// US | North Carolina (NC)
districts['us-nc-charlotte'] = { name: 'Charlotte', manager: '0x647d2D92b3CBD94c170Cd59e01A7E7c115e1aEA5' }

// US | North Dakota (ND)
districts['us-nd-bismarck'] = { name: 'Bismarck', manager: '0xfd03D874740E2D75F4381E89fe041DCd54A29a3C' }

// US | Ohio (OH)
districts['us-oh-cincinnati'] = { name: 'Cincinnati', manager: '0x4d0Ac4A6f1aa1f86C6f8A3863b2FF70a9d904d52' }
districts['us-oh-cleveland'] = { name: 'Cleveland', manager: '0xbA20B696185327b1b1E339fE90e7EbcBeAcC225e' }

// US | Oklahoma (OK)
districts['us-ok-oklahoma-city'] = { name: 'Oklahoma City', manager: '0xB0808508EDF6f5c3B62dd5070DAeab9756bc656e' }
districts['us-ok-tulsa'] = { name: 'Tulsa', manager: '0xc9e0105938538be36704Ce88782416e695494F9A' }

// US | Oregon (OR)
districts['us-or-portland'] = { name: 'Portland', manager: '0x7c7029e9aB82E3c744eFEF7E511153B881419c4D' }

// US | Pennsylvania (PA)
districts['us-pa-philadelphia'] = { name: 'Philadelphia', manager: '0x6B4B8fB6F00E5A2d435472EF32601369F1137e0d' }

// US | Rhode Island (RI)
districts['us-ri-providence'] = { name: 'Providence', manager: '0x728675c27E2f7B98FEadE1982d2ac9af67576161' }

// US | South Carolina (SC)
districts['us-sc-charleston'] = { name: 'Charleston', manager: '0x6dc016864Ff3B43e32a4928E87Ff333f9Ec7B11A' }
districts['us-sc-columbia'] = { name: 'Columbia', manager: '0x0b21740E07B30247D9E36803f52e4211444D1e5D' }
districts['us-sc-greenville'] = { name: 'Greenville', manager: '0x19e79B08fEf9D073E0Ed5feb03aB1166A4fdb463' }

// US | South Dakota (SD)
districts['us-sd-sioux-falls'] = { name: 'Sioux Falls', manager: '0xD3f484370e42e8588ea8935872694b81142ED623' }

// US | Tennessee (TN)
districts['us-tn-memphis'] = { name: 'Memphis', manager: '0x29549bAE65646a6a90f9e920D7cfDA005185Acf0' }
districts['us-tn-nashville'] = { name: 'Nashville', manager: '0x2F962b3F6385a5b617FEE26be1Bdc95CB0ceDAC1' }

// US | Texas (TX)
districts['us-tx-austin'] = { name: 'Austin', manager: '0xd01C2a47ceEb389cc08580e34c26a7d600B50B60' }
districts['us-tx-dallas'] = { name: 'Dallas', manager: '0x85d85d542C1eCE02A15b9bbFAc0eB3A9490e2460' }
districts['us-tx-el-paso'] = { name: 'El Paso', manager: '0xCFF9ed00924927ef4589298004931E270A130Ad3' }
districts['us-tx-houston'] = { name: 'Houston', manager: '0x4830a36b75caCb5e6E7c6876b0b2018402E9a44c' }
districts['us-tx-killeen'] = { name: 'Killeen', manager: '0x2a0aE3B332bc9b6A7B40Ed38051299B26b931321' }
districts['us-tx-san-antonio'] = { name: 'San Antonio', manager: '0xfa0ec0Bd093f703aa5c4aC6eCf10a8205a20A2e9' }

// US | Utah (UT)
districts['us-vt-salt-lake-city'] = { name: 'Salt Lake City', manager: '0x6808Db0317D0A20017d16B9C23a1419656DE1aCF' }

// US | Vermont (VT)
districts['us-vt-burlington'] = { name: 'Burlington', manager: '0xC03e3031359DFb1B5a5F2e1e9AE65feb0e114AF4' }

// US | Virginia (VA)
districts['us-va-chesapeake'] = { name: 'Chesapeake', manager: '0x5d7184DD1E1053c0D67D5077a79ed5B3Ec259BC3' }
districts['us-va-richmond'] = { name: 'Richmond', manager: '0x3B30f4DC832a5175116efD75f4e9C9c0CFaBE33f' }
districts['us-va-virginia-beach'] = { name: 'Virginia Beach', manager: '0x8f6e87402831b6C2eDAC7dF7c0516B9769898659' }

// US | Washington (WA)
districts['us-wa-seattle'] = { name: 'Seattle', manager: '0x192156231cDb6d03c3BacBBA3CB4823Dea4A0623' }

// US | West Virginia (WV)
districts['us-wv-charleston'] = { name: 'Charleston', manager: '0x3ce3Fe736738550dDD477BfccF27774E801A2399' }

// US | Wisconsin (WI)
districts['us-wi-milwaukee'] = { name: 'Milwaukee', manager: '0xe1213e7782bd8acd15c74591ecebd239c479f0bf' }

// US | Wyoming (WY)
districts['us-wy-cheyenne'] = { name: 'Cheyenne', manager: '0x4778Ceab9C7F02eeff25b711877291564D412C5e' }

// CA | Alberta (AB)
districts['ca-ab-calgary'] = { name: 'Calgary', manager: '0x76deed4c9efbe6021c50a55b888de0c913593244' }

// CA | British Columbia (BC)
districts['ca-bc-vancouver'] = { name: 'Vancouver', manager: '0xF6bc0e1FaD17298DE52C2afEDb10fAc8C3541D15' }

// CA | Manitoba (MB)
districts['ca-mb-winnipeg'] = { name: 'Winnipeg', manager: '0xf791d4adffa15f96d18a00e0f2b73d8f6d4d7512' }

// CA | Ontario (ON)
districts['ca-on-toronto'] = { name: 'Toronto', manager: '0x9035c0b30775b3DE338eAE0eB3a7EdCee1651b45' }

// CA | Quebec (QC)
districts['ca-qc-montreal'] = { name: 'Montreal', manager: '0x971988f65c59fb78f1312E9578AbF9385F3a686b' }

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

// Asia | South Korea (KR)
districts['asia-kr-seoul'] = { name: 'Seoul', manager: '0xEe0ba7c60dE31Ab26ab4CF859BCD56e63fB24018' }

// Asia | Macau (MO)
districts['asia-mo'] = { name: 'Macau', manager: '0xa15EE69fD1c089D8bD3382d9B69c911A21FF8797' }

// Asia | Philippines (PH)
districts['asia-ph-manila'] = { name: 'Manila', manager: '0x959e93964d63628b40ec80B2F122ec2318CAc3A1' }

// Asia | Singapore (SG)
districts['asia-sg'] = { name: 'Singapore', manager: '0x29704a9B6387a95bD6A8c5d125d7aed0eD14a552' }

// Asia | Thailand (TH)
districts['asia-th-bangkok'] = { name: 'Bangkok', manager: '0x37B4D6D5c6C9680b9596afC3A58964e0Baa92581' }

// Oceania | Australia (AU)
districts['oceania-au-sydney'] = { name: 'Sydney', manager: '0x189307e85E76D1C5573b1A72Eda494288D1a8440' }

// Latin | Brazil (BR)
districts['latin-br-sao-paulo'] = { name: 'São Paulo', manager: '0xC14456eb6d0251bB846B61321a7867F7eA9C679C' }

// African | South Africa (SA)
districts['africa-sa-johannesburg'] = { name: 'Johannesburg', manager: '0xF4D4332d55c45A4E5eB7df45b1894DAc81aAc904' }

export default districts
