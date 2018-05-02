const loadRegion = (regionName) => {
	alert('loading ' + regionName + '...')
	document.location = 'disclaimer.html'
}

/* Initialize US regions array. */
const us_regions = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

/* Initialize cities array. */
const cities = []

/* Initialize region index. */
let regionIndex = 0

// Alabama
cities[us_regions[regionIndex++]] = ['Auburn', 'Birmingham', 'Dothan', 'Gadsden', 'Huntsville', 'Mobile', 'Montgomery', 'Muscle Shoals', 'Tuscaloosa']
// Alaska
cities[us_regions[regionIndex++]] = ['Anchorage', 'Fairbanks', 'Juneau', 'Kenai Peninsula']
// Arizona
cities[us_regions[regionIndex++]] = ['Flagstaff/Sedona', 'Mohave County', 'Phoenix', 'Prescott', 'Show Low', 'Sierra Vista', 'Tucson', 'Yuma']
// Arkansas
cities[us_regions[regionIndex++]] = ['Fayetteville', 'Fort Smith', 'Jonesboro', 'Little Rock']
// California
cities[us_regions[regionIndex++]] = ['Bakersfield', 'Chico', 'Fresno', 'Humboldt County', 'Imperial County', 'Inland Empire', 'Long Beach', 'Los Angeles', 'Mendocino', 'Merced', 'Modesto', 'Monterey', 'North Bay', 'Oakland/East Bay', 'Orange County', 'Palm Springs', 'Palmdale/lancaster', 'Redding', 'Sacramento', 'San Diego', 'San Fernando Valley', 'San Francisco', 'San Gabriel Valley', 'San Jose', 'San Luis Obispo', 'San Mateo', 'Santa Barbara', 'Santa Cruz', 'Santa Maria', 'Siskiyou', 'Stockton', 'Susanville', 'Ventura', 'Visalia']
// Colorado
cities[us_regions[regionIndex++]] = ['Boulder', 'Colorado Springs', 'Denver', 'Fort Collins', 'Pueblo', 'Rockies', 'Western Slope']
// Connecticut
cities[us_regions[regionIndex++]] = ['Bridgeport', 'Eastern Connecticut', 'Hartford', 'New Haven', 'Northwest Connecticut']
// Delaware
cities[us_regions[regionIndex++]] = ['']
// District of Columbia
cities[us_regions[regionIndex++]] = ['Northern Virginia', 'Southern Maryland', 'Washington D.C.']
// Florida
cities[us_regions[regionIndex++]] = ['Daytona', 'Fort Lauderdale', 'Fort Myers', 'Gainesville', 'Jacksonville', 'Keys', 'Lakeland', 'Miami', 'Ocala', 'Okaloosa', 'Orlando', 'Palm Bay', 'Panama City', 'Pensacola', 'Sarasota/Bradenton', 'Space Coast', 'St. Augustine', 'Tallahassee', 'Tampa', 'Treasure Coast', 'West Palm Beach']
// Georgia
cities[us_regions[regionIndex++]] = ['Albany', 'Athens', 'Atlanta', 'Augusta', 'Brunswick', 'Columbus', 'Macon', 'Northwest Georgia', 'Savannah', 'Statesboro', 'Valdosta']
// Hawaii
cities[us_regions[regionIndex++]] = ['Big Island', 'Honolulu', 'Kauai', 'Maui']
// Idaho
cities[us_regions[regionIndex++]] = ['Boise', 'East Idaho', 'Lewiston', 'Twin Falls']
// Illinois
cities[us_regions[regionIndex++]] = ['Bloomington', 'Carbondale', 'Chambana', 'Chicago', 'Decatur', 'La Salle County', 'Mattoon', 'Peoria', 'Rockford', 'Springfield', 'Western Illinois']
// Indiana
cities[us_regions[regionIndex++]] = ['Bloomington', 'Evansville', 'Ft Wayne', 'Indianapolis', 'Kokomo', 'Lafayette', 'Muncie', 'Richmond', 'South Bend', 'Terre Haute']
// Iowa
cities[us_regions[regionIndex++]] = ['Ames', 'Cedar Rapids', 'Desmoines', 'Dubuque', 'Fort Dodge', 'Iowa City', 'Mason City', 'Quad Cities', 'Sioux City', 'Southest Iowa', 'Waterloo']
// Kansas
cities[us_regions[regionIndex++]] = ['Lawrence', 'Manhattan', 'Salina', 'Topeka', 'Wichita']
// Kentucky
cities[us_regions[regionIndex++]] = ['Bowling Green', 'Eastern Kentucky', 'Lexington', 'Louisville', 'Owensboro', 'Western Kentucky']
// Louisiana
cities[us_regions[regionIndex++]] = ['Alexandria', 'Baton Rouge', 'Houma', 'Lafayette', 'Lake Charles', 'Monroe', 'New Orleans', 'Shreveport']
// Maine
cities[us_regions[regionIndex++]] = ['']
// Maryland
cities[us_regions[regionIndex++]] = ['Annapolis', 'Baltimore', 'Cumberland Valley', 'Eastern Shore', 'Frederick', 'Western Maryland']
// Massachusetts
cities[us_regions[regionIndex++]] = ['Boston', 'Brockton', 'Cape Cod', 'Lowell', 'South Coast', 'Springfield', 'Worcester']
// Michigan
cities[us_regions[regionIndex++]] = ['Ann Arbor', 'Battle Creek', 'Central Michigan', 'Detroit', 'Flint', 'Grand Rapids', 'Holland', 'Jackson', 'Kalamazoo', 'Lansing', 'Monroe', 'Muskegon', 'Northern Michigan', 'Port Huron', 'Saginaw', 'Southwest Michigan', 'Upper Peninsula']
// Minnesota
cities[us_regions[regionIndex++]] = ['Bemidji', 'Brainerd', 'Duluth', 'Mankato', 'Minneapolis / St. Paul', 'Rochester', 'St. Cloud']
// Mississippi
cities[us_regions[regionIndex++]] = ['Biloxi', 'Hattiesburg', 'Jackson', 'Meridian', 'North Mississippi', 'Southwest Mississippi']
// Missouri
cities[us_regions[regionIndex++]] = ['Columbia/Jeff City', 'Joplin', 'Kansas City', 'Kirksville', 'Lake Of The Ozarks', 'Southeast Missouri', 'Springfield', 'St Joseph', 'St. Louis']
// Montana
cities[us_regions[regionIndex++]] = ['Billings', 'Bozeman', 'Butte', 'Great Falls', 'Helena', 'Kalispell', 'Missoula']
// Nebraska
cities[us_regions[regionIndex++]] = ['Grand Island', 'Lincoln', 'North Platte', 'Omaha', 'Scottsbluff']
// Nevada
cities[us_regions[regionIndex++]] = ['Elko', 'Las Vegas', 'Reno']
// New Hampshire
cities[us_regions[regionIndex++]] = ['']
// New Jersey
cities[us_regions[regionIndex++]] = ['Central Jersey', 'Jersey Shore', 'North Jersey', 'South Jersey']
// New Mexico
cities[us_regions[regionIndex++]] = ['Albuquerque', 'Clovis / Portales', 'Farmington', 'Las Cruces', 'Roswell / Carlsbad', 'Santa Fe/Taos']
// New York
cities[us_regions[regionIndex++]] = ['Albany', 'Binghamton', 'Bronx', 'Brooklyn', 'Buffalo', 'Catskills', 'Chautauqua', 'Elmira', 'Fairfield', 'Finger Lakes', 'Glens Falls', 'Hudson Valley', 'Ithaca', 'Long Island', 'Manhattan', 'Oneonta', 'Plattsburgh', 'Potsdam', 'Queens', 'Rochester', 'Staten Island', 'Syracuse', 'Twin Tiers', 'Utica', 'Watertown', 'Westchester']
// North Carolina
cities[us_regions[regionIndex++]] = ['Asheville', 'Boone', 'Charlotte', 'Eastern', 'Fayetteville', 'Greensboro', 'Hickory', 'High Point', 'Outer Banks', 'Raleigh-durham', 'Wilmington', 'Winston-Salem']
// North Dakota
cities[us_regions[regionIndex++]] = ['Bismarck', 'Fargo', 'Grand Forks', 'Minot']
// Ohio
cities[us_regions[regionIndex++]] = ['Ashtabula', 'Athens', 'Chillicothe', 'Cincinnati', 'Cleveland', 'Columbus', 'Dayton', 'Huntington/Ashland', 'Mansfield', 'Sandusky', 'Toledo', 'Tuscarawas County', 'Youngstown', 'Zanesville/Cambridge']
// Oklahoma
cities[us_regions[regionIndex++]] = ['Lawton', 'Norman', 'Oklahoma City', 'Stillwater', 'Tulsa']
// Oregon
cities[us_regions[regionIndex++]] = ['Bend', 'Corvallis', 'East Oregon', 'Eugene', 'Klamath Falls', 'Medford', 'Oregon Coast', 'Portland', 'Roseburg', 'Salem']
// Pennsylvania
cities[us_regions[regionIndex++]] = ['Allentown', 'Altoona', 'Chambersburg', 'Erie', 'Harrisburg', 'Lancaster', 'Meadville', 'Penn State', 'Philadelphia', 'Pittsburgh', 'Poconos', 'Reading', 'Scranton', 'Williamsport', 'York']
// Rhode Island
cities[us_regions[regionIndex++]] = ['Providence', 'Warwick']
// South Carolina
cities[us_regions[regionIndex++]] = ['Charleston', 'Columbia', 'Florence', 'Greenville', 'Hilton Head', 'Myrtle Beach']
// South Dakota
cities[us_regions[regionIndex++]] = ['Aberdeen', 'Pierre', 'Rapid City', 'Sioux Falls']
// Tennessee
cities[us_regions[regionIndex++]] = ['Chattanooga', 'Clarksville', 'Cookeville', 'Johnson City', 'Knoxville', 'Memphis', 'Nashville', 'Tri-Cities']
// Texas
cities[us_regions[regionIndex++]] = ['Abilene', 'Amarillo', 'Austin', 'Beaumont', 'Brownsville', 'College Station', 'Corpus Christi', 'Dallas', 'Del Rio', 'Denton', 'El Paso', 'Fort Worth', 'Galveston', 'Houston', 'Huntsville', 'Killeen', 'Laredo', 'Longview', 'Lubbock', 'Mcallen', 'Mid Cities', 'Odessa', 'San Antonio', 'San Marcos', 'Texarkana', 'Texoma', 'Tyler', 'Victoria', 'Waco', 'Wichita Falls']
// Utah
cities[us_regions[regionIndex++]] = ['Logan', 'Ogden', 'Provo', 'Salt Lake City', 'St. George']
// Vermont
cities[us_regions[regionIndex++]] = ['']
// Virginia
cities[us_regions[regionIndex++]] = ['Charlottesville', 'Chesapeake', 'Danville', 'Fredericksburg', 'Hampton', 'Harrisonburg', 'Lynchburg', 'New River Valley', 'Newport News', 'Norfolk', 'Portsmouth', 'Richmond', 'Roanoke', 'Southwest Virginia', 'Suffolk', 'Virginia Beach']
// Washington
cities[us_regions[regionIndex++]] = ['Bellingham', 'Everett', 'Moses Lake', 'Mt. Vernon', 'Olympia', 'Pullman', 'Seattle', 'Spokane / Coeur d\'Alene', 'Tacoma', 'Tri-Cities', 'Wenatchee', 'Yakima']
// West Virginia
cities[us_regions[regionIndex++]] = ['Charleston', 'Huntington', 'Martinsburg', 'Morgantown', 'Parkersburg', 'Southern West Virginia', 'Wheeling']
// Wisconsin
cities[us_regions[regionIndex++]] = ['Appleton', 'Eau Claire', 'Green Bay', 'Janesville', 'La Crosse', 'Madison', 'Milwaukee', 'Racine', 'Sheboygan', 'Wausau']
// Wyoming
cities[us_regions[regionIndex++]] = ['']



/* Initialize CA regions array. */
const ca_regions = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Ontario', 'Quebec', 'Saskatchewan', 'Yukon']

/* Re-initialize region index. */
regionIndex = 0

// Alberta
cities[ca_regions[regionIndex++]] = ['Calgary', 'Edmonton', 'Ft Mcmurray', 'Grande Prairie', 'Lethbridge', 'Medicine Hat', 'Red Deer', 'St. Albert']
// British Columbia
cities[ca_regions[regionIndex++]] = ['Abbotsford', 'Cariboo', 'Comox Valley', 'Cranbrook', 'Kamloops', 'Kelowna', 'Nanaimo', 'Peace River Country', 'Prince George', 'Skeena', 'Sunshine Coast', 'Vancouver', 'Victoria', 'Whistler']
// Manitoba
cities[ca_regions[regionIndex++]] = ['Brandon', 'Winnipeg']
// New Brunswick
cities[ca_regions[regionIndex++]] = ['Fredericton', 'Moncton', 'St. John']
// Newfoundland and Labrador
cities[ca_regions[regionIndex++]] = ['']
// Northwest Territories
cities[ca_regions[regionIndex++]] = ['']
// Nova Scotia
cities[ca_regions[regionIndex++]] = ['']
// Ontario
cities[ca_regions[regionIndex++]] = ['Barrie', 'Belleville', 'Brantford', 'Chatham', 'Cornwall', 'Guelph', 'Hamilton', 'Kingston', 'Kitchener', 'London', 'Niagara', 'Ottawa', 'Owen Sound', 'Peterborough', 'Sarnia', 'Sault Ste Marie', 'Sudbury', 'Thunder Bay', 'Toronto', 'Windsor']
// Quebec
cities[ca_regions[regionIndex++]] = ['Montreal', 'Quebec City', 'Saguenay', 'Sherbrooke', 'Trois-Rivières']
// Saskatchewan
cities[ca_regions[regionIndex++]] = ['Prince Albert', 'Regina', 'Saskatoon']
// Yukon
cities[ca_regions[regionIndex++]] = ['']



/* Initialize EU regions array. */
const eu_regions = ['Albania', 'Austria', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Israel', 'Italy', 'Kosovo', 'Latvia', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta', 'Monaco', 'Montenegro', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'Serbia', 'Slovakia', 'Spain', 'Sweden', 'Switzerland', 'Ukraine', 'United Kingdom']

/* Re-initialize region index. */
regionIndex = 0

// Albania
cities[eu_regions[regionIndex++]] = ['Tiranë']
// Austria
cities[eu_regions[regionIndex++]] = ['Graz', 'Innsbruck', 'Linz', 'Salzburg', 'Wien']
// Belarus
cities[eu_regions[regionIndex++]] = ['Minsk']
// Belgium
cities[eu_regions[regionIndex++]] = ['Antwerp', 'Bruges', 'Brussel', 'Charleroi', 'Ghent', 'Liege', 'Namur']
// Bosnia and Herzegovina
cities[eu_regions[regionIndex++]] = ['Sarajevo']
// Bulgaria
cities[eu_regions[regionIndex++]] = ['Balgariya']
// Croatia
cities[eu_regions[regionIndex++]] = ['Zagreb']
// Cyprus
cities[eu_regions[regionIndex++]] = ['Limassol', 'Nicosia']
// Czech Republic
cities[eu_regions[regionIndex++]] = ['Brno', 'České Budějovice', 'Liberec', 'Olomouc', 'Ostrava', 'Plzeň', 'Praha']
// Denmark
cities[eu_regions[regionIndex++]] = ['Aarhus', 'København']
// Estonia
cities[eu_regions[regionIndex++]] = ['Tallinn']
// Finland
cities[eu_regions[regionIndex++]] = ['Helsinki']
// France
cities[eu_regions[regionIndex++]] = ['Bordeaux', 'Bretagne', 'Corse', 'Départements d\'Outre Mer', 'Grenoble', 'Lille', 'Loire', 'Lyon', 'Marseille', 'Montpellier', 'Nantes', 'Nice', 'Normandie', 'Paris', 'Strasbourg', 'Toulouse']
// Germany
cities[eu_regions[regionIndex++]] = ['Berlin', 'Bodensee', 'Bremen', 'Dortmund', 'Dresden', 'Düsseldorf', 'Essen', 'Frankfurt', 'Freiburg', 'Hamburg', 'Hannover', 'Heidelberg', 'Kaiserslautern', 'Karlsruhe', 'Kiel', 'Köln', 'Leipzig', 'Lübeck', 'Mannheim', 'München', 'Nürnberg', 'Rostock', 'Saarbrücken', 'Schwerin', 'Stuttgart']
// Greece
cities[eu_regions[regionIndex++]] = ['Athens', 'Crete', 'Patras', 'Thessaloniki']
// Hungary
cities[eu_regions[regionIndex++]] = ['Budapest', 'Debrecen', 'Miskolc', 'Szeged']
// Iceland
cities[eu_regions[regionIndex++]] = ['Iceland']
// Ireland
cities[eu_regions[regionIndex++]] = ['Cork', 'Derry', 'Dublin', 'Galway', 'Limerick', 'Lisburn', 'Waterford']
// Israel
cities[eu_regions[regionIndex++]] = ['Haifa', 'Jerusalem', 'Rishon Lezion', 'Telaviv', 'Westbank']
// Italy
cities[eu_regions[regionIndex++]] = ['Bari', 'Bologna', 'Brescia', 'Calabria', 'Firenze', 'Forli-Cesena', 'Genova', 'Milano', 'Napoli', 'Perugia', 'Roma', 'Sardegna', 'Sicilia', 'Torino', 'Trieste', 'Venezia']
// Kosovo
cities[eu_regions[regionIndex++]] = ['Prishtinë']
// Latvia
cities[eu_regions[regionIndex++]] = ['Rīga']
// Lithuania
cities[eu_regions[regionIndex++]] = ['Vilnius']
// Luxembourg
cities[eu_regions[regionIndex++]] = ['Luxembourg']
// Macedonia
cities[eu_regions[regionIndex++]] = ['Скопје']
// Malta
cities[eu_regions[regionIndex++]] = ['Malta']
// Monaco
cities[eu_regions[regionIndex++]] = ['Monaco']
// Montenegro
cities[eu_regions[regionIndex++]] = ['Podgorica']
// Netherlands
cities[eu_regions[regionIndex++]] = ['Amsterdam', 'Den Haag', 'Eindhoven', 'Groningen', 'Rotterdam', 'Utrecht']
// Norway
cities[eu_regions[regionIndex++]] = ['Bergen', 'Oslo']
// Poland
cities[eu_regions[regionIndex++]] = ['Białystok', 'Bydgoszcz', 'Gdańsk', 'Katowice', 'Kraków', 'Łódź', 'Lublin', 'Poznań', 'Szczecin', 'Warszawa', 'Wrocław']
// Portugal
cities[eu_regions[regionIndex++]] = ['Braga', 'Coimbra', 'Faro / Algarve', 'Lisboa', 'Madeira', 'Porto']
// Romania
cities[eu_regions[regionIndex++]] = ['Brașov', 'Bucuresti', 'Cluj-Napoca', 'Constanța', 'Craiova', 'Galați', 'Iași', 'Timișoara']
// Russia
cities[eu_regions[regionIndex++]] = ['Moskva', 'Sankt-peterburg']
// Serbia
cities[eu_regions[regionIndex++]] = ['Beograd']
// Slovakia
cities[eu_regions[regionIndex++]] = ['Bratislava', 'Košice']
// Spain
cities[eu_regions[regionIndex++]] = ['Alicante', 'Barcelona', 'Bilbao', 'Cádiz', 'Canarias', 'Coruña', 'Granada', 'Ibiza', 'Madrid', 'Málaga', 'Mallorca', 'Murcia', 'Oviedo', 'Salamanca', 'San Sebastián', 'Sevilla', 'Valencia', 'Valladolid', 'Zaragoza']
// Sweden
cities[eu_regions[regionIndex++]] = ['Göteborg', 'Helsingborg', 'Jönköping', 'Malmö', 'Norrköping', 'Örebro', 'Stockholm', 'Umeå', 'Uppsala', 'Västerås']
// Switzerland
cities[eu_regions[regionIndex++]] = ['Basel', 'Bern', 'Genève', 'Lausanne', 'Lugano', 'Zürich']
// Ukraine
cities[eu_regions[regionIndex++]] = ['Dnipropetrovsk', 'Donetsk', 'Kharkiv', 'Kyiv', 'Lviv', 'Odessa', 'Zaporizhia']
// United Kingdom
cities[eu_regions[regionIndex++]] = ['Aberdeen', 'Bath', 'Belfast', 'Birmingham', 'Brighton', 'Bristol', 'Cambridge', 'Devon', 'East Anglia', 'East Midlands', 'Edinburgh', 'Essex', 'Glasgow', 'Hampshire', 'Kent', 'Leeds', 'Liverpool', 'London', 'Manchester', 'Newcastle', 'Oxford', 'Sheffield', 'Wales']



/* Initialize Asian & Mideast regions array. */
const asia_mideast_regions = ['Bahrain', 'Bangladesh', 'China', 'Hong Kong', 'India', 'Indonesia', 'Japan', 'Jordan', 'Korea', 'Kuwait', 'Lebanon', 'Macau', 'Malaysia', 'Mongolia', 'Oman', 'Pakistan', 'Philippines', 'Qatar', 'Singapore', 'Taiwan', 'Thailand', 'Turkey', 'United Arab Emirates', 'Vietnam']

/* Re-initialize region index. */
regionIndex = 0

// Albania
cities[asia_mideast_regions[regionIndex++]] = ['Manama']
// Bangladesh
cities[asia_mideast_regions[regionIndex++]] = ['Bangladesh']
// China
cities[asia_mideast_regions[regionIndex++]] = ['Beijing', 'Chengdu', 'Chongqing', 'Dalian', 'Guangzhou', 'Hangzhou', 'Nanjing', 'Shanghai', 'Shenyang', 'Shenzhen', 'Wuhan', 'Xi\'an']
// Hong Kong
cities[asia_mideast_regions[regionIndex++]] = ['HK', 'Kowloon', 'New Territories']
// India
cities[asia_mideast_regions[regionIndex++]] = ['Ahmedabad', 'Bangalore', 'Bhubaneswar', 'Chandigarh', 'Chennai', 'Delhi', 'Goa', 'Hyderabad', 'Indore', 'Jaipur', 'Kanpur', 'Kerala', 'Kolkata', 'Lucknow', 'Mumbai', 'Nagpur', 'Pune', 'Surat', 'Visakhapatnam']
// Indonesia
cities[asia_mideast_regions[regionIndex++]] = ['Bali', 'Bandung', 'Batam', 'Jakarta', 'Makassar', 'Medan', 'Surabaya']
// Japan
cities[asia_mideast_regions[regionIndex++]] = ['Fukuoka', 'Hiroshima', 'Nagoya', 'Okinawa', 'Osaka-Kobe-Kyoto', 'Sapporo', 'Sendai', 'Tokyo']
// Jordan
cities[asia_mideast_regions[regionIndex++]] = ['Amman']
// Korea
cities[asia_mideast_regions[regionIndex++]] = ['Busan', 'Changwon', 'Daegu', 'Daejeon', 'Gwangju', 'Incheon', 'Seoul', 'Suwon', 'Ulsan']
// Kuwait
cities[asia_mideast_regions[regionIndex++]] = ['Kuwait']
// Lebanon
cities[asia_mideast_regions[regionIndex++]] = ['Beirut', 'Sidon', 'Tripoli']
// Macau
cities[asia_mideast_regions[regionIndex++]] = ['Macau']
// Malaysia
cities[asia_mideast_regions[regionIndex++]] = ['Ipoh', 'Johor Bahru', 'Kota Bharu', 'Kota Kinabalu', 'Kuala Lumpur', 'Kuching', 'Penang', 'Petaling Jaya']
// Mongolia
cities[asia_mideast_regions[regionIndex++]] = ['Ulaanbaatar']
// Oman
cities[asia_mideast_regions[regionIndex++]] = ['Muscat']
// Pakistan
cities[asia_mideast_regions[regionIndex++]] = ['Faisalabad', 'Islamabad', 'Karachi', 'Lahore']
// Philippines
cities[asia_mideast_regions[regionIndex++]] = ['Cebu', 'Davao', 'Manila', 'Pampanga']
// Qatar
cities[asia_mideast_regions[regionIndex++]] = ['Doha']
// Singapore
cities[asia_mideast_regions[regionIndex++]] = ['Singapore']
// Taiwan
cities[asia_mideast_regions[regionIndex++]] = ['Taipei']
// Thailand
cities[asia_mideast_regions[regionIndex++]] = ['Bangkok']
// Turkey
cities[asia_mideast_regions[regionIndex++]] = ['Ankara', 'Antalya', 'Istanbul']
// United Arab Emirates
cities[asia_mideast_regions[regionIndex++]] = ['Abudhabi', 'Ajman', 'Al Ain', 'Dubai', 'Sharjah']
// Vietnam
cities[asia_mideast_regions[regionIndex++]] = ['Vietnam']



/* Initialize AU & Oceania regions array. */
const au_oceania_regions = ['Australia', 'Guam', 'New Zealand']

/* Re-initialize region index. */
regionIndex = 0

// Australia
cities[au_oceania_regions[regionIndex++]] = ['Adelaide', 'Brisbane', 'Cairns', 'Canberra', 'Darwin', 'Gold Coast', 'Hobart', 'Launceston', 'Melbourne', 'Newcastle', 'Perth', 'Sydney']
// Guam
cities[au_oceania_regions[regionIndex++]] = ['Guam']
// New Zealand
cities[au_oceania_regions[regionIndex++]] = ['Auckland', 'Christchurch', 'Dunedin', 'Hamilton', 'Wellington']



/* Initialize Latin America and Caribbean regions array. */
const latin_caribbean_regions = ['Argentina', 'Belize', 'Bolivia', 'Brazil', 'Caribbean', 'Chile', 'Colombia', 'Costa Rica', 'Ecuador', 'El Salvador', 'Guatemala', 'Guyana', 'Honduras', 'Mexico', 'Nicaragua', 'Panama', 'Paraguay', 'Peru', 'Suriname', 'Uruguay', 'Venezuela']

/* Re-initialize region index. */
regionIndex = 0

// Argentina
cities[latin_caribbean_regions[regionIndex++]] = ['Buenos Aires', 'Cordoba', 'Laplata', 'Mendoza', 'Rosario', 'Salta', 'South Argentina', 'Tucuman']
// Belize
cities[latin_caribbean_regions[regionIndex++]] = ['Belize']
// Bolivia
cities[latin_caribbean_regions[regionIndex++]] = ['La Paz']
// Brazil
cities[latin_caribbean_regions[regionIndex++]] = ['Bahia', 'Belem', 'Belo Horizonte', 'Brasilia', 'Curitiba', 'Fortaleza', 'Goiânia', 'Manaus', 'Porto Alegre', 'Recife', 'Rio de Janeiro', 'São Paulo']
// Caribbean
cities[latin_caribbean_regions[regionIndex++]] = ['Bahamas', 'Dominican Republic', 'Jamaica', 'Other Caribbean', 'Puerto Rico', 'Virgin Islands']
// Chile
cities[latin_caribbean_regions[regionIndex++]] = ['Antofagasta', 'Chillán', 'Concepcion', 'Iquique', 'La Serena', 'Montt', 'Rancagua', 'Santiago', 'Talca', 'Temuco', 'Valparaiso']
// Colombia
cities[latin_caribbean_regions[regionIndex++]] = ['Barranquilla', 'Bogota', 'Bucaramanga', 'Cali', 'Cartagena', 'Cucuta', 'Ibagué', 'Medellin', 'Neiva', 'Pasto', 'Pereira', 'Santa Marta']
// Costa Rica
cities[latin_caribbean_regions[regionIndex++]] = ['Costa Rica']
// Ecuador
cities[latin_caribbean_regions[regionIndex++]] = ['Ambato', 'Cuenca', 'Esmeraldas', 'Guayaquil', 'Machala', 'Manta', 'Quito', 'Santo Domingo']
// El Salvador
cities[latin_caribbean_regions[regionIndex++]] = ['San Miguel', 'San Salvador', 'Santa Ana']
// Guatemala
cities[latin_caribbean_regions[regionIndex++]] = ['Guatemala']
// Guyana
cities[latin_caribbean_regions[regionIndex++]] = ['Georgetown']
// Honduras
cities[latin_caribbean_regions[regionIndex++]] = ['Tegucigalpa']
// Mexico
cities[latin_caribbean_regions[regionIndex++]] = ['Acapulco', 'Baja California', 'Chihuahua', 'Ciudad Juárez', 'Df', 'Guadalajara', 'Guanajuato', 'Hermosillo', 'Hidalgo', 'Mazatlán', 'Monterrey', 'Oaxaca', 'Puebla', 'Puerto Vallarta', 'Querétaro', 'San Luis Potosí', 'Tijuana', 'Toluca', 'Vera Cruz', 'Yucatán']
// Nicaragua
cities[latin_caribbean_regions[regionIndex++]] = ['Managua']
// Panama
cities[latin_caribbean_regions[regionIndex++]] = ['Ciudad de Panamá', 'Colón', 'David']
// Paraguay
cities[latin_caribbean_regions[regionIndex++]] = ['Asunción']
// Peru
cities[latin_caribbean_regions[regionIndex++]] = ['Arequipa', 'Chiclayo', 'Chimbote', 'Cusco', 'Huancayo', 'Iquitos', 'Lima', 'Piura', 'Trujillo']
// Suriname
cities[latin_caribbean_regions[regionIndex++]] = ['Paramaribo']
// Uruguay
cities[latin_caribbean_regions[regionIndex++]] = ['Montevideo']
// Venezuela
cities[latin_caribbean_regions[regionIndex++]] = ['Caracas']



/* Initialize African regions array. */
const african_regions = ['Cameroon', 'Egypt', 'Ivory Coast', 'Morocco', 'Nigeria', 'South Africa']

/* Re-initialize region index. */
regionIndex = 0

// Cameroon
cities[african_regions[regionIndex++]] = ['Cameroon']
// Egypt
cities[african_regions[regionIndex++]] = ['Cairo']
// Ivory Coast
cities[african_regions[regionIndex++]] = ['Abidjan']
// Morocco
cities[african_regions[regionIndex++]] = ['Morocco']
// Nigeria
cities[african_regions[regionIndex++]] = ['Nigeria']
// South Africa
cities[african_regions[regionIndex++]] = ['Cape Town', 'Durban', 'Johannesburg', 'Port Elizabeth', 'Pretoria']
