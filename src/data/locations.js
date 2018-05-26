/* Initialize US regions array. */
const us_regions = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

/* Initialize districts array. */
const districts = []

/* Initialize region index. */
let regionIndex = 0

// Alabama (AL)
districts[us_regions[regionIndex++]] = [{ id: 'us-al-auburn', name: 'Auburn' }, { id: 'us-al-birmingham', name: 'Birmingham' }, { id: 'us-al-dothan', name: 'Dothan' }, { id: 'us-al-gadsden', name: 'Gadsden' }, { id: 'us-al-huntsville', name: 'Huntsville' }, { id: 'us-al-mobile', name: 'Mobile' }, { id: 'us-al-montgomery', name: 'Montgomery' }, { id: 'us-al-muscle-shoals', name: 'Muscle Shoals' }, { id: 'us-al-tuscaloosa', name: 'Tuscaloosa' }]
// Alaska (AK)
districts[us_regions[regionIndex++]] = [{ id: 'us-ak-anchorage', name: 'Anchorage' }, 'Fairbanks', 'Juneau', 'Kenai Peninsula']
// Arizona (AZ)
districts[us_regions[regionIndex++]] = ['Flagstaff/Sedona', 'Mohave County', { id: 'us-az-phoenix', name: 'Phoenix' }, 'Prescott', 'Show Low', 'Sierra Vista', 'Tucson', 'Yuma']
// Arkansas (AR)
districts[us_regions[regionIndex++]] = ['Fayetteville', 'Fort Smith', 'Jonesboro', { id: 'us-ar-little-rock', name: 'Little Rock' }]
// California (CA)
districts[us_regions[regionIndex++]] = [{ id: 'us-ca-bakersfield', name: 'Bakersfield' }, { id: 'us-ca-chico', name: 'Chico' }, { id: 'us-ca-fresno', name: 'Fresno' }, { id: 'us-ca-humboldt-county', name: 'Humboldt County' }, { id: 'us-ca-imperial-county', name: 'Imperial County' }, { id: 'us-ca-inland-empire', name: 'Inland Empire' }, { id: 'us-ca-long-beach', name: 'Long Beach' }, { id: 'us-ca-los-angeles', name: 'Los Angeles' }, { id: 'us-ca-mendocino', name: 'Mendocino' }, { id: 'us-ca-merced', name: 'Merced' }, { id: 'us-ca-modesto', name: 'Modesto' }, { id: 'us-ca-monterey', name: 'Monterey' }, { id: 'us-ca-north-bay', name: 'North Bay' }, { id: 'us-ca-oakland-east-bay', name: 'Oakland/East Bay' }, { id: 'us-ca-orange-county', name: 'Orange County' }, { id: 'us-ca-palm-springs', name: 'Palm Springs' }, { id: 'us-ca-palmdale-lancaster', name: 'Palmdale/lancaster' }, { id: 'us-ca-redding', name: 'Redding' }, { id: 'us-ca-sacramento', name: 'Sacramento' }, { id: 'us-ca-san-diego', name: 'San Diego' }, { id: 'us-ca-san-fernando-valley', name: 'San Fernando Valley' }, { id: 'us-ca-san-francisco', name: 'San Francisco' }, { id: 'us-ca-san-gabriel-valley', name: 'San Gabriel Valley' }, { id: 'us-ca-san-jose', name: 'San Jose' }, { id: 'us-ca-san-luis-obispo', name: 'San Luis Obispo' }, { id: 'us-ca-san-mateo', name: 'San Mateo' }, { id: 'us-ca-santa-barbara', name: 'Santa Barbara' }, { id: 'us-ca-santa-cruz', name: 'Santa Cruz' }, { id: 'us-ca-santa-maria', name: 'Santa Maria' }, { id: 'us-ca-siskiyou', name: 'Siskiyou' }, { id: 'us-ca-stockton', name: 'Stockton' }, { id: 'us-ca-susanville', name: 'Susanville' }, { id: 'us-ca-ventura', name: 'Ventura' }, { id: 'us-ca-visalia', name: 'Visalia' }]
// Colorado (CO)
districts[us_regions[regionIndex++]] = [{ id: 'us-co-boulder', name: 'Boulder' }, 'Colorado Springs', { id: 'us-co-denver', name: 'Denver' }, { id: 'us-co-fort-collins', name: 'Fort Collins' }, { id: 'us-co-pueblo', name: 'Pueblo' }, { id: 'us-co-rockies', name: 'Rockies' }, { id: 'us-co-western-slope', name: 'Western Slope' }]
// Connecticut (CT)
districts[us_regions[regionIndex++]] = ['Bridgeport', 'Eastern Connecticut', { id: 'us-ct-hartford', name: 'Hartford' }, 'New Haven', 'Northwest Connecticut']
// Delaware (DE)
districts[us_regions[regionIndex++]] = ['']
// District of Columbia (DC)
districts[us_regions[regionIndex++]] = [{ id: 'us-dc-northern-virginia', name: 'Northern Virginia' }, { id: 'us-dc-southern-maryland', name: 'Southern Maryland' }, { id: 'us-dc', name: 'Washington D.C.' }]
// Florida (FL)
districts[us_regions[regionIndex++]] = [{ id: 'us-fl-daytona', name: 'Daytona' }, { id: 'us-fl-fort-lauderdale', name: 'Fort Lauderdale' }, { id: 'us-fl-fort-myers', name: 'Fort Myers' }, { id: 'us-fl-gainesville', name: 'Gainesville' }, { id: 'us-fl-jacksonville', name: 'Jacksonville' }, { id: 'us-fl-keys', name: 'Keys' }, { id: 'us-fl-lakeland', name: 'Lakeland' }, { id: 'us-fl-miami', name: 'Miami' }, { id: 'us-fl-ocala', name: 'Ocala' }, { id: 'us-fl-okaloosa', name: 'Okaloosa' }, { id: 'us-fl-orlando', name: 'Orlando' }, { id: 'us-fl-palm-bay', name: 'Palm Bay' }, { id: 'us-fl-panama-city', name: 'Panama City' }, { id: 'us-fl-pensacola', name: 'Pensacola' }, { id: 'us-fl-sarasota-bradenton', name: 'Sarasota/Bradenton' }, { id: 'us-fl-space-coast', name: 'Space Coast' }, { id: 'us-fl-st-augustine', name: 'St. Augustine' }, { id: 'us-fl-tallahassee', name: 'Tallahassee' }, { id: 'us-fl-tampa', name: 'Tampa' }, { id: 'us-fl-treasure-coast', name: 'Treasure Coast' }, { id: 'us-fl-west-palm-beach', name: 'West Palm Beach' }]
// Georgia (GA)
districts[us_regions[regionIndex++]] = [{ id: 'us-ga-albany', name: 'Albany' }, { id: 'us-ga-athens', name: 'Athens' }, { id: 'us-ga-atlanta', name: 'Atlanta' }, { id: 'us-ga-augusta', name: 'Augusta' }, { id: 'us-ga-brunswick', name: 'Brunswick' }, { id: 'us-ga-columbus', name: 'Columbus' }, { id: 'us-ga-macon', name: 'Macon' }, { id: 'us-ga-northwest-georgia', name: 'Northwest Georgia' }, { id: 'us-ga-savannah', name: 'Savannah' }, { id: 'us-ga-statesboro', name: 'Statesboro' }, { id: 'us-ga-valdosta', name: 'Valdosta' }]
// Hawaii (HI)
districts[us_regions[regionIndex++]] = ['Big Island', 'Honolulu', 'Kauai', 'Maui']
// Idaho (ID)
districts[us_regions[regionIndex++]] = ['Boise', 'East Idaho', 'Lewiston', 'Twin Falls']
// Illinois (IL)
districts[us_regions[regionIndex++]] = [{ id: 'us-il-bloomington', name: 'Bloomington' }, { id: 'us-il-carbondale', name: 'Carbondale' }, { id: 'us-il-chambana', name: 'Chambana' }, { id: 'us-il-chicago', name: 'Chicago' }, { id: 'us-il-decatur', name: 'Decatur' }, { id: 'us-il-la-salle-county', name: 'La Salle County' }, { id: 'us-il-mattoon', name: 'Mattoon' }, { id: 'us-il-peoria', name: 'Peoria' }, { id: 'us-il-rockford', name: 'Rockford' }, { id: 'us-il-springfield', name: 'Springfield' }, { id: 'us-il-western-illinois', name: 'Western Illinois' }]
// Indiana (IN)
districts[us_regions[regionIndex++]] = ['Bloomington', 'Evansville', 'Ft Wayne', { id: 'us-in-indianapolis', name: 'Indianapolis' }, 'Kokomo', 'Lafayette', 'Muncie', 'Richmond', 'South Bend', 'Terre Haute']
// Iowa (IA)
districts[us_regions[regionIndex++]] = ['Ames', 'Cedar Rapids', 'Desmoines', 'Dubuque', 'Fort Dodge', 'Iowa City', 'Mason City', 'Quad Cities', 'Sioux City', 'Southest Iowa', 'Waterloo']
// Kansas (KS)
districts[us_regions[regionIndex++]] = ['Lawrence', 'Manhattan', 'Salina', 'Topeka', 'Wichita']
// Kentucky (KY)
districts[us_regions[regionIndex++]] = [{ id: 'us-ky-bowling-green', name: 'Bowling Green' }, { id: 'us-ky-indianapolis', name: 'eastern-kentucky' }, { id: 'us-ky-lexington', name: 'Lexington' }, { id: 'us-ky-louisville', name: 'Louisville' }, { id: 'us-ky-owensboro', name: 'Owensboro' }, { id: 'us-ky-western-kentucky', name: 'Western Kentucky' }]
// Louisiana (LA)
districts[us_regions[regionIndex++]] = ['Alexandria', 'Baton Rouge', 'Houma', 'Lafayette', 'Lake Charles', 'Monroe', { id: 'us-la-new-orleans', name: 'New Orleans' }, 'Shreveport']
// Maine (ME)
districts[us_regions[regionIndex++]] = ['']
// Maryland (MD)
districts[us_regions[regionIndex++]] = ['Annapolis', { id: 'us-md-baltimore', name: 'Baltimore' }, 'Cumberland Valley', 'Eastern Shore', 'Frederick', 'Western Maryland']
// Massachusetts (MA)
districts[us_regions[regionIndex++]] = [{ id: 'us-ma-boston', name: 'Boston' }, 'Brockton', 'Cape Cod', 'Lowell', 'South Coast', 'Springfield', 'Worcester']
// Michigan (MI)
districts[us_regions[regionIndex++]] = ['Ann Arbor', 'Battle Creek', 'Central Michigan', 'Detroit', 'Flint', 'Grand Rapids', 'Holland', 'Jackson', 'Kalamazoo', 'Lansing', 'Monroe', 'Muskegon', 'Northern Michigan', 'Port Huron', 'Saginaw', 'Southwest Michigan', 'Upper Peninsula']
// Minnesota (MN)
districts[us_regions[regionIndex++]] = ['Bemidji', 'Brainerd', 'Duluth', 'Mankato', 'Minneapolis / St. Paul', 'Rochester', 'St. Cloud']
// Mississippi (MS)
districts[us_regions[regionIndex++]] = ['Biloxi', 'Hattiesburg', 'Jackson', 'Meridian', 'North Mississippi', 'Southwest Mississippi']
// Missouri (MO)
districts[us_regions[regionIndex++]] = ['Columbia/Jeff City', 'Joplin', 'Kansas City', 'Kirksville', 'Lake Of The Ozarks', 'Southeast Missouri', 'Springfield', 'St Joseph', 'St. Louis']
// Montana (MT)
districts[us_regions[regionIndex++]] = ['Billings', 'Bozeman', 'Butte', 'Great Falls', 'Helena', 'Kalispell', 'Missoula']
// Nebraska (NE)
districts[us_regions[regionIndex++]] = ['Grand Island', 'Lincoln', 'North Platte', 'Omaha', 'Scottsbluff']
// Nevada (NV)
districts[us_regions[regionIndex++]] = ['Elko', { id: 'us-nv-las-vegas', name: 'Las Vegas' }, 'Reno']
// New Hampshire (NH)
districts[us_regions[regionIndex++]] = ['']
// New Jersey (NJ)
districts[us_regions[regionIndex++]] = [{ id: 'us-nj-central-jersey', name: 'Central Jersey' }, { id: 'us-nj-jersey-shore', name: 'Jersey Shore' }, { id: 'us-nj-north-jersey', name: 'North Jersey' }, { id: 'us-nj-south-jersey', name: 'South Jersey' }]
// New Mexico (NM)
districts[us_regions[regionIndex++]] = ['Albuquerque', 'Clovis / Portales', 'Farmington', 'Las Cruces', 'Roswell / Carlsbad', 'Santa Fe/Taos']
// New York (NY)
districts[us_regions[regionIndex++]] = [{ id: 'us-ny-albany', name: 'Albany' }, { id: 'us-ny-binghamton', name: 'Binghamton' }, { id: 'us-ny-bronx', name: 'Bronx' }, { id: 'us-ny-brooklyn', name: 'Brooklyn' }, { id: 'us-ny-buffalo', name: 'Buffalo' }, { id: 'us-ny-catskills', name: 'Catskills' }, { id: 'us-ny-chautauqua', name: 'Chautauqua' }, { id: 'us-ny-elmira', name: 'Elmira' }, { id: 'us-ny-fairfield', name: 'Fairfield' }, { id: 'us-ny-finger-lakes', name: 'Finger Lakes' }, { id: 'us-ny-glens-falls', name: 'Glens Falls' }, { id: 'us-ny-hudson-valley', name: 'Hudson Valley' }, { id: 'us-ny-ithaca', name: 'Ithaca' }, { id: 'us-ny-long-island', name: 'Long Island' }, { id: 'us-ny-manhattan', name: 'Manhattan' }, { id: 'us-ny-oneonta', name: 'Oneonta' }, { id: 'us-ny-plattsburgh', name: 'Plattsburgh' }, { id: 'us-ny-potsdam', name: 'Potsdam' }, { id: 'us-ny-queens', name: 'Queens', manager: '0xD7cBB037dD33b0CA53aF77d7704CA886082F2AD6' }, { id: 'us-ny-rochester', name: 'Rochester' }, { id: 'us-ny-staten-island', name: 'Staten Island' }, { id: 'us-ny-syracuse', name: 'Syracuse' }, { id: 'us-ny-twin-tiers', name: 'Twin Tiers' }, { id: 'us-ny-utica', name: 'Utica' }, { id: 'us-ny-watertown', name: 'Watertown' }, { id: 'us-ny-westchester', name: 'Westchester' }]
// North Carolina (NC)
districts[us_regions[regionIndex++]] = ['Asheville', 'Boone', 'Charlotte', 'Eastern', 'Fayetteville', 'Greensboro', 'Hickory', 'High Point', 'Outer Banks', 'Raleigh-durham', 'Wilmington', 'Winston-Salem']
// North Dakota (ND)
districts[us_regions[regionIndex++]] = ['Bismarck', 'Fargo', 'Grand Forks', 'Minot']
// Ohio (OH)
districts[us_regions[regionIndex++]] = ['Ashtabula', 'Athens', 'Chillicothe', 'Cincinnati', 'Cleveland', 'Columbus', 'Dayton', 'Huntington/Ashland', 'Mansfield', 'Sandusky', 'Toledo', 'Tuscarawas County', 'Youngstown', 'Zanesville/Cambridge']
// Oklahoma (OK)
districts[us_regions[regionIndex++]] = ['Lawton', 'Norman', 'Oklahoma City', 'Stillwater', 'Tulsa']
// Oregon (OR)
districts[us_regions[regionIndex++]] = ['Bend', 'Corvallis', 'East Oregon', 'Eugene', 'Klamath Falls', 'Medford', 'Oregon Coast', 'Portland', 'Roseburg', 'Salem']
// Pennsylvania (PA)
districts[us_regions[regionIndex++]] = ['Allentown', 'Altoona', 'Chambersburg', 'Erie', 'Harrisburg', 'Lancaster', 'Meadville', 'Penn State', { id: 'us-pa-philadelphia', name: 'Philadelphia' }, 'Pittsburgh', 'Poconos', 'Reading', 'Scranton', 'Williamsport', 'York']
// Rhode Island (RI)
districts[us_regions[regionIndex++]] = ['Providence', 'Warwick']
// South Carolina (SC)
districts[us_regions[regionIndex++]] = ['Charleston', 'Columbia', 'Florence', 'Greenville', 'Hilton Head', 'Myrtle Beach']
// South Dakota (SD)
districts[us_regions[regionIndex++]] = ['Aberdeen', 'Pierre', 'Rapid City', 'Sioux Falls']
// Tennessee (TN)
districts[us_regions[regionIndex++]] = [{ id: 'us-tn-chattanooga', name: 'Chattanooga' }, { id: 'us-tn-clarksville', name: 'Clarksville' }, { id: 'us-tn-cookeville', name: 'Cookeville' }, { id: 'us-tn-johnson-city', name: 'Johnson City' }, { id: 'us-tn-knoxville', name: 'Knoxville' }, { id: 'us-tn-memphis', name: 'Memphis' }, { id: 'us-tn-nashville', name: 'Nashville' }, { id: 'us-tn-tri-cities', name: 'Tri-Cities' }]
// Texas (TX)
districts[us_regions[regionIndex++]] = [{ id: 'us-tx-abilene', name: 'Abilene' }, { id: 'us-tx-amarillo', name: 'Amarillo' }, { id: 'us-tx-austin', name: 'Austin' }, { id: 'us-tx-beaumont', name: 'Beaumont' }, { id: 'us-tx-brownsville', name: 'Brownsville' }, { id: 'us-tx-college-station', name: 'College Station' }, { id: 'us-tx-corpus-christi', name: 'Corpus Christi' }, { id: 'us-tx-dallas', name: 'Dallas' }, { id: 'us-tx-del-rio', name: 'Del Rio' }, { id: 'us-tx-denton', name: 'Denton' }, { id: 'us-tx-el-paso', name: 'El Paso' }, { id: 'us-tx-fort-worth', name: 'Fort Worth' }, { id: 'us-tx-galveston', name: 'Galveston' }, { id: 'us-tx-houston', name: 'Houston' }, { id: 'us-tx-huntsville', name: 'Huntsville' }, { id: 'us-tx-killeen', name: 'Killeen' }, { id: 'us-tx-laredo', name: 'Laredo' }, { id: 'us-tx-longview', name: 'Longview' }, { id: 'us-tx-lubbock', name: 'Lubbock' }, { id: 'us-tx-mcallen', name: 'Mcallen' }, { id: 'us-tx-mid-cities', name: 'Mid Cities' }, { id: 'us-tx-odessa', name: 'Odessa' }, { id: 'us-tx-san-antonio', name: 'San Antonio' }, { id: 'us-tx-san-marcos', name: 'San Marcos' }, { id: 'us-tx-texarkana', name: 'Texarkana' }, { id: 'us-tx-texoma', name: 'Texoma' }, { id: 'us-tx-tyler', name: 'Tyler' }, { id: 'us-tx-victoria', name: 'Victoria' }, { id: 'us-tx-waco', name: 'Waco' }, { id: 'us-tx-wichita-falls', name: 'Wichita Falls' }]
// Utah (UT)
districts[us_regions[regionIndex++]] = [{ id: 'us-vt-logan', name: 'Logan' }, { id: 'us-vt-ogden', name: 'Ogden' }, { id: 'us-vt-provo', name: 'Provo' }, { id: 'us-vt-salt-lake-city', name: 'Salt Lake City' }, { id: 'us-vt-st-george', name: 'St. George' }]
// Vermont (VT)
districts[us_regions[regionIndex++]] = [{ id: 'us-vt-burlington', name: 'Burlington' }]
// Virginia (VA)
districts[us_regions[regionIndex++]] = [{ id: 'us-va-charlottesville', name: 'Charlottesville' }, { id: 'us-va-chesapeake', name: 'Chesapeake' }, { id: 'us-va-danville', name: 'Danville' }, { id: 'us-va-fredericksburg', name: 'Fredericksburg' }, { id: 'us-va-hampton', name: 'Hampton' }, { id: 'us-va-harrisonburg', name: 'Harrisonburg' }, { id: 'us-va-lynchburg', name: 'Lynchburg' }, { id: 'us-va-new-river-valley', name: 'New River Valley' }, { id: 'us-va-newport-news', name: 'Newport News' }, { id: 'us-va-norfolk', name: 'Norfolk' }, { id: 'us-va-portsmouth', name: 'Portsmouth' }, { id: 'us-va-richmond', name: 'Richmond' }, { id: 'us-va-roanoke', name: 'Roanoke' }, { id: 'us-va-southwest-virginia', name: 'Southwest Virginia' }, { id: 'us-va-suffolk', name: 'Suffolk' }, { id: 'us-va-virginia-beach', name: 'Virginia Beach' }]
// Washington (WA)
districts[us_regions[regionIndex++]] = [{ id: 'us-wa-bellingham', name: 'Bellingham' }, { id: 'us-wa-everett', name: 'Everett' }, { id: 'us-wa-moses-lake', name: 'Moses Lake' }, { id: 'us-wa-mt-vernon', name: 'Mt. Vernon' }, { id: 'us-wa-olympia', name: 'Olympia' }, { id: 'us-wa-pullman', name: 'Pullman' }, { id: 'us-wa-seattle', name: 'Seattle' }, { id: 'us-wa-spokane', name: 'Spokane / Coeur d\'Alene' }, { id: 'us-wa-tacoma', name: 'Tacoma' }, { id: 'us-wa-tri-cities', name: 'Tri-Cities' }, { id: 'us-wa-wenatchee', name: 'Wenatchee' }, { id: 'us-wa-yakima', name: 'Yakima' }]
// West Virginia (WV)
districts[us_regions[regionIndex++]] = [{ id: 'us-wv-charleston', name: 'Charleston' }, { id: 'us-wv-huntington', name: 'Huntington' }, { id: 'us-wv-martinsburg', name: 'Martinsburg' }, { id: 'us-wv-morgantown', name: 'Morgantown' }, { id: 'us-wv-parkersburg', name: 'Parkersburg' }, { id: 'us-wv-southern-west-virginia', name: 'Southern West Virginia' }, { id: 'us-wv-wheeling', name: 'Wheeling' }]
// Wisconsin (WI)
districts[us_regions[regionIndex++]] = ['Appleton', 'Eau Claire', 'Green Bay', 'Janesville', 'La Crosse', 'Madison', 'Milwaukee', 'Racine', 'Sheboygan', 'Wausau']
// Wyoming (WY)
districts[us_regions[regionIndex++]] = [{ id: 'us-wy-cheyenne', name: 'Cheyenne' }]



/* Initialize CA regions array. */
const ca_regions = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Ontario', 'Quebec', 'Saskatchewan', 'Yukon']

/* Re-initialize region index. */
regionIndex = 0

// Alberta (AB)
districts[ca_regions[regionIndex++]] = ['Calgary', 'Edmonton', 'Ft Mcmurray', 'Grande Prairie', 'Lethbridge', 'Medicine Hat', 'Red Deer', 'St. Albert']
// British Columbia (BC)
districts[ca_regions[regionIndex++]] = ['Abbotsford', 'Cariboo', 'Comox Valley', 'Cranbrook', 'Kamloops', 'Kelowna', 'Nanaimo', 'Peace River Country', 'Prince George', 'Skeena', 'Sunshine Coast', { id: 'ca-bc-vancouver', name: 'Vancouver' }, 'Victoria', 'Whistler']
// Manitoba (MB)
districts[ca_regions[regionIndex++]] = ['Brandon', 'Winnipeg']
// New Brunswick (NB)
districts[ca_regions[regionIndex++]] = ['Fredericton', 'Moncton', 'St. John']
// Newfoundland and Labrador (NL)
districts[ca_regions[regionIndex++]] = ['']
// Northwest Territories (NT)
districts[ca_regions[regionIndex++]] = ['']
// Nova Scotia (NS)
districts[ca_regions[regionIndex++]] = ['']
// Ontario (ON)
districts[ca_regions[regionIndex++]] = [{ id: 'ca-on-barrie', name: 'Barrie' }, { id: 'ca-on-belleville', name: 'Belleville' }, { id: 'ca-on-brantford', name: 'Brantford' }, { id: 'ca-on-chatham', name: 'Chatham' }, { id: 'ca-on-cornwall', name: 'Cornwall' }, { id: 'ca-on-guelph', name: 'Guelph' }, { id: 'ca-on-hamilton', name: 'Hamilton' }, { id: 'ca-on-kingston', name: 'Kingston' }, { id: 'ca-on-kitchener', name: 'Kitchener' }, { id: 'ca-on-london', name: 'London' }, { id: 'ca-on-niagara', name: 'Niagara' }, { id: 'ca-on-ottawa', name: 'Ottawa' }, { id: 'ca-on-owen-sound', name: 'Owen Sound' }, { id: 'ca-on-peterborough', name: 'Peterborough' }, { id: 'ca-on-sarnia', name: 'Sarnia' }, { id: 'ca-on-sault-ste-marie', name: 'Sault Ste Marie' }, { id: 'ca-on-sudbury', name: 'Sudbury' }, { id: 'ca-on-thunder-bay', name: 'Thunder Bay' }, { id: 'ca-on-toronto', name: 'Toronto' }, { id: 'us-al-windsor', name: 'Windsor' }]
// Quebec (QC)
districts[ca_regions[regionIndex++]] = [{ id: 'ca-qc-montreal', name: 'Montreal' }, { id: 'ca-qc-quebec-city', name: 'Quebec City' }, { id: 'ca-qc-saguenay', name: 'Saguenay' }, { id: 'ca-qc-sherbrooke', name: 'Sherbrooke' }, { id: 'ca-qc-trois-rivieres', name: 'Trois-Rivières' }]
// Saskatchewan (SK)
districts[ca_regions[regionIndex++]] = ['Prince Albert', 'Regina', 'Saskatoon']
// Yukon (YT)
districts[ca_regions[regionIndex++]] = ['']



/* Initialize EU regions array. */
const eu_regions = ['Albania', 'Austria', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Israel', 'Italy', 'Kosovo', 'Latvia', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta', 'Monaco', 'Montenegro', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'Serbia', 'Slovakia', 'Spain', 'Sweden', 'Switzerland', 'Ukraine', 'United Kingdom']

/* Re-initialize region index. */
regionIndex = 0

// Albania
districts[eu_regions[regionIndex++]] = ['Tiranë']
// Austria
districts[eu_regions[regionIndex++]] = ['Graz', 'Innsbruck', 'Linz', 'Salzburg', 'Wien']
// Belarus
districts[eu_regions[regionIndex++]] = ['Minsk']
// Belgium
districts[eu_regions[regionIndex++]] = ['Antwerp', 'Bruges', 'Brussel', 'Charleroi', 'Ghent', 'Liege', 'Namur']
// Bosnia and Herzegovina
districts[eu_regions[regionIndex++]] = ['Sarajevo']
// Bulgaria
districts[eu_regions[regionIndex++]] = ['Balgariya']
// Croatia
districts[eu_regions[regionIndex++]] = ['Zagreb']
// Cyprus
districts[eu_regions[regionIndex++]] = ['Limassol', 'Nicosia']
// Czech Republic
districts[eu_regions[regionIndex++]] = ['Brno', 'České Budějovice', 'Liberec', 'Olomouc', 'Ostrava', 'Plzeň', 'Praha']
// Denmark
districts[eu_regions[regionIndex++]] = ['Aarhus', 'København']
// Estonia
districts[eu_regions[regionIndex++]] = ['Tallinn']
// Finland
districts[eu_regions[regionIndex++]] = ['Helsinki']
// France (FR)
districts[eu_regions[regionIndex++]] = ['Bordeaux', 'Bretagne', 'Corse', 'Départements d\'Outre Mer', 'Grenoble', 'Lille', 'Loire', 'Lyon', 'Marseille', 'Montpellier', 'Nantes', 'Nice', 'Normandie', { id: 'eu-fr-paris', name: 'Paris' }, 'Strasbourg', 'Toulouse']
// Germany
districts[eu_regions[regionIndex++]] = ['Berlin', 'Bodensee', 'Bremen', 'Dortmund', 'Dresden', 'Düsseldorf', 'Essen', 'Frankfurt', 'Freiburg', 'Hamburg', 'Hannover', 'Heidelberg', 'Kaiserslautern', 'Karlsruhe', 'Kiel', 'Köln', 'Leipzig', 'Lübeck', 'Mannheim', 'München', 'Nürnberg', 'Rostock', 'Saarbrücken', 'Schwerin', 'Stuttgart']
// Greece
districts[eu_regions[regionIndex++]] = ['Athens', 'Crete', 'Patras', 'Thessaloniki']
// Hungary
districts[eu_regions[regionIndex++]] = ['Budapest', 'Debrecen', 'Miskolc', 'Szeged']
// Iceland
districts[eu_regions[regionIndex++]] = ['Iceland']
// Ireland
districts[eu_regions[regionIndex++]] = ['Cork', 'Derry', 'Dublin', 'Galway', 'Limerick', 'Lisburn', 'Waterford']
// Israel
districts[eu_regions[regionIndex++]] = ['Haifa', 'Jerusalem', 'Rishon Lezion', 'Telaviv', 'Westbank']
// Italy
districts[eu_regions[regionIndex++]] = ['Bari', 'Bologna', 'Brescia', 'Calabria', 'Firenze', 'Forli-Cesena', 'Genova', 'Milano', 'Napoli', 'Perugia', 'Roma', 'Sardegna', 'Sicilia', 'Torino', 'Trieste', 'Venezia']
// Kosovo
districts[eu_regions[regionIndex++]] = ['Prishtinë']
// Latvia
districts[eu_regions[regionIndex++]] = ['Rīga']
// Lithuania
districts[eu_regions[regionIndex++]] = ['Vilnius']
// Luxembourg
districts[eu_regions[regionIndex++]] = ['Luxembourg']
// Macedonia
districts[eu_regions[regionIndex++]] = ['Скопје']
// Malta
districts[eu_regions[regionIndex++]] = ['Malta']
// Monaco
districts[eu_regions[regionIndex++]] = ['Monaco']
// Montenegro
districts[eu_regions[regionIndex++]] = ['Podgorica']
// Netherlands
districts[eu_regions[regionIndex++]] = [{ id: 'eu-nl-amsterdam', name: 'Amsterdam' }, { id: 'eu-nl-den-haag', name: 'Den Haag' }, { id: 'eu-nl-eindhoven', name: 'Eindhoven' }, { id: 'eu-nl-groningen', name: 'Groningen' }, { id: 'eu-nl-rotterdam', name: 'Rotterdam' }, { id: 'eu-nl-utrecht', name: 'Utrecht' }]
// Norway
districts[eu_regions[regionIndex++]] = ['Bergen', 'Oslo']
// Poland
districts[eu_regions[regionIndex++]] = ['Białystok', 'Bydgoszcz', 'Gdańsk', 'Katowice', 'Kraków', 'Łódź', 'Lublin', 'Poznań', 'Szczecin', 'Warszawa', 'Wrocław']
// Portugal
districts[eu_regions[regionIndex++]] = ['Braga', 'Coimbra', 'Faro / Algarve', 'Lisboa', 'Madeira', 'Porto']
// Romania
districts[eu_regions[regionIndex++]] = ['Brașov', 'Bucuresti', 'Cluj-Napoca', 'Constanța', 'Craiova', 'Galați', 'Iași', 'Timișoara']
// Russia
districts[eu_regions[regionIndex++]] = ['Moskva', 'Sankt-peterburg']
// Serbia
districts[eu_regions[regionIndex++]] = ['Beograd']
// Slovakia
districts[eu_regions[regionIndex++]] = ['Bratislava', 'Košice']
// Spain
districts[eu_regions[regionIndex++]] = ['Alicante', 'Barcelona', 'Bilbao', 'Cádiz', 'Canarias', 'Coruña', 'Granada', 'Ibiza', 'Madrid', 'Málaga', 'Mallorca', 'Murcia', 'Oviedo', 'Salamanca', 'San Sebastián', 'Sevilla', 'Valencia', 'Valladolid', 'Zaragoza']
// Sweden
districts[eu_regions[regionIndex++]] = ['Göteborg', 'Helsingborg', 'Jönköping', 'Malmö', 'Norrköping', 'Örebro', 'Stockholm', 'Umeå', 'Uppsala', 'Västerås']
// Switzerland
districts[eu_regions[regionIndex++]] = ['Basel', 'Bern', 'Genève', 'Lausanne', 'Lugano', 'Zürich']
// Ukraine
districts[eu_regions[regionIndex++]] = ['Dnipropetrovsk', 'Donetsk', 'Kharkiv', 'Kyiv', 'Lviv', 'Odessa', 'Zaporizhia']
// United Kingdom
districts[eu_regions[regionIndex++]] = ['Aberdeen', 'Bath', 'Belfast', 'Birmingham', 'Brighton', 'Bristol', 'Cambridge', 'Devon', 'East Anglia', 'East Midlands', 'Edinburgh', 'Essex', 'Glasgow', 'Hampshire', 'Kent', 'Leeds', 'Liverpool', { id: 'eu-uk-london', name: 'London' }, 'Manchester', 'Newcastle', 'Oxford', 'Sheffield', 'Wales']



/* Initialize Asian & Mideast regions array. */
const asia_regions = ['Bahrain', 'Bangladesh', 'China', 'Hong Kong', 'India', 'Indonesia', 'Japan', 'Jordan', 'Korea', 'Kuwait', 'Lebanon', 'Macau', 'Malaysia', 'Mongolia', 'Oman', 'Pakistan', 'Philippines', 'Qatar', 'Singapore', 'Taiwan', 'Thailand', 'Turkey', 'United Arab Emirates', 'Vietnam']

/* Re-initialize region index. */
regionIndex = 0

// Albania
districts[asia_regions[regionIndex++]] = ['Manama']
// Bangladesh (BD)
districts[asia_regions[regionIndex++]] = ['Bangladesh']
// China (CN)
districts[asia_regions[regionIndex++]] = [{ id: 'asia-cn-beijing', name: 'Beijing' }, 'Chengdu', 'Chongqing', 'Dalian', 'Guangzhou', 'Hangzhou', 'Nanjing', 'Shanghai', 'Shenyang', 'Shenzhen', 'Wuhan', 'Xi\'an']
// Hong Kong (HK)
districts[asia_regions[regionIndex++]] = [{ id: 'asia-hk', name: 'Hong Kong' }, { id: 'asia-hk-kowloon', name: 'Kowloon' }, { id: 'asia-hk-new-territories', name: 'New Territories' }]
// India (IN)
districts[asia_regions[regionIndex++]] = ['Ahmedabad', 'Bangalore', 'Bhubaneswar', 'Chandigarh', 'Chennai', 'Delhi', 'Goa', 'Hyderabad', 'Indore', 'Jaipur', 'Kanpur', 'Kerala', 'Kolkata', 'Lucknow', { id: 'asia-in-mumbai', name: 'Mumbai' }, 'Nagpur', 'Pune', 'Surat', 'Visakhapatnam']
// Indonesia (ID)
districts[asia_regions[regionIndex++]] = ['Bali', 'Bandung', 'Batam', 'Jakarta', 'Makassar', 'Medan', 'Surabaya']
// Japan (JP)
districts[asia_regions[regionIndex++]] = ['Fukuoka', 'Hiroshima', 'Nagoya', 'Okinawa', 'Osaka-Kobe-Kyoto', 'Sapporo', 'Sendai', { id: 'asia-jp-tokyo', name: 'Tokyo' }]
// Jordan (JO)
districts[asia_regions[regionIndex++]] = ['Amman']
// South Korea (KR)
districts[asia_regions[regionIndex++]] = ['Busan', 'Changwon', 'Daegu', 'Daejeon', 'Gwangju', 'Incheon', { id: 'asia-kr-seoul', name: 'Seoul' }, 'Suwon', 'Ulsan']
// Kuwait (KW)
districts[asia_regions[regionIndex++]] = ['Kuwait']
// Lebanon (LB)
districts[asia_regions[regionIndex++]] = ['Beirut', 'Sidon', 'Tripoli']
// Macau (MO)
districts[asia_regions[regionIndex++]] = [{ id: 'asia-mo', name: 'Macau' }]
// Malaysia (MY)
districts[asia_regions[regionIndex++]] = ['Ipoh', 'Johor Bahru', 'Kota Bharu', 'Kota Kinabalu', 'Kuala Lumpur', 'Kuching', 'Penang', 'Petaling Jaya']
// Mongolia (MN)
districts[asia_regions[regionIndex++]] = ['Ulaanbaatar']
// Oman (OM)
districts[asia_regions[regionIndex++]] = ['Muscat']
// Pakistan (PK)
districts[asia_regions[regionIndex++]] = ['Faisalabad', 'Islamabad', 'Karachi', 'Lahore']
// Philippines (PH)
districts[asia_regions[regionIndex++]] = ['Cebu', 'Davao', { id: 'asia-ph-manila', name: 'Manila' }, 'Pampanga']
// Qatar (QA)
districts[asia_regions[regionIndex++]] = ['Doha']
// Singapore (SG)
districts[asia_regions[regionIndex++]] = [{ id: 'asia-sg', name: 'Singapore' }]
// Taiwan (TW)
districts[asia_regions[regionIndex++]] = [{ id: 'asia-tw-taipei', name: 'Taipei' }]
// Thailand (TH)
districts[asia_regions[regionIndex++]] = [{ id: 'asia-th-bangkok', name: 'Bangkok' }]
// Turkey (TR)
districts[asia_regions[regionIndex++]] = ['Ankara', 'Antalya', 'Istanbul']
// United Arab Emirates (UA)
districts[asia_regions[regionIndex++]] = ['Abudhabi', 'Ajman', 'Al Ain', 'Dubai', 'Sharjah']
// Vietnam (VN)
districts[asia_regions[regionIndex++]] = [{ id: 'asia-vn', name: 'Vietnam' }]



/* Initialize AU & Oceania regions array. */
const oceania_regions = ['Australia', 'Guam', 'New Zealand']

/* Re-initialize region index. */
regionIndex = 0

// Australia (AU)
districts[oceania_regions[regionIndex++]] = ['Adelaide', 'Brisbane', 'Cairns', 'Canberra', 'Darwin', 'Gold Coast', 'Hobart', 'Launceston', 'Melbourne', 'Newcastle', 'Perth', { id: 'oceania-au-sydney', name: 'Sydney' }]
// Guam (GU)
districts[oceania_regions[regionIndex++]] = [{ id: 'oceania-gu-dededo-village', name: 'Dededo Village' }]
// New Zealand (NZ)
districts[oceania_regions[regionIndex++]] = [{ id: 'oceania-nz-auckland', name: 'Auckland' }, 'Christchurch', 'Dunedin', 'Hamilton', 'Wellington']



/* Initialize Latin America and Caribbean regions array. */
const latin_regions = ['Argentina', 'Belize', 'Bolivia', 'Brazil', 'Caribbean', 'Chile', 'Colombia', 'Costa Rica', 'Ecuador', 'El Salvador', 'Guatemala', 'Guyana', 'Honduras', 'Mexico', 'Nicaragua', 'Panama', 'Paraguay', 'Peru', 'Suriname', 'Uruguay', 'Venezuela']

/* Re-initialize region index. */
regionIndex = 0

// Argentina
districts[latin_regions[regionIndex++]] = ['Buenos Aires', 'Cordoba', 'Laplata', 'Mendoza', 'Rosario', 'Salta', 'South Argentina', 'Tucuman']
// Belize
districts[latin_regions[regionIndex++]] = [{ id: 'latin-belize-city', name: 'Belize City' }]
// Bolivia
districts[latin_regions[regionIndex++]] = [{ id: 'latin-bolivia-la-paz', name: 'La Paz' }]
// Brazil (BR)
districts[latin_regions[regionIndex++]] = ['Bahia', 'Belem', 'Belo Horizonte', 'Brasilia', 'Curitiba', 'Fortaleza', 'Goiânia', 'Manaus', 'Porto Alegre', 'Recife', 'Rio de Janeiro', { id: 'latin-br-sao-paulo', name: 'São Paulo' }]
// Caribbean
districts[latin_regions[regionIndex++]] = ['Bahamas', 'Dominican Republic', 'Jamaica', 'Other Caribbean', 'Puerto Rico', 'Virgin Islands']
// Chile
districts[latin_regions[regionIndex++]] = ['Antofagasta', 'Chillán', 'Concepcion', 'Iquique', 'La Serena', 'Montt', 'Rancagua', 'Santiago', 'Talca', 'Temuco', 'Valparaiso']
// Colombia
districts[latin_regions[regionIndex++]] = ['Barranquilla', 'Bogota', 'Bucaramanga', 'Cali', 'Cartagena', 'Cucuta', 'Ibagué', 'Medellin', 'Neiva', 'Pasto', 'Pereira', 'Santa Marta']
// Costa Rica
districts[latin_regions[regionIndex++]] = [{ id: 'latin-costa-rica', name: 'San José' }]
// Ecuador
districts[latin_regions[regionIndex++]] = ['Ambato', 'Cuenca', 'Esmeraldas', 'Guayaquil', 'Machala', 'Manta', 'Quito', 'Santo Domingo']
// El Salvador
districts[latin_regions[regionIndex++]] = ['San Miguel', 'San Salvador', 'Santa Ana']
// Guatemala
districts[latin_regions[regionIndex++]] = [{ id: 'latin-guatemala-city', name: 'Guatemala City' }]
// Guyana
districts[latin_regions[regionIndex++]] = [{ id: 'latin-guyana-georgetown', name: 'Georgetown' }]
// Honduras
districts[latin_regions[regionIndex++]] = ['Tegucigalpa']
// Mexico
districts[latin_regions[regionIndex++]] = ['Acapulco', 'Baja California', 'Chihuahua', 'Ciudad Juárez', 'Df', 'Guadalajara', 'Guanajuato', 'Hermosillo', 'Hidalgo', 'Mazatlán', 'Monterrey', 'Oaxaca', 'Puebla', 'Puerto Vallarta', 'Querétaro', 'San Luis Potosí', 'Tijuana', 'Toluca', 'Vera Cruz', 'Yucatán']
// Nicaragua
districts[latin_regions[regionIndex++]] = ['Managua']
// Panama
districts[latin_regions[regionIndex++]] = ['Ciudad de Panamá', 'Colón', 'David']
// Paraguay
districts[latin_regions[regionIndex++]] = ['Asunción']
// Peru
districts[latin_regions[regionIndex++]] = ['Arequipa', 'Chiclayo', 'Chimbote', 'Cusco', 'Huancayo', 'Iquitos', 'Lima', 'Piura', 'Trujillo']
// Suriname
districts[latin_regions[regionIndex++]] = ['Paramaribo']
// Uruguay
districts[latin_regions[regionIndex++]] = ['Montevideo']
// Venezuela
districts[latin_regions[regionIndex++]] = ['Caracas']



/* Initialize African regions array. */
const african_regions = ['Cameroon', 'Egypt', 'Ivory Coast', 'Morocco', 'Nigeria', 'South Africa']

/* Re-initialize region index. */
regionIndex = 0

// Cameroon
districts[african_regions[regionIndex++]] = [{ id: 'africa-cameroon-douala', name: 'Douala' }, { id: 'africa-cameroon-yaounde', name: 'Yaoundé' }]
// Egypt
districts[african_regions[regionIndex++]] = [{ id: 'africa-egypt-cairo', name: 'Cairo' }, { id: 'africa-egypt-alexandria', name: 'Alexandria' }]
// Ivory Coast
districts[african_regions[regionIndex++]] = [{ id: 'africa-ivory-coast-abidjan', name: 'Abidjan' }]
// Morocco
districts[african_regions[regionIndex++]] = [{ id: 'africa-morocco-casablanca', name: 'Casablanca' }, { id: 'africa-morocco-rabat', name: 'Rabat' }]
// Nigeria
districts[african_regions[regionIndex++]] = [{ id: 'africa-nigeria-lagos', name: 'Lagos' }, { id: 'africa-nigeria-kano', name: 'Kano' }]
// South Africa (SA)
districts[african_regions[regionIndex++]] = [{ id: 'africa-sa-cape-town', name: 'Cape Town' }, { id: 'africa-sa-durban', name: 'Durban' }, { id: 'africa-sa-johannesburg', name: 'Johannesburg' }, { id: 'africa-sa-port-elizabeth', name: 'Port Elizabeth' }, { id: 'africa-sa-pretoria', name: 'Pretoria' }]

export default {
    us_regions,
    ca_regions,
    eu_regions,
    asia_regions,
    oceania_regions,
    latin_regions,
    african_regions,
    districts
}
