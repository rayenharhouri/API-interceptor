// var places_coords = {
//     "Cité Ennozha- Charguia 2": [36.868590, 10.189370, 36.855129 , 10.208570 ] ,
//     "Manar - cité Olympique": [-35.245609, 149.66391,36.836880 ,10.195790 ],
//     "Ennaser 2 - Mutuelleville": [36.862471412327665, 10.165258069146287,36.83822710453311 ,10.16959011554718],
//     "Avenue Mohamed V - Charguia": [30.42195459586142, -9.593340601326231,36.855129 , 10.208570],
//     "Avenue Mohamed V - Ariana": [30.42195459586142, -9.593340601326231,36.868590 , 10.189370],
//     "Avenue Mohamed V - Ennaser": [30.42195459586142, -9.593340601326231,36.862471412327665 , 10.165258069146287],
//     "Avenue Mohamed V - Lac 1": [30.42195459586142, -9.593340601326231,47.3290946751051 ,-74.71160753165057],
//     "Avenue Mohamed V - Megrine": [30.42195459586142, -9.593340601326231,36.7703608 , 10.2316461],
//     "Bardo - Campus Mannouba": [51.5079605, -0.1307454,36.8374262 , 10.0419259],
//     "Avenue Mohamed V - Ben Arous": [30.42195459586142, -9.593340601326231,36.747222 , 10.333333],
//     "Avenue Mohamed V - El Agba": [30.42195459586142, -9.593340601326231,36.78997 , 10.11012],
//     "Rades - El mourouj": [36.7705393, 10.2717678,36.7343425 , 10.2098665],
//     "Avenue Mohamed V - Mannouba": [30.42195459586142, -9.593340601326231,36.8374262 , 10.0419259],
//     "Avenue Mohamed V - El Ghazela": [30.42195459586142, -9.593340601326231, 36.86909057557174 , 10.184107229827873],
//     "Avenue Mohamed V - La Goulette": [36.86909057557174, 10.184107229827873,36.7343425 , 10.2098665],
//     "Avenue Mohamed V - Mnihla": [30.42195459586142, -9.593340601326231,36.8708677 , 10.1156823],
//     "Avenue Mohamed V - Oued ellil": [36.8402617, -10.3100453,36.80298377020614 , 10.131749510765076],
//     "Avenue Mohamed V - La Marsa": [36.80298377020614, -10.131749510765076,36.8808712 , 10.3264621],
//     "Avenue Mohamed V - Mhamdia": [36.8808712, -10.3264621,36.6794742 , 10.1568711],
//     "Rades - Ariana": [36.6794742, -10.1568711,36.868590 , 10.189370],
//     "Avenue Mohamed V - Mornag": [36.868590, 10.189370, 36.6806493 , 10.2901678],
//     "Rades - Gammarth": [36.6806493, -10.2901678,36.92041 , 10.2881],
//     "Rades - Denden": [36.92041, -10.2881,36.80753 , 10.11061],
//     "Avenue Mohamed V - Jedeida": [30.42195459586142 ,-9.593340601326231,36.8515859 , 9.933083]
// } 

// for (const locationName in places_coords) {
//     const coords = places_coords[locationName];
//     const lat1 = coords[0];
//     const long1 = coords[1];
//     const lat2 = coords[2];
//     const long2 = coords[3];
//     const encodedLat1 = encodeURIComponent(lat1);
//     const encodedLong1 = encodeURIComponent(long1);
//     const encodedLat2 = encodeURIComponent(lat2);
//     const encodedLong2 = encodeURIComponent(long2);
//     const encodedLocationName = encodeURIComponent(locationName);
//     console.log(`http://localhost:5000/${encodedLat1}/${encodedLong1}/${encodedLat2}/${encodedLong2}/${encodedLocationName}`)
//     //console.log(`Data for ${locationName},${lat1},${long1},${lat2},${long2}:`);
//   }

const min = 15;
const max = 20;
for (let i = 0; i < 100; i++) {
//console.log(Math.floor(Math.random() * (max - min )) + min)
console.log(Math.floor(Math.random() * (max - min + 1)) + min ) 
}