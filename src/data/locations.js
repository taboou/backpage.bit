/* Initialize US regions array. */
const us_regions = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

/* Initialize districts array. */
const districts = []

/* Initialize region index. */
let regionIndex = 0

// Alabama
districts[us_regions[regionIndex++]] = [{ id: 'us-al-auburn', name: 'Auburn' }, { id: 'us-al-birmingham', name: 'Birmingham' }, { id: 'us-al-dothan', name: 'Dothan' }, { id: 'us-al-gadsden', name: 'Gadsden' }, { id: 'us-al-huntsville', name: 'Huntsville' }, { id: 'us-al-mobile', name: 'Mobile' }, { id: 'us-al-montgomery', name: 'Montgomery' }, { id: 'us-al-muscle-shoals', name: 'Muscle Shoals' }, { id: 'us-al-tuscaloosa', name: 'Tuscaloosa' }]
// Alaska
districts[us_regions[regionIndex++]] = ['Anchorage', 'Fairbanks', 'Juneau', 'Kenai Peninsula']
// Arizona
districts[us_regions[regionIndex++]] = ['Flagstaff/Sedona', 'Mohave County', 'Phoenix', 'Prescott', 'Show Low', 'Sierra Vista', 'Tucson', 'Yuma']
// Arkansas
districts[us_regions[regionIndex++]] = ['Fayetteville', 'Fort Smith', 'Jonesboro', 'Little Rock']
// California
districts[us_regions[regionIndex++]] = [{ id: 'us-ca-bakersfield', name: 'Bakersfield' }, { id: 'us-ca-chico', name: 'Chico' }, { id: 'us-ca-fresno', name: 'Fresno' }, { id: 'us-ca-humboldt-county', name: 'Humboldt County' }, { id: 'us-ca-imperial-county', name: 'Imperial County' }, { id: 'us-ca-inland-empire', name: 'Inland Empire' }, { id: 'us-ca-long-beach', name: 'Long Beach' }, { id: 'us-ca-los-angeles', name: 'Los Angeles' }, { id: 'us-ca-mendocino', name: 'Mendocino' }, { id: 'us-ca-merced', name: 'Merced' }, { id: 'us-ca-modesto', name: 'Modesto' }, { id: 'us-ca-monterey', name: 'Monterey' }, { id: 'us-ca-north-bay', name: 'North Bay' }, { id: 'us-ca-oakland-east-bay', name: 'Oakland/East Bay' }, { id: 'us-ca-orange-county', name: 'Orange County' }, { id: 'us-ca-palm-springs', name: 'Palm Springs' }, { id: 'us-ca-palmdale-lancaster', name: 'Palmdale/lancaster' }, { id: 'us-ca-redding', name: 'Redding' }, { id: 'us-ca-sacramento', name: 'Sacramento' }, { id: 'us-ca-san-diego', name: 'San Diego' }, { id: 'us-ca-san-fernando-valley', name: 'San Fernando Valley' }, { id: 'us-ca-san-francisco', name: 'San Francisco' }, { id: 'us-ca-san-gabriel-valley', name: 'San Gabriel Valley' }, { id: 'us-ca-san-jose', name: 'San Jose' }, { id: 'us-ca-san-luis-obispo', name: 'San Luis Obispo' }, { id: 'us-ca-san-mateo', name: 'San Mateo' }, { id: 'us-ca-santa-barbara', name: 'Santa Barbara' }, { id: 'us-ca-santa-cruz', name: 'Santa Cruz' }, { id: 'us-ca-santa-maria', name: 'Santa Maria' }, { id: 'us-ca-siskiyou', name: 'Siskiyou' }, { id: 'us-ca-stockton', name: 'Stockton' }, { id: 'us-ca-susanville', name: 'Susanville' }, { id: 'us-ca-ventura', name: 'Ventura' }, { id: 'us-ca-visalia', name: 'Visalia' }]
// Colorado
districts[us_regions[regionIndex++]] = ['Boulder', 'Colorado Springs', 'Denver', 'Fort Collins', 'Pueblo', 'Rockies', 'Western Slope']
// Connecticut
districts[us_regions[regionIndex++]] = ['Bridgeport', 'Eastern Connecticut', 'Hartford', 'New Haven', 'Northwest Connecticut']
// Delaware
districts[us_regions[regionIndex++]] = ['']
// District of Columbia
districts[us_regions[regionIndex++]] = [{ id: 'us-dc-northern-virginia', name: 'Northern Virginia' }, { id: 'us-dc-southern-maryland', name: 'Southern Maryland' }, { id: 'us-dc', name: 'Washington D.C.' }]
// Florida
districts[us_regions[regionIndex++]] = [{ id: 'us-fl-daytona', name: 'Daytona' }, { id: 'us-fl-fort-lauderdale', name: 'Fort Lauderdale' }, { id: 'us-fl-fort-myers', name: 'Fort Myers' }, { id: 'us-fl-gainesville', name: 'Gainesville' }, { id: 'us-fl-jacksonville', name: 'Jacksonville' }, { id: 'us-fl-keys', name: 'Keys' }, { id: 'us-fl-lakeland', name: 'Lakeland' }, { id: 'us-fl-miami', name: 'Miami' }, { id: 'us-fl-ocala', name: 'Ocala' }, { id: 'us-fl-okaloosa', name: 'Okaloosa' }, { id: 'us-fl-orlando', name: 'Orlando' }, { id: 'us-fl-palm-bay', name: 'Palm Bay' }, { id: 'us-fl-panama-city', name: 'Panama City' }, { id: 'us-fl-pensacola', name: 'Pensacola' }, { id: 'us-fl-sarasota-bradenton', name: 'Sarasota/Bradenton' }, { id: 'us-fl-space-coast', name: 'Space Coast' }, { id: 'us-fl-st-augustine', name: 'St. Augustine' }, { id: 'us-fl-tallahassee', name: 'Tallahassee' }, { id: 'us-fl-tampa', name: 'Tampa' }, { id: 'us-fl-treasure-coast', name: 'Treasure Coast' }, { id: 'us-fl-west-palm-beach', name: 'West Palm Beach' }]
// Georgia
districts[us_regions[regionIndex++]] = [{ id: 'us-ga-albany', name: 'Albany' }, { id: 'us-ga-athens', name: 'Athens' }, { id: 'us-ga-atlanta', name: 'Atlanta' }, { id: 'us-ga-augusta', name: 'Augusta' }, { id: 'us-ga-brunswick', name: 'Brunswick' }, { id: 'us-ga-columbus', name: 'Columbus' }, { id: 'us-ga-macon', name: 'Macon' }, { id: 'us-ga-northwest-georgia', name: 'Northwest Georgia' }, { id: 'us-ga-savannah', name: 'Savannah' }, { id: 'us-ga-statesboro', name: 'Statesboro' }, { id: 'us-ga-valdosta', name: 'Valdosta' }]
// Hawaii
districts[us_regions[regionIndex++]] = ['Big Island', 'Honolulu', 'Kauai', 'Maui']
// Idaho
districts[us_regions[regionIndex++]] = ['Boise', 'East Idaho', 'Lewiston', 'Twin Falls']
// Illinois
districts[us_regions[regionIndex++]] = ['Bloomington', 'Carbondale', 'Chambana', 'Chicago', 'Decatur', 'La Salle County', 'Mattoon', 'Peoria', 'Rockford', 'Springfield', 'Western Illinois']
// Indiana
districts[us_regions[regionIndex++]] = ['Bloomington', 'Evansville', 'Ft Wayne', 'Indianapolis', 'Kokomo', 'Lafayette', 'Muncie', 'Richmond', 'South Bend', 'Terre Haute']
// Iowa
districts[us_regions[regionIndex++]] = ['Ames', 'Cedar Rapids', 'Desmoines', 'Dubuque', 'Fort Dodge', 'Iowa City', 'Mason City', 'Quad Cities', 'Sioux City', 'Southest Iowa', 'Waterloo']
// Kansas
districts[us_regions[regionIndex++]] = ['Lawrence', 'Manhattan', 'Salina', 'Topeka', 'Wichita']
// Kentucky
districts[us_regions[regionIndex++]] = ['Bowling Green', 'Eastern Kentucky', 'Lexington', 'Louisville', 'Owensboro', 'Western Kentucky']
// Louisiana
districts[us_regions[regionIndex++]] = ['Alexandria', 'Baton Rouge', 'Houma', 'Lafayette', 'Lake Charles', 'Monroe', 'New Orleans', 'Shreveport']
// Maine
districts[us_regions[regionIndex++]] = ['']
// Maryland
districts[us_regions[regionIndex++]] = ['Annapolis', 'Baltimore', 'Cumberland Valley', 'Eastern Shore', 'Frederick', 'Western Maryland']
// Massachusetts
districts[us_regions[regionIndex++]] = ['Boston', 'Brockton', 'Cape Cod', 'Lowell', 'South Coast', 'Springfield', 'Worcester']
// Michigan
districts[us_regions[regionIndex++]] = ['Ann Arbor', 'Battle Creek', 'Central Michigan', 'Detroit', 'Flint', 'Grand Rapids', 'Holland', 'Jackson', 'Kalamazoo', 'Lansing', 'Monroe', 'Muskegon', 'Northern Michigan', 'Port Huron', 'Saginaw', 'Southwest Michigan', 'Upper Peninsula']
// Minnesota
districts[us_regions[regionIndex++]] = ['Bemidji', 'Brainerd', 'Duluth', 'Mankato', 'Minneapolis / St. Paul', 'Rochester', 'St. Cloud']
// Mississippi
districts[us_regions[regionIndex++]] = ['Biloxi', 'Hattiesburg', 'Jackson', 'Meridian', 'North Mississippi', 'Southwest Mississippi']
// Missouri
districts[us_regions[regionIndex++]] = ['Columbia/Jeff City', 'Joplin', 'Kansas City', 'Kirksville', 'Lake Of The Ozarks', 'Southeast Missouri', 'Springfield', 'St Joseph', 'St. Louis']
// Montana
districts[us_regions[regionIndex++]] = ['Billings', 'Bozeman', 'Butte', 'Great Falls', 'Helena', 'Kalispell', 'Missoula']
// Nebraska
districts[us_regions[regionIndex++]] = ['Grand Island', 'Lincoln', 'North Platte', 'Omaha', 'Scottsbluff']
// Nevada
districts[us_regions[regionIndex++]] = ['Elko', 'Las Vegas', 'Reno']
// New Hampshire
districts[us_regions[regionIndex++]] = ['']
// New Jersey
districts[us_regions[regionIndex++]] = [{ id: 'us-nj-central-jersey', name: 'Central Jersey' }, { id: 'us-nj-jersey-shore', name: 'Jersey Shore' }, { id: 'us-nj-north-jersey', name: 'North Jersey' }, { id: 'us-nj-south-jersey', name: 'South Jersey' }]
// New Mexico
districts[us_regions[regionIndex++]] = ['Albuquerque', 'Clovis / Portales', 'Farmington', 'Las Cruces', 'Roswell / Carlsbad', 'Santa Fe/Taos']
// New York
districts[us_regions[regionIndex++]] = [{ id: 'us-ny-albany', name: 'Albany' }, { id: 'us-ny-binghamton', name: 'Binghamton' }, { id: 'us-ny-bronx', name: 'Bronx' }, { id: 'us-ny-brooklyn', name: 'Brooklyn' }, { id: 'us-ny-buffalo', name: 'Buffalo' }, { id: 'us-ny-catskills', name: 'Catskills' }, { id: 'us-ny-chautauqua', name: 'Chautauqua' }, { id: 'us-ny-elmira', name: 'Elmira' }, { id: 'us-ny-fairfield', name: 'Fairfield' }, { id: 'us-ny-finger-lakes', name: 'Finger Lakes' }, { id: 'us-ny-glens-falls', name: 'Glens Falls' }, { id: 'us-ny-hudson-valley', name: 'Hudson Valley' }, { id: 'us-ny-ithaca', name: 'Ithaca' }, { id: 'us-ny-long-island', name: 'Long Island' }, { id: 'us-ny-manhattan', name: 'Manhattan' }, { id: 'us-ny-oneonta', name: 'Oneonta' }, { id: 'us-ny-plattsburgh', name: 'Plattsburgh' }, { id: 'us-ny-potsdam', name: 'Potsdam' }, { id: 'us-ny-queens', name: 'Queens', manager: '0xD7cBB037dD33b0CA53aF77d7704CA886082F2AD6' }, { id: 'us-ny-rochester', name: 'Rochester' }, { id: 'us-ny-staten-island', name: 'Staten Island' }, { id: 'us-ny-syracuse', name: 'Syracuse' }, { id: 'us-ny-twin-tiers', name: 'Twin Tiers' }, { id: 'us-ny-utica', name: 'Utica' }, { id: 'us-ny-watertown', name: 'Watertown' }, { id: 'us-ny-westchester', name: 'Westchester' }]
// North Carolina
districts[us_regions[regionIndex++]] = ['Asheville', 'Boone', 'Charlotte', 'Eastern', 'Fayetteville', 'Greensboro', 'Hickory', 'High Point', 'Outer Banks', 'Raleigh-durham', 'Wilmington', 'Winston-Salem']
// North Dakota
districts[us_regions[regionIndex++]] = ['Bismarck', 'Fargo', 'Grand Forks', 'Minot']
// Ohio
districts[us_regions[regionIndex++]] = ['Ashtabula', 'Athens', 'Chillicothe', 'Cincinnati', 'Cleveland', 'Columbus', 'Dayton', 'Huntington/Ashland', 'Mansfield', 'Sandusky', 'Toledo', 'Tuscarawas County', 'Youngstown', 'Zanesville/Cambridge']
// Oklahoma
districts[us_regions[regionIndex++]] = ['Lawton', 'Norman', 'Oklahoma City', 'Stillwater', 'Tulsa']
// Oregon
districts[us_regions[regionIndex++]] = ['Bend', 'Corvallis', 'East Oregon', 'Eugene', 'Klamath Falls', 'Medford', 'Oregon Coast', 'Portland', 'Roseburg', 'Salem']
// Pennsylvania
districts[us_regions[regionIndex++]] = ['Allentown', 'Altoona', 'Chambersburg', 'Erie', 'Harrisburg', 'Lancaster', 'Meadville', 'Penn State', 'Philadelphia', 'Pittsburgh', 'Poconos', 'Reading', 'Scranton', 'Williamsport', 'York']
// Rhode Island
districts[us_regions[regionIndex++]] = ['Providence', 'Warwick']
// South Carolina
districts[us_regions[regionIndex++]] = ['Charleston', 'Columbia', 'Florence', 'Greenville', 'Hilton Head', 'Myrtle Beach']
// South Dakota
districts[us_regions[regionIndex++]] = ['Aberdeen', 'Pierre', 'Rapid City', 'Sioux Falls']
// Tennessee
districts[us_regions[regionIndex++]] = ['Chattanooga', 'Clarksville', 'Cookeville', 'Johnson City', 'Knoxville', 'Memphis', 'Nashville', 'Tri-Cities']
// Texas
districts[us_regions[regionIndex++]] = ['Abilene', 'Amarillo', 'Austin', 'Beaumont', 'Brownsville', 'College Station', 'Corpus Christi', 'Dallas', 'Del Rio', 'Denton', 'El Paso', 'Fort Worth', 'Galveston', 'Houston', 'Huntsville', 'Killeen', 'Laredo', 'Longview', 'Lubbock', 'Mcallen', 'Mid Cities', 'Odessa', 'San Antonio', 'San Marcos', 'Texarkana', 'Texoma', 'Tyler', 'Victoria', 'Waco', 'Wichita Falls']
// Utah
districts[us_regions[regionIndex++]] = ['Logan', 'Ogden', 'Provo', 'Salt Lake City', 'St. George']
// Vermont
districts[us_regions[regionIndex++]] = ['']
// Virginia
districts[us_regions[regionIndex++]] = ['Charlottesville', 'Chesapeake', 'Danville', 'Fredericksburg', 'Hampton', 'Harrisonburg', 'Lynchburg', 'New River Valley', 'Newport News', 'Norfolk', 'Portsmouth', 'Richmond', 'Roanoke', 'Southwest Virginia', 'Suffolk', 'Virginia Beach']
// Washington
districts[us_regions[regionIndex++]] = ['Bellingham', 'Everett', 'Moses Lake', 'Mt. Vernon', 'Olympia', 'Pullman', 'Seattle', 'Spokane / Coeur d\'Alene', 'Tacoma', 'Tri-Cities', 'Wenatchee', 'Yakima']
// West Virginia
districts[us_regions[regionIndex++]] = ['Charleston', 'Huntington', 'Martinsburg', 'Morgantown', 'Parkersburg', 'Southern West Virginia', 'Wheeling']
// Wisconsin
districts[us_regions[regionIndex++]] = ['Appleton', 'Eau Claire', 'Green Bay', 'Janesville', 'La Crosse', 'Madison', 'Milwaukee', 'Racine', 'Sheboygan', 'Wausau']
// Wyoming
districts[us_regions[regionIndex++]] = ['']



/* Initialize CA regions array. */
const ca_regions = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Ontario', 'Quebec', 'Saskatchewan', 'Yukon']

/* Re-initialize region index. */
regionIndex = 0

// Alberta
districts[ca_regions[regionIndex++]] = ['Calgary', 'Edmonton', 'Ft Mcmurray', 'Grande Prairie', 'Lethbridge', 'Medicine Hat', 'Red Deer', 'St. Albert']
// British Columbia
districts[ca_regions[regionIndex++]] = ['Abbotsford', 'Cariboo', 'Comox Valley', 'Cranbrook', 'Kamloops', 'Kelowna', 'Nanaimo', 'Peace River Country', 'Prince George', 'Skeena', 'Sunshine Coast', 'Vancouver', 'Victoria', 'Whistler']
// Manitoba
districts[ca_regions[regionIndex++]] = ['Brandon', 'Winnipeg']
// New Brunswick
districts[ca_regions[regionIndex++]] = ['Fredericton', 'Moncton', 'St. John']
// Newfoundland and Labrador
districts[ca_regions[regionIndex++]] = ['']
// Northwest Territories
districts[ca_regions[regionIndex++]] = ['']
// Nova Scotia
districts[ca_regions[regionIndex++]] = ['']
// Ontario
districts[ca_regions[regionIndex++]] = [{ id: 'ca-ontario-barrie', name: 'Barrie' }, { id: 'ca-ontario-belleville', name: 'Belleville' }, { id: 'ca-ontario-brantford', name: 'Brantford' }, { id: 'ca-ontario-chatham', name: 'Chatham' }, { id: 'ca-ontario-cornwall', name: 'Cornwall' }, { id: 'ca-ontario-guelph', name: 'Guelph' }, { id: 'ca-ontario-hamilton', name: 'Hamilton' }, { id: 'ca-ontario-kingston', name: 'Kingston' }, { id: 'ca-ontario-kitchener', name: 'Kitchener' }, { id: 'ca-ontario-london', name: 'London' }, { id: 'ca-ontario-niagara', name: 'Niagara' }, { id: 'ca-ontario-ottawa', name: 'Ottawa' }, { id: 'ca-ontario-owen-sound', name: 'Owen Sound' }, { id: 'ca-ontario-peterborough', name: 'Peterborough' }, { id: 'ca-ontario-sarnia', name: 'Sarnia' }, { id: 'ca-ontario-sault-ste-marie', name: 'Sault Ste Marie' }, { id: 'ca-ontario-sudbury', name: 'Sudbury' }, { id: 'ca-ontario-thunder-bay', name: 'Thunder Bay' }, { id: 'us-al-toronto', name: 'Toronto' }, { id: 'us-al-windsor', name: 'Windsor' }]
// Quebec
districts[ca_regions[regionIndex++]] = ['Montreal', 'Quebec City', 'Saguenay', 'Sherbrooke', 'Trois-Rivières']
// Saskatchewan
districts[ca_regions[regionIndex++]] = ['Prince Albert', 'Regina', 'Saskatoon']
// Yukon
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
// France
districts[eu_regions[regionIndex++]] = ['Bordeaux', 'Bretagne', 'Corse', 'Départements d\'Outre Mer', 'Grenoble', 'Lille', 'Loire', 'Lyon', 'Marseille', 'Montpellier', 'Nantes', 'Nice', 'Normandie', 'Paris', 'Strasbourg', 'Toulouse']
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
districts[eu_regions[regionIndex++]] = ['Aberdeen', 'Bath', 'Belfast', 'Birmingham', 'Brighton', 'Bristol', 'Cambridge', 'Devon', 'East Anglia', 'East Midlands', 'Edinburgh', 'Essex', 'Glasgow', 'Hampshire', 'Kent', 'Leeds', 'Liverpool', 'London', 'Manchester', 'Newcastle', 'Oxford', 'Sheffield', 'Wales']



/* Initialize Asian & Mideast regions array. */
const asia_regions = ['Bahrain', 'Bangladesh', 'China', 'Hong Kong', 'India', 'Indonesia', 'Japan', 'Jordan', 'Korea', 'Kuwait', 'Lebanon', 'Macau', 'Malaysia', 'Mongolia', 'Oman', 'Pakistan', 'Philippines', 'Qatar', 'Singapore', 'Taiwan', 'Thailand', 'Turkey', 'United Arab Emirates', 'Vietnam']

/* Re-initialize region index. */
regionIndex = 0

// Albania
districts[asia_regions[regionIndex++]] = ['Manama']
// Bangladesh
districts[asia_regions[regionIndex++]] = ['Bangladesh']
// China
districts[asia_regions[regionIndex++]] = ['Beijing', 'Chengdu', 'Chongqing', 'Dalian', 'Guangzhou', 'Hangzhou', 'Nanjing', 'Shanghai', 'Shenyang', 'Shenzhen', 'Wuhan', 'Xi\'an']
// Hong Kong
districts[asia_regions[regionIndex++]] = [{ id: 'asia-hk', name: 'HK' }, { id: 'asia-hk-kowloon', name: 'Kowloon' }, { id: 'asia-hk-new-territories', name: 'New Territories' }]
// India
districts[asia_regions[regionIndex++]] = ['Ahmedabad', 'Bangalore', 'Bhubaneswar', 'Chandigarh', 'Chennai', 'Delhi', 'Goa', 'Hyderabad', 'Indore', 'Jaipur', 'Kanpur', 'Kerala', 'Kolkata', 'Lucknow', 'Mumbai', 'Nagpur', 'Pune', 'Surat', 'Visakhapatnam']
// Indonesia
districts[asia_regions[regionIndex++]] = ['Bali', 'Bandung', 'Batam', 'Jakarta', 'Makassar', 'Medan', 'Surabaya']
// Japan
districts[asia_regions[regionIndex++]] = ['Fukuoka', 'Hiroshima', 'Nagoya', 'Okinawa', 'Osaka-Kobe-Kyoto', 'Sapporo', 'Sendai', 'Tokyo']
// Jordan
districts[asia_regions[regionIndex++]] = ['Amman']
// Korea
districts[asia_regions[regionIndex++]] = ['Busan', 'Changwon', 'Daegu', 'Daejeon', 'Gwangju', 'Incheon', 'Seoul', 'Suwon', 'Ulsan']
// Kuwait
districts[asia_regions[regionIndex++]] = ['Kuwait']
// Lebanon
districts[asia_regions[regionIndex++]] = ['Beirut', 'Sidon', 'Tripoli']
// Macau
districts[asia_regions[regionIndex++]] = [{ id: 'asia-macau', name: 'Macau' }]
// Malaysia
districts[asia_regions[regionIndex++]] = ['Ipoh', 'Johor Bahru', 'Kota Bharu', 'Kota Kinabalu', 'Kuala Lumpur', 'Kuching', 'Penang', 'Petaling Jaya']
// Mongolia
districts[asia_regions[regionIndex++]] = ['Ulaanbaatar']
// Oman
districts[asia_regions[regionIndex++]] = ['Muscat']
// Pakistan
districts[asia_regions[regionIndex++]] = ['Faisalabad', 'Islamabad', 'Karachi', 'Lahore']
// Philippines
districts[asia_regions[regionIndex++]] = ['Cebu', 'Davao', 'Manila', 'Pampanga']
// Qatar
districts[asia_regions[regionIndex++]] = ['Doha']
// Singapore
districts[asia_regions[regionIndex++]] = [{ id: 'asia-singapore', name: 'Singapore' }]
// Taiwan
districts[asia_regions[regionIndex++]] = [{ id: 'asia-tw-taipei', name: 'Taipei' }]
// Thailand
districts[asia_regions[regionIndex++]] = [{ id: 'asia-thailand-bangkok', name: 'Bangkok' }]
// Turkey
districts[asia_regions[regionIndex++]] = ['Ankara', 'Antalya', 'Istanbul']
// United Arab Emirates
districts[asia_regions[regionIndex++]] = ['Abudhabi', 'Ajman', 'Al Ain', 'Dubai', 'Sharjah']
// Vietnam
districts[asia_regions[regionIndex++]] = [{ id: 'asia-vietnam', name: 'Vietnam' }]



/* Initialize AU & Oceania regions array. */
const au_oceania_regions = ['Australia', 'Guam', 'New Zealand']

/* Re-initialize region index. */
regionIndex = 0

// Australia
districts[au_oceania_regions[regionIndex++]] = ['Adelaide', 'Brisbane', 'Cairns', 'Canberra', 'Darwin', 'Gold Coast', 'Hobart', 'Launceston', 'Melbourne', 'Newcastle', 'Perth', { id: 'au_oceania-au-sydney', name: 'Sydney' }]
// Guam
districts[au_oceania_regions[regionIndex++]] = [{ id: 'au_oceania-guam-dededo-village', name: 'Dededo Village' }]
// New Zealand
districts[au_oceania_regions[regionIndex++]] = [{ id: 'au_oceania-nz-auckland', name: 'Auckland' }, 'Christchurch', 'Dunedin', 'Hamilton', 'Wellington']



/* Initialize Latin America and Caribbean regions array. */
const latin_caribbean_regions = ['Argentina', 'Belize', 'Bolivia', 'Brazil', 'Caribbean', 'Chile', 'Colombia', 'Costa Rica', 'Ecuador', 'El Salvador', 'Guatemala', 'Guyana', 'Honduras', 'Mexico', 'Nicaragua', 'Panama', 'Paraguay', 'Peru', 'Suriname', 'Uruguay', 'Venezuela']

/* Re-initialize region index. */
regionIndex = 0

// Argentina
districts[latin_caribbean_regions[regionIndex++]] = ['Buenos Aires', 'Cordoba', 'Laplata', 'Mendoza', 'Rosario', 'Salta', 'South Argentina', 'Tucuman']
// Belize
districts[latin_caribbean_regions[regionIndex++]] = [{ id: 'latin-carib-belize-city', name: 'Belize City' }]
// Bolivia
districts[latin_caribbean_regions[regionIndex++]] = [{ id: 'latin-carib-bolivia-la-paz', name: 'La Paz' }]
// Brazil
districts[latin_caribbean_regions[regionIndex++]] = ['Bahia', 'Belem', 'Belo Horizonte', 'Brasilia', 'Curitiba', 'Fortaleza', 'Goiânia', 'Manaus', 'Porto Alegre', 'Recife', 'Rio de Janeiro', 'São Paulo']
// Caribbean
districts[latin_caribbean_regions[regionIndex++]] = ['Bahamas', 'Dominican Republic', 'Jamaica', 'Other Caribbean', 'Puerto Rico', 'Virgin Islands']
// Chile
districts[latin_caribbean_regions[regionIndex++]] = ['Antofagasta', 'Chillán', 'Concepcion', 'Iquique', 'La Serena', 'Montt', 'Rancagua', 'Santiago', 'Talca', 'Temuco', 'Valparaiso']
// Colombia
districts[latin_caribbean_regions[regionIndex++]] = ['Barranquilla', 'Bogota', 'Bucaramanga', 'Cali', 'Cartagena', 'Cucuta', 'Ibagué', 'Medellin', 'Neiva', 'Pasto', 'Pereira', 'Santa Marta']
// Costa Rica
districts[latin_caribbean_regions[regionIndex++]] = [{ id: 'latin-carib-costa-rica', name: 'San José' }]
// Ecuador
districts[latin_caribbean_regions[regionIndex++]] = ['Ambato', 'Cuenca', 'Esmeraldas', 'Guayaquil', 'Machala', 'Manta', 'Quito', 'Santo Domingo']
// El Salvador
districts[latin_caribbean_regions[regionIndex++]] = ['San Miguel', 'San Salvador', 'Santa Ana']
// Guatemala
districts[latin_caribbean_regions[regionIndex++]] = [{ id: 'latin-carib-guatemala-city', name: 'Guatemala City' }]
// Guyana
districts[latin_caribbean_regions[regionIndex++]] = [{ id: 'latin-carib-guyana-georgetown', name: 'Georgetown' }]
// Honduras
districts[latin_caribbean_regions[regionIndex++]] = ['Tegucigalpa']
// Mexico
districts[latin_caribbean_regions[regionIndex++]] = ['Acapulco', 'Baja California', 'Chihuahua', 'Ciudad Juárez', 'Df', 'Guadalajara', 'Guanajuato', 'Hermosillo', 'Hidalgo', 'Mazatlán', 'Monterrey', 'Oaxaca', 'Puebla', 'Puerto Vallarta', 'Querétaro', 'San Luis Potosí', 'Tijuana', 'Toluca', 'Vera Cruz', 'Yucatán']
// Nicaragua
districts[latin_caribbean_regions[regionIndex++]] = ['Managua']
// Panama
districts[latin_caribbean_regions[regionIndex++]] = ['Ciudad de Panamá', 'Colón', 'David']
// Paraguay
districts[latin_caribbean_regions[regionIndex++]] = ['Asunción']
// Peru
districts[latin_caribbean_regions[regionIndex++]] = ['Arequipa', 'Chiclayo', 'Chimbote', 'Cusco', 'Huancayo', 'Iquitos', 'Lima', 'Piura', 'Trujillo']
// Suriname
districts[latin_caribbean_regions[regionIndex++]] = ['Paramaribo']
// Uruguay
districts[latin_caribbean_regions[regionIndex++]] = ['Montevideo']
// Venezuela
districts[latin_caribbean_regions[regionIndex++]] = ['Caracas']



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
// South Africa
districts[african_regions[regionIndex++]] = [{ id: 'africa-south-africa-cape-town', name: 'Cape Town' }, { id: 'africa-south-africa-durban', name: 'Durban' }, { id: 'africa-south-africa-johannesburg', name: 'Johannesburg' }, { id: 'africa-south-africa-port-elizabeth', name: 'Port Elizabeth' }, { id: 'africa-south-africa-pretoria', name: 'Pretoria' }]

export default {
    us_regions,
    ca_regions,
    eu_regions,
    asia_regions,
    au_oceania_regions,
    latin_caribbean_regions,
    african_regions,
    districts
}
