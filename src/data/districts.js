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
districts['us-ar-little-rock'] = { name: 'Little Rock', manager: '0xd1dae31df76D3Aee4B17c5b296726dE436D26a29' }

// US | California (CA)
districts['us-ca-inland-empire'] = { name: 'Inland Empire', manager: '0x537fecee6D9aa8D93fEB8f19d15B44D96fF4EA24' }
districts['us-ca-los-angeles'] = { name: 'Los Angeles', manager: '0x9F34CF486A4078f79fA97F2a499913aE7be7A4d3' }
districts['us-ca-san-diego'] = { name: 'San Diego', manager: '0x3E8126ce271874bdC43173bb08f5754a8055A173' }
districts['us-ca-san-francisco'] = { name: 'San Francisco', manager: '0xf3E27daE0Cf444522af42941c01B79827d4c4dF3' }

// US | Colorado (CO)
districts['us-co-boulder'] = { name: 'Boulder', manager: '0xE8395564Dd30Fc5C932aa4A21F60d6b6f7159a9A' }
districts['us-co-denver'] = { name: 'Denver', manager: '0xaFd17E7f0296db152E5Bbc800120ed6eCc1D62C2' }

// US | Connecticut (CT)
districts['us-ct-hartford'] = { name: 'Hartford', manager: '0x9FB54e00a1fe2dF35F685F46C9C78B7cFcc9c5CB' }

// US | Delaware (DE)
districts['us-de-wilmington'] = { name: 'Wilmington', manager: '0x09E18d7A342Ec881580beAe5c2D3d5987E6dd50c' }

// US | District of Columbia (DC)
districts['us-dc'] = { name: 'Washington D.C.', manager: '0x88129c616a7fb56CE879D74Ee2E23EF1d4C6d1f8' }

// US | Florida (FL)
districts['us-fl-miami'] = { name: 'Miami', manager: '0x48Aaf85e8C754e6fDbF01878849285ac02b6DEC3' }
districts['us-fl-tampa'] = { name: 'Tampa', manager: '0xbD5F0d88484DC800e95fDB49930b0dc24C1bD200' }

// US | Georgia (GA)
districts['us-ga-atlanta'] = { name: 'Atlanta', manager: '0x96b3816af6970D42C13bd74BD307743Ed8326A1a' }

// US | Hawaii (HI)
districts['us-id-honolulu'] = { name: 'Honolulu', manager: '0x67DafF4DF11c6a6036b3FE90FcF989ffFC57299f' }

// US | Idaho (ID)
districts['us-id-boise'] = { name: 'Boise', manager: '0x9f99Cc25ceC2C50Bc174A2c212F745BB6fE4bC23' }

// US | Illinois (IL)
districts['us-il-chicago'] = { name: 'Chicago', manager: '0x508C00Ff412841b845Cc07EB73Cf7e6BB095d310' }

// US | Indiana (IN)
districts['us-in-indianapolis'] = { name: 'Indianapolis', manager: '0x219a0A0250F8Da2CcD9AF34B952Ba92c2b12CD81' }

// US | Iowa (IA)
districts['us-ia-des-moines'] = { name: 'Des Moines', manager: '0x83B131747FDA48A41657c5a1Df04E04130F5108f' }

// US | Kansas (KS)
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

// US | North Jersey (NJ)
districts['us-nj-north-jersey'] = { name: 'North Jersey', manager: '0x6082af630980db904bcC67E1BC0c1feB31d510e1' }

// US | New Mexico (NM)
districts['us-nm-albuquerque'] = { name: 'Albuquerque', manager: '0xc413B604383ef221f1dc12C7ff7313Ff51a7f170' }

// US | New York (NY)
districts['us-ny-bronx']     = { name: 'Bronx',     manager: '0xBF9438FfeaA029CE75B5aE620bbAdA0e84aE9130' }
districts['us-ny-brooklyn']  = { name: 'Brooklyn',  manager: '0x88433F5948505605aCeC2659F3b6Ec2f2eAF13eD' }
districts['us-ny-manhattan'] = { name: 'Manhattan', manager: '0x19dEab20C9358784045423bA7fDd0Ad59d650c96' }
districts['us-ny-queens']    = { name: 'Queens',    manager: '0xD7cBB037dD33b0CA53aF77d7704CA886082F2AD6' }

// US | North Carolina (NC)
districts['us-nc-charlotte'] = { name: 'Charlotte', manager: '0x647d2D92b3CBD94c170Cd59e01A7E7c115e1aEA5' }

// US | North Dakota (ND)
districts['us-nd-bismarck'] = { name: 'Bismarck', manager: '0xfd03D874740E2D75F4381E89fe041DCd54A29a3C' }

// US | Ohio (OH)
districts['us-oh-cleveland'] = { name: 'Cleveland', manager: '0xbA20B696185327b1b1E339fE90e7EbcBeAcC225e' }

// US | Oklahoma (OK)
districts['us-ok-oklahoma-city'] = { name: 'Oklahoma City', manager: '0xB0808508EDF6f5c3B62dd5070DAeab9756bc656e' }

// US | Oregon (OR)
districts['us-or-portland'] = { name: 'Portland', manager: '0x7c7029e9aB82E3c744eFEF7E511153B881419c4D' }

// US | Pennsylvania (PA)
districts['us-pa-philadelphia'] = { name: 'Philadelphia', manager: '0x6B4B8fB6F00E5A2d435472EF32601369F1137e0d' }

// US | Rhode Island (RI)
districts['us-ri-providence'] = { name: 'Providence', manager: '0x728675c27E2f7B98FEadE1982d2ac9af67576161' }

// US | South Carolina (SC)
districts['us-sd-charleston'] = { name: 'Charleston', manager: '0x6dc016864Ff3B43e32a4928E87Ff333f9Ec7B11A' }

// US | South Dakota (SD)
districts['us-sd-sioux-falls'] = { name: 'Sioux Falls', manager: '0xD3f484370e42e8588ea8935872694b81142ED623' }

// US | Tennessee (TN)
districts['us-tn-memphis'] = { name: 'Memphis', manager: '0x29549bAE65646a6a90f9e920D7cfDA005185Acf0' }

// US | Texas (TX)
districts['us-tx-austin'] = { name: 'Austin', manager: '0xd01C2a47ceEb389cc08580e34c26a7d600B50B60' }
districts['us-tx-dallas'] = { name: 'Dallas', manager: '0x85d85d542C1eCE02A15b9bbFAc0eB3A9490e2460' }
districts['us-tx-houston'] = { name: 'Houston', manager: '0x4830a36b75caCb5e6E7c6876b0b2018402E9a44c' }
districts['us-tx-san-antonio'] = { name: 'San Antonio', manager: '0xfa0ec0Bd093f703aa5c4aC6eCf10a8205a20A2e9' }

// US | Utah (UT)
districts['us-vt-salt-lake-city'] = { name: 'Salt Lake City', manager: '0x6808Db0317D0A20017d16B9C23a1419656DE1aCF' }

// US | Vermont (VT)
districts['us-vt-burlington'] = { name: 'Burlington', manager: '0xC03e3031359DFb1B5a5F2e1e9AE65feb0e114AF4' }

// US | Virginia (VA)
districts['us-va-richmond'] = { name: 'Richmond', manager: '0x3B30f4DC832a5175116efD75f4e9C9c0CFaBE33f' }

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
