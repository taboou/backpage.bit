/* Initialize US regions array. */
const us_regions = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

/* Initialize districts array. */
const districts = []

/* Initialize region index. */
let regionIndex = 0

// Alabama (AL)
districts[us_regions[regionIndex++]] = [{ id: 'us-al-auburn', name: 'Auburn' }, { id: 'us-al-birmingham', name: 'Birmingham' }, { id: 'us-al-dothan', name: 'Dothan' }, { id: 'us-al-gadsden', name: 'Gadsden' }, { id: 'us-al-huntsville', name: 'Huntsville' }, { id: 'us-al-mobile', name: 'Mobile' }, { id: 'us-al-montgomery', name: 'Montgomery' }, { id: 'us-al-muscle-shoals', name: 'Muscle Shoals' }, { id: 'us-al-tuscaloosa', name: 'Tuscaloosa' }]
// Alaska (AK)
districts[us_regions[regionIndex++]] = [{ id: 'us-ak-anchorage', name: 'Anchorage' }, { id: 'us-ak-fairbanks', name: 'Fairbanks' }, { id: 'us-ak-juneau', name: 'Juneau' }, { id: 'us-ak-kenai-peninsula', name: 'Kenai Peninsula' }]
// Arizona (AZ)
districts[us_regions[regionIndex++]] = [{ id: 'us-az-flagstaff-sedona', name: 'Flagstaff/Sedona' }, { id: 'us-az-mohave-county', name: 'Mohave County' }, { id: 'us-az-phoenix', name: 'Phoenix' }, { id: 'us-az-prescott', name: 'Prescott' }, { id: 'us-az-show-low', name: 'Show Low' }, { id: 'us-az-sierra-vista', name: 'Sierra Vista' }, { id: 'us-az-tucson', name: 'Tucson' }, { id: 'us-az-yuma', name: 'Yuma' }]
// Arkansas (AR)
districts[us_regions[regionIndex++]] = [{ id: 'us-ar-fayetteville', name: 'Fayetteville' }, { id: 'us-ar-fort-smith', name: 'Fort Smith' }, { id: 'us-ar-jonesboro', name: 'Jonesboro' }, { id: 'us-ar-little-rock', name: 'Little Rock' }]
// California (CA)
districts[us_regions[regionIndex++]] = [{ id: 'us-ca-bakersfield', name: 'Bakersfield' }, { id: 'us-ca-chico', name: 'Chico' }, { id: 'us-ca-fresno', name: 'Fresno' }, { id: 'us-ca-humboldt-county', name: 'Humboldt County' }, { id: 'us-ca-imperial-county', name: 'Imperial County' }, { id: 'us-ca-inland-empire', name: 'Inland Empire' }, { id: 'us-ca-long-beach', name: 'Long Beach' }, { id: 'us-ca-los-angeles', name: 'Los Angeles' }, { id: 'us-ca-mendocino', name: 'Mendocino' }, { id: 'us-ca-merced', name: 'Merced' }, { id: 'us-ca-modesto', name: 'Modesto' }, { id: 'us-ca-monterey', name: 'Monterey' }, { id: 'us-ca-north-bay', name: 'North Bay' }, { id: 'us-ca-oakland-east-bay', name: 'Oakland/East Bay' }, { id: 'us-ca-orange-county', name: 'Orange County' }, { id: 'us-ca-palm-springs', name: 'Palm Springs' }, { id: 'us-ca-palmdale-lancaster', name: 'Palmdale/lancaster' }, { id: 'us-ca-redding', name: 'Redding' }, { id: 'us-ca-sacramento', name: 'Sacramento' }, { id: 'us-ca-san-diego', name: 'San Diego' }, { id: 'us-ca-san-fernando-valley', name: 'San Fernando Valley' }, { id: 'us-ca-san-francisco', name: 'San Francisco' }, { id: 'us-ca-san-gabriel-valley', name: 'San Gabriel Valley' }, { id: 'us-ca-san-jose', name: 'San Jose' }, { id: 'us-ca-san-luis-obispo', name: 'San Luis Obispo' }, { id: 'us-ca-san-mateo', name: 'San Mateo' }, { id: 'us-ca-santa-barbara', name: 'Santa Barbara' }, { id: 'us-ca-santa-cruz', name: 'Santa Cruz' }, { id: 'us-ca-santa-maria', name: 'Santa Maria' }, { id: 'us-ca-siskiyou', name: 'Siskiyou' }, { id: 'us-ca-stockton', name: 'Stockton' }, { id: 'us-ca-susanville', name: 'Susanville' }, { id: 'us-ca-ventura', name: 'Ventura' }, { id: 'us-ca-visalia', name: 'Visalia' }]
// Colorado (CO)
districts[us_regions[regionIndex++]] = [{ id: 'us-co-boulder', name: 'Boulder' }, { id: 'us-co-colorado-springs', name: 'Colorado Springs' }, { id: 'us-co-denver', name: 'Denver' }, { id: 'us-co-fort-collins', name: 'Fort Collins' }, { id: 'us-co-pueblo', name: 'Pueblo' }, { id: 'us-co-rockies', name: 'Rockies' }, { id: 'us-co-western-slope', name: 'Western Slope' }]
// Connecticut (CT)
districts[us_regions[regionIndex++]] = [{ id: 'us-ct-bridgeport', name: 'Bridgeport' }, { id: 'us-ct-eastern-connecticut', name: 'Eastern Connecticut' }, { id: 'us-ct-hartford', name: 'Hartford' }, { id: 'us-ct-new-haven', name: 'New Haven' }, { id: 'us-ct-northwest-connecticut', name: 'Northwest Connecticut' }, { id: 'us-ct-stamford', name: 'Stamford' }]
// Delaware (DE)
districts[us_regions[regionIndex++]] = [{ id: 'us-de-dover', name: 'Dover' }, { id: 'us-de-wilmington', name: 'Wilmington' }]
// District of Columbia (DC)
districts[us_regions[regionIndex++]] = [{ id: 'us-dc-northern-virginia', name: 'Northern Virginia' }, { id: 'us-dc-southern-maryland', name: 'Southern Maryland' }, { id: 'us-dc', name: 'Washington D.C.' }]
// Florida (FL)
districts[us_regions[regionIndex++]] = [{ id: 'us-fl-daytona', name: 'Daytona' }, { id: 'us-fl-fort-lauderdale', name: 'Fort Lauderdale' }, { id: 'us-fl-fort-myers', name: 'Fort Myers' }, { id: 'us-fl-gainesville', name: 'Gainesville' }, { id: 'us-fl-jacksonville', name: 'Jacksonville' }, { id: 'us-fl-keys', name: 'Keys' }, { id: 'us-fl-lakeland', name: 'Lakeland' }, { id: 'us-fl-miami', name: 'Miami' }, { id: 'us-fl-ocala', name: 'Ocala' }, { id: 'us-fl-okaloosa', name: 'Okaloosa' }, { id: 'us-fl-orlando', name: 'Orlando' }, { id: 'us-fl-palm-bay', name: 'Palm Bay' }, { id: 'us-fl-panama-city', name: 'Panama City' }, { id: 'us-fl-pensacola', name: 'Pensacola' }, { id: 'us-fl-sarasota-bradenton', name: 'Sarasota/Bradenton' }, { id: 'us-fl-space-coast', name: 'Space Coast' }, { id: 'us-fl-st-augustine', name: 'St. Augustine' }, { id: 'us-fl-tallahassee', name: 'Tallahassee' }, { id: 'us-fl-tampa', name: 'Tampa' }, { id: 'us-fl-treasure-coast', name: 'Treasure Coast' }, { id: 'us-fl-west-palm-beach', name: 'West Palm Beach' }]
// Georgia (GA)
districts[us_regions[regionIndex++]] = [{ id: 'us-ga-albany', name: 'Albany' }, { id: 'us-ga-athens', name: 'Athens' }, { id: 'us-ga-atlanta', name: 'Atlanta' }, { id: 'us-ga-augusta', name: 'Augusta' }, { id: 'us-ga-brunswick', name: 'Brunswick' }, { id: 'us-ga-columbus', name: 'Columbus' }, { id: 'us-ga-macon', name: 'Macon' }, { id: 'us-ga-northwest-georgia', name: 'Northwest Georgia' }, { id: 'us-ga-savannah', name: 'Savannah' }, { id: 'us-ga-statesboro', name: 'Statesboro' }, { id: 'us-ga-valdosta', name: 'Valdosta' }]
// Hawaii (HI)
districts[us_regions[regionIndex++]] = [{ id: 'us-id-big-island', name: 'Big Island' }, { id: 'us-id-honolulu', name: 'Honolulu' }, { id: 'us-id-kauai', name: 'Kauai' }, { id: 'us-id-maui', name: 'Maui' }]
// Idaho (ID)
districts[us_regions[regionIndex++]] = [{ id: 'us-id-boise', name: 'Boise' }, { id: 'us-id-east-idaho', name: 'East Idaho' }, { id: 'us-id-lewiston', name: 'Lewiston' }, { id: 'us-id-twin-falls', name: 'Twin Falls' }]
// Illinois (IL)
districts[us_regions[regionIndex++]] = [{ id: 'us-il-bloomington', name: 'Bloomington' }, { id: 'us-il-carbondale', name: 'Carbondale' }, { id: 'us-il-chambana', name: 'Chambana' }, { id: 'us-il-chicago', name: 'Chicago' }, { id: 'us-il-decatur', name: 'Decatur' }, { id: 'us-il-la-salle-county', name: 'La Salle County' }, { id: 'us-il-mattoon', name: 'Mattoon' }, { id: 'us-il-peoria', name: 'Peoria' }, { id: 'us-il-rockford', name: 'Rockford' }, { id: 'us-il-springfield', name: 'Springfield' }, { id: 'us-il-western-illinois', name: 'Western Illinois' }]
// Indiana (IN)
districts[us_regions[regionIndex++]] = [{ id: 'us-in-bloomington', name: 'Bloomington' }, { id: 'us-in-evansville', name: 'Evansville' }, { id: 'us-in-ft-wayne', name: 'Ft Wayne' }, { id: 'us-in-indianapolis', name: 'Indianapolis' }, { id: 'us-in-kokomo', name: 'Kokomo' }, { id: 'us-in-lafayette', name: 'Lafayette' }, { id: 'us-in-muncie', name: 'Muncie' }, { id: 'us-in-richmond', name: 'Richmond' }, { id: 'us-in-south-bend', name: 'South Bend' }, { id: 'us-in-terre-haute', name: 'Terre Haute' }]
// Iowa (IA)
districts[us_regions[regionIndex++]] = [{ id: 'us-ia-ames', name: 'Ames' }, { id: 'us-ia-cedar-rapids', name: 'Cedar Rapids' }, { id: 'us-ia-des-moines', name: 'Des Moines' }, { id: 'us-ia-dubuque', name: 'Dubuque' }, { id: 'us-ia-fort-dodge', name: 'Fort Dodge' }, { id: 'us-ia-iowa-city', name: 'Iowa City' }, { id: 'us-ia-mason-city', name: 'Mason City' }, { id: 'us-ia-quad-cities', name: 'Quad Cities' }, { id: 'us-ia-sioux-city', name: 'Sioux City' }, { id: 'us-ia-southest-iowa', name: 'Southest Iowa' }, { id: 'us-ia-waterloo', name: 'Waterloo' }]
// Kansas (KS)
districts[us_regions[regionIndex++]] = [{ id: 'us-ks-lawrence', name: 'Lawrence' }, { id: 'us-ks-manhattan', name: 'Manhattan' }, { id: 'us-ks-salina', name: 'Salina' }, { id: 'us-ks-topeka', name: 'Topeka' }, { id: 'us-ks-wichita', name: 'Wichita' }]
// Kentucky (KY)
districts[us_regions[regionIndex++]] = [{ id: 'us-ky-bowling-green', name: 'Bowling Green' }, { id: 'us-ky-indianapolis', name: 'eastern-kentucky' }, { id: 'us-ky-lexington', name: 'Lexington' }, { id: 'us-ky-louisville', name: 'Louisville' }, { id: 'us-ky-owensboro', name: 'Owensboro' }, { id: 'us-ky-western-kentucky', name: 'Western Kentucky' }]
// Louisiana (LA)
districts[us_regions[regionIndex++]] = [{ id: 'us-la-alexandria', name: 'Alexandria' }, { id: 'us-la-baton-rouge', name: 'Baton Rouge' }, { id: 'us-la-houma', name: 'Houma' }, { id: 'us-la-lafayette', name: 'Lafayette' }, { id: 'us-la-lake-charles', name: 'Lake Charles' }, { id: 'us-la-monroe', name: 'Monroe' }, { id: 'us-la-new-orleans', name: 'New Orleans' }, { id: 'us-la-shreveport', name: 'Shreveport' }]
// Maine (ME)
districts[us_regions[regionIndex++]] = [{ id: 'us-me-portland', name: 'Portland' }]
// Maryland (MD)
districts[us_regions[regionIndex++]] = [{ id: 'us-md-annapolis', name: 'Annapolis' }, { id: 'us-md-baltimore', name: 'Baltimore' }, { id: 'us-md-cumberland-valley', name: 'Cumberland Valley' }, { id: 'us-md-eastern-shore', name: 'Eastern Shore' }, { id: 'us-md-frederick', name: 'Frederick' }, { id: 'us-md-western-maryland', name: 'Western Maryland' }]
// Massachusetts (MA)
districts[us_regions[regionIndex++]] = [{ id: 'us-ma-boston', name: 'Boston' }, { id: 'us-ma-brockton', name: 'Brockton' }, { id: 'us-ma-cape-cod', name: 'Cape Cod' }, { id: 'us-ma-lowell', name: 'Lowell' }, { id: 'us-ma-south-coast', name: 'South Coast' }, { id: 'us-ma-springfield', name: 'Springfield' }, { id: 'us-ma-worcester', name: 'Worcester' }]
// Michigan (MI)
districts[us_regions[regionIndex++]] = [{ id: 'us-mi-ann-arbor', name: 'Ann Arbor' }, { id: 'us-mi-battle-creek', name: 'Battle Creek' }, { id: 'us-mi-central-michigan', name: 'Central Michigan' }, { id: 'us-mi-detroit', name: 'Detroit' }, { id: 'us-mi-flint', name: 'Flint' }, { id: 'us-mi-grand-rapids', name: 'Grand Rapids' }, { id: 'us-mi-holland', name: 'Holland' }, { id: 'us-mi-jackson', name: 'Jackson' }, { id: 'us-mi-kalamazoo', name: 'Kalamazoo' }, { id: 'us-mi-lansing', name: 'Lansing' }, { id: 'us-mi-monroe', name: 'Monroe' }, { id: 'us-mi-muskegon', name: 'Muskegon' }, { id: 'us-mi-northern-michigan', name: 'Northern Michigan' }, { id: 'us-mi-port-huron', name: 'Port Huron' }, { id: 'us-mi-saginaw', name: 'Saginaw' }, { id: 'us-mi-southwest-michigan', name: 'Southwest Michigan' }, { id: 'us-mi-upper-peninsula', name: 'Upper Peninsula' }]
// Minnesota (MN)
districts[us_regions[regionIndex++]] = [{ id: 'us-mn-bemidji', name: 'Bemidji' }, { id: 'us-mn-brainerd', name: 'Brainerd' }, { id: 'us-mn-duluth', name: 'Duluth' }, { id: 'us-mn-mankato', name: 'Mankato' }, { id: 'us-mn-minneapolis', name: 'Minneapolis / St. Paul' }, { id: 'us-mn-rochester', name: 'Rochester' }, { id: 'us-mn-st-cloud', name: 'St. Cloud' }]
// Mississippi (MS)
districts[us_regions[regionIndex++]] = [{ id: 'us-ms-biloxi', name: 'Biloxi' }, { id: 'us-ms-hattiesburg', name: 'Hattiesburg' }, { id: 'us-ms-jackson', name: 'Jackson' }, { id: 'us-ms-meridian', name: 'Meridian' }, { id: 'us-ms-north-mississippi', name: 'North Mississippi' }, { id: 'us-ms-southwest-mississippi', name: 'Southwest Mississippi' }]
// Missouri (MO)
districts[us_regions[regionIndex++]] = [{ id: 'us-mo-columbia', name: 'Columbia/Jeff City' }, { id: 'us-mo-joplin', name: 'Joplin' }, { id: 'us-mo-kansas-city', name: 'Kansas City' }, { id: 'us-mo-kirksville', name: 'Kirksville' }, { id: 'us-mo-lake-of-the-ozarks', name: 'Lake Of The Ozarks' }, { id: 'us-mo-southeast-missouri', name: 'Southeast Missouri' }, { id: 'us-mo-springfield', name: 'Springfield' }, { id: 'us-mo-st-joseph', name: 'St Joseph' }, { id: 'us-mo-st-louis', name: 'St. Louis' }]
// Montana (MT)
districts[us_regions[regionIndex++]] = [{ id: 'us-mt-billings', name: 'Billings' }, { id: 'us-mt-bozeman', name: 'Bozeman' }, { id: 'us-mt-butte', name: 'Butte' }, { id: 'us-mt-great-falls', name: 'Great Falls' }, { id: 'us-mt-helena', name: 'Helena' }, { id: 'us-mt-kalispell', name: 'Kalispell' }, { id: 'us-mt-missoula', name: 'Missoula' }]
// Nebraska (NE)
districts[us_regions[regionIndex++]] = [{ id: 'us-ne-grand-island', name: 'Grand Island' }, { id: 'us-ne-lincoln', name: 'Lincoln' }, { id: 'us-ne-north-platte', name: 'North Platte' }, { id: 'us-ne-omaha', name: 'Omaha' }, { id: 'us-ne-scottsbluff', name: 'Scottsbluff' }]
// Nevada (NV)
districts[us_regions[regionIndex++]] = [{ id: 'us-nv-elko', name: 'Elko' }, { id: 'us-nv-las-vegas', name: 'Las Vegas' }, { id: 'us-nv-reno', name: 'Reno' }]
// New Hampshire (NH)
districts[us_regions[regionIndex++]] = [{ id: 'us-nh-manchester', name: 'Manchester' }]
// New Jersey (NJ)
districts[us_regions[regionIndex++]] = [{ id: 'us-nj-atlantic-city', name: 'Atlantic City' }, { id: 'us-nj-central-jersey', name: 'Central Jersey' }, { id: 'us-nj-jersey-shore', name: 'Jersey Shore' }, { id: 'us-nj-north-jersey', name: 'North Jersey' }, { id: 'us-nj-south-jersey', name: 'South Jersey' }]
// New Mexico (NM)
districts[us_regions[regionIndex++]] = [{ id: 'us-nm-albuquerque', name: 'Albuquerque' }, { id: 'us-nm-clovis-portales', name: 'Clovis / Portales' }, { id: 'us-nm-farmington', name: 'Farmington' }, { id: 'us-nm-las-cruces', name: 'Las Cruces' }, { id: 'us-nm-roswell-carlsbad', name: 'Roswell / Carlsbad' }, { id: 'us-nm-santa-fe-taos', name: 'Santa Fe/Taos' }]
// New York (NY)
districts[us_regions[regionIndex++]] = [{ id: 'us-ny-albany', name: 'Albany' }, { id: 'us-ny-binghamton', name: 'Binghamton' }, { id: 'us-ny-bronx', name: 'Bronx' }, { id: 'us-ny-brooklyn', name: 'Brooklyn' }, { id: 'us-ny-buffalo', name: 'Buffalo' }, { id: 'us-ny-catskills', name: 'Catskills' }, { id: 'us-ny-chautauqua', name: 'Chautauqua' }, { id: 'us-ny-elmira', name: 'Elmira' }, { id: 'us-ny-fairfield', name: 'Fairfield' }, { id: 'us-ny-finger-lakes', name: 'Finger Lakes' }, { id: 'us-ny-glens-falls', name: 'Glens Falls' }, { id: 'us-ny-hudson-valley', name: 'Hudson Valley' }, { id: 'us-ny-ithaca', name: 'Ithaca' }, { id: 'us-ny-long-island', name: 'Long Island' }, { id: 'us-ny-manhattan', name: 'Manhattan' }, { id: 'us-ny-oneonta', name: 'Oneonta' }, { id: 'us-ny-plattsburgh', name: 'Plattsburgh' }, { id: 'us-ny-potsdam', name: 'Potsdam' }, { id: 'us-ny-queens', name: 'Queens', manager: '0xD7cBB037dD33b0CA53aF77d7704CA886082F2AD6' }, { id: 'us-ny-rochester', name: 'Rochester' }, { id: 'us-ny-staten-island', name: 'Staten Island' }, { id: 'us-ny-syracuse', name: 'Syracuse' }, { id: 'us-ny-twin-tiers', name: 'Twin Tiers' }, { id: 'us-ny-utica', name: 'Utica' }, { id: 'us-ny-watertown', name: 'Watertown' }, { id: 'us-ny-westchester', name: 'Westchester' }]
// North Carolina (NC)
districts[us_regions[regionIndex++]] = [{ id: 'us-nc-asheville', name: 'Asheville' }, { id: 'us-nc-boone', name: 'Boone' }, { id: 'us-nc-charlotte', name: 'Charlotte' }, { id: 'us-nc-eastern', name: 'Eastern' }, { id: 'us-nc-fayetteville', name: 'Fayetteville' }, { id: 'us-nc-greensboro', name: 'Greensboro' }, { id: 'us-nc-hickory', name: 'Hickory' }, { id: 'us-nc-high-point', name: 'High Point' }, { id: 'us-nc-outer-banks', name: 'Outer Banks' }, { id: 'us-nc-raleigh-durham', name: 'Raleigh-durham' }, { id: 'us-nc-wilmington', name: 'Wilmington' }, { id: 'us-nc-winston-salem', name: 'Winston-Salem' }]
// North Dakota (ND)
districts[us_regions[regionIndex++]] = [{ id: 'us-nd-bismarck', name: 'Bismarck' }, { id: 'us-nd-fargo', name: 'Fargo' }, { id: 'us-nd-grand-forks', name: 'Grand Forks' }, { id: 'us-nd-minot', name: 'Minot' }]
// Ohio (OH)
districts[us_regions[regionIndex++]] = [{ id: 'us-oh-ashtabula', name: 'Ashtabula' }, { id: 'us-oh-athens', name: 'Athens' }, { id: 'us-oh-chillicothe', name: 'Chillicothe' }, { id: 'us-oh-cincinnati', name: 'Cincinnati' }, { id: 'us-oh-cleveland', name: 'Cleveland' }, { id: 'us-oh-columbus', name: 'Columbus' }, { id: 'us-oh-dayton', name: 'Dayton' }, { id: 'us-oh-huntington-ashland', name: 'Huntington/Ashland' }, { id: 'us-oh-mansfield', name: 'Mansfield' }, { id: 'us-oh-sandusky', name: 'Sandusky' }, { id: 'us-oh-toledo', name: 'Toledo' }, { id: 'us-oh-tuscarawas-county', name: 'Tuscarawas County' }, { id: 'us-oh-youngstown', name: 'Youngstown' }, { id: 'us-oh-zanesville-cambridge', name: 'Zanesville/Cambridge' }]
// Oklahoma (OK)
districts[us_regions[regionIndex++]] = [{ id: 'us-ok-lawton', name: 'Lawton' }, { id: 'us-ok-norman', name: 'Norman' }, { id: 'us-ok-oklahoma-city', name: 'Oklahoma City' }, { id: 'us-ok-stillwater', name: 'Stillwater' }, { id: 'us-ok-tulsa', name: 'Tulsa' }]
// Oregon (OR)
districts[us_regions[regionIndex++]] = [{ id: 'us-or-bend', name: 'Bend' }, { id: 'us-or-corvallis', name: 'Corvallis' }, { id: 'us-or-east-oregon', name: 'East Oregon' }, { id: 'us-or-eugene', name: 'Eugene' }, { id: 'us-or-klamath-falls', name: 'Klamath Falls' }, { id: 'us-or-medford', name: 'Medford' }, { id: 'us-or-oregon-coast', name: 'Oregon Coast' }, { id: 'us-or-portland', name: 'Portland' }, { id: 'us-or-roseburg', name: 'Roseburg' }, { id: 'us-or-salem', name: 'Salem' }]
// Pennsylvania (PA)
districts[us_regions[regionIndex++]] = ['Allentown', 'Altoona', 'Chambersburg', 'Erie', 'Harrisburg', 'Lancaster', 'Meadville', 'Penn State', { id: 'us-pa-philadelphia', name: 'Philadelphia' }, 'Pittsburgh', 'Poconos', 'Reading', 'Scranton', 'Williamsport', 'York']
// Rhode Island (RI)
districts[us_regions[regionIndex++]] = [{ id: 'us-ri-providence', name: 'Providence' }, { id: 'us-ri-warwick', name: 'Warwick' }]
// South Carolina (SC)
districts[us_regions[regionIndex++]] = [{ id: 'us-sc-charleston', name: 'Charleston' }, { id: 'us-sc-columbia', name: 'Columbia' }, { id: 'us-sc-florence', name: 'Florence' }, { id: 'us-sc-greenville', name: 'Greenville' }, { id: 'us-sc-hilton-head', name: 'Hilton Head' }, { id: 'us-sc-myrtle-beach', name: 'Myrtle Beach' }]
// South Dakota (SD)
districts[us_regions[regionIndex++]] = [{ id: 'us-sd-aberdeen', name: 'Aberdeen' }, { id: 'us-sd-pierre', name: 'Pierre' }, { id: 'us-sd-rapid-city', name: 'Rapid City' }, { id: 'us-sd-sioux-falls', name: 'Sioux Falls' }]
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
districts[us_regions[regionIndex++]] = [{ id: 'us-wi-appleton', name: 'Appleton' }, { id: 'us-wi-eau-claire', name: 'Eau Claire' }, { id: 'us-wi-green-bay', name: 'Green Bay' }, { id: 'us-wi-janesville', name: 'Janesville' }, { id: 'us-wi-la-crosse', name: 'La Crosse' }, { id: 'us-wi-madison', name: 'Madison' }, { id: 'us-wi-milwaukee', name: 'Milwaukee' }, { id: 'us-wi-racine', name: 'Racine' }, { id: 'us-wi-sheboygan', name: 'Sheboygan' }, { id: 'us-wi-wausau', name: 'Wausau' }]
// Wyoming (WY)
districts[us_regions[regionIndex++]] = [{ id: 'us-wy-cheyenne', name: 'Cheyenne' }]



/* Initialize CA regions array. */
const ca_regions = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Ontario', 'Quebec', 'Saskatchewan', 'Yukon']

/* Re-initialize region index. */
regionIndex = 0

// Alberta (AB)
districts[ca_regions[regionIndex++]] = [{ id: 'ca-ab-calgary', name: 'Calgary' }, { id: 'ca-ab-edmonton', name: 'Edmonton' }, { id: 'ca-ab-ft-mcmurray', name: 'Ft Mcmurray' }, { id: 'ca-ab-grande-prairie', name: 'Grande Prairie' }, { id: 'ca-ab-lethbridge', name: 'Lethbridge' }, { id: 'ca-ab-medicine-hat', name: 'Medicine Hat' }, { id: 'ca-ab-red-deer', name: 'Red Deer' }, { id: 'ca-ab-st-albert', name: 'St. Albert' }]
// British Columbia (BC)
districts[ca_regions[regionIndex++]] = [{ id: 'ca-bc-abbotsford', name: 'Abbotsford' }, { id: 'ca-bc-cariboo', name: 'Cariboo' }, { id: 'ca-bc-comox-valley', name: 'Comox Valley' }, { id: 'ca-bc-cranbrook', name: 'Cranbrook' }, { id: 'ca-bc-kamloops', name: 'Kamloops' }, { id: 'ca-bc-kelowna', name: 'Kelowna' }, { id: 'ca-bc-nanaimo', name: 'Nanaimo' }, { id: 'ca-bc-peace-river-country', name: 'Peace River Country' }, { id: 'ca-bc-prince-george', name: 'Prince George' }, { id: 'ca-bc-skeena', name: 'Skeena' }, { id: 'ca-bc-sunshine-coast', name: 'Sunshine Coast' }, { id: 'ca-bc-vancouver', name: 'Vancouver' }, { id: 'ca-bc-victoria', name: 'Victoria' }, { id: 'ca-bc-whistler', name: 'Whistler' }]
// Manitoba (MB)
districts[ca_regions[regionIndex++]] = [{ id: 'ca-mb-brandon', name: 'Brandon' }, { id: 'ca-mb-winnipeg', name: 'Winnipeg' }]
// New Brunswick (NB)
districts[ca_regions[regionIndex++]] = [{ id: 'ca-nb-fredericton', name: 'Fredericton' }, { id: 'ca-nb-moncton', name: 'Moncton' }, { id: 'ca-nb-st-john', name: 'St. John' }]
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
districts[ca_regions[regionIndex++]] = [{ id: 'ca-sk-prince-albert', name: 'Prince Albert' }, { id: 'ca-sk-regina', name: 'Regina' }, { id: 'ca-sk-saskatoon', name: 'Saskatoon' }]
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
