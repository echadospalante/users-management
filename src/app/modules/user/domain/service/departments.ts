const departments = [
  {
    id: 5,
    name: "Antioquia",
    items: [
      {
        id: 5001,
        name: "Medellín",
      },
      {
        id: 5002,
        name: "Abejorral",
      },
      {
        id: 5004,
        name: "Abriaquí",
      },
      {
        id: 5021,
        name: "Alejandría",
      },
      {
        id: 503,
        name: "Amagá",
      },
      {
        id: 5031,
        name: "Amalfi",
      },
      {
        id: 5034,
        name: "Andes",
      },
      {
        id: 5036,
        name: "Angelópolis",
      },
      {
        id: 5038,
        name: "Angostura",
      },
      {
        id: 504,
        name: "Anorí",
      },
      {
        id: 5044,
        name: "Anza",
      },
      {
        id: 5045,
        name: "Apartadó",
      },
      {
        id: 5051,
        name: "Arboletes",
      },
      {
        id: 5055,
        name: "Argelia",
      },
      {
        id: 5059,
        name: "Armenia",
      },
      {
        id: 5079,
        name: "Barbosa",
      },
      {
        id: 5088,
        name: "Bello",
      },
      {
        id: 5091,
        name: "Betania",
      },
      {
        id: 5093,
        name: "Betulia",
      },
      {
        id: 5101,
        name: "Ciudad Bolívar",
      },
      {
        id: 5107,
        name: "Briceño",
      },
      {
        id: 5113,
        name: "Buriticá",
      },
      {
        id: 512,
        name: "Cáceres",
      },
      {
        id: 5125,
        name: "Caicedo",
      },
      {
        id: 5129,
        name: "Caldas",
      },
      {
        id: 5134,
        name: "Campamento",
      },
      {
        id: 5138,
        name: "Cañasgordas",
      },
      {
        id: 5142,
        name: "Caracolí",
      },
      {
        id: 5145,
        name: "Caramanta",
      },
      {
        id: 5147,
        name: "Carepa",
      },
      {
        id: 515,
        name: "Carolina",
      },
      {
        id: 5154,
        name: "Caucasia",
      },
      {
        id: 5172,
        name: "Chigorodó",
      },
      {
        id: 519,
        name: "Cisneros",
      },
      {
        id: 5197,
        name: "Cocorná",
      },
      {
        id: 5206,
        name: "Concepción",
      },
      {
        id: 5209,
        name: "Concordia",
      },
      {
        id: 5212,
        name: "Copacabana",
      },
      {
        id: 5234,
        name: "Dabeiba",
      },
      {
        id: 5237,
        name: "Don Matías",
      },
      {
        id: 524,
        name: "Ebéjico",
      },
      {
        id: 525,
        name: "El Bagre",
      },
      {
        id: 5264,
        name: "Entrerrios",
      },
      {
        id: 5266,
        name: "Envigado",
      },
      {
        id: 5282,
        name: "Fredonia",
      },
      {
        id: 5306,
        name: "Giraldo",
      },
      {
        id: 5308,
        name: "Girardota",
      },
      {
        id: 531,
        name: "Gómez Plata",
      },
      {
        id: 5315,
        name: "Guadalupe",
      },
      {
        id: 5318,
        name: "Guarne",
      },
      {
        id: 5321,
        name: "Guatapé",
      },
      {
        id: 5347,
        name: "Heliconia",
      },
      {
        id: 5353,
        name: "Hispania",
      },
      {
        id: 536,
        name: "Itagui",
      },
      {
        id: 5361,
        name: "Ituango",
      },
      {
        id: 5086,
        name: "Belmira",
      },
      {
        id: 5368,
        name: "Jericó",
      },
      {
        id: 5376,
        name: "La Ceja",
      },
      {
        id: 538,
        name: "La Estrella",
      },
      {
        id: 539,
        name: "La Pintada",
      },
      {
        id: 54,
        name: "La Unión",
      },
      {
        id: 5411,
        name: "Liborina",
      },
      {
        id: 5425,
        name: "Maceo",
      },
      {
        id: 544,
        name: "Marinilla",
      },
      {
        id: 5467,
        name: "Montebello",
      },
      {
        id: 5475,
        name: "Murindó",
      },
      {
        id: 548,
        name: "Mutatá",
      },
      {
        id: 5483,
        name: "Nariño",
      },
      {
        id: 549,
        name: "Necoclí",
      },
      {
        id: 5495,
        name: "Nechí",
      },
      {
        id: 5501,
        name: "Olaya",
      },
      {
        id: 5541,
        name: "Peñol",
      },
      {
        id: 5543,
        name: "Peque",
      },
      {
        id: 5576,
        name: "Pueblorrico",
      },
      {
        id: 5579,
        name: "Puerto Berrío",
      },
      {
        id: 5585,
        name: "Puerto Nare",
      },
      {
        id: 5591,
        name: "Puerto Triunfo",
      },
      {
        id: 5604,
        name: "Remedios",
      },
      {
        id: 5607,
        name: "Retiro",
      },
      {
        id: 5615,
        name: "Rionegro",
      },
      {
        id: 5628,
        name: "Sabanalarga",
      },
      {
        id: 5631,
        name: "Sabaneta",
      },
      {
        id: 5642,
        name: "Salgar",
      },
      {
        id: 5652,
        name: "San Francisco",
      },
      {
        id: 5656,
        name: "San Jerónimo",
      },
      {
        id: 566,
        name: "San Luis",
      },
      {
        id: 5664,
        name: "San Pedro",
      },
      {
        id: 5667,
        name: "San Rafael",
      },
      {
        id: 567,
        name: "San Roque",
      },
      {
        id: 5674,
        name: "San Vicente",
      },
      {
        id: 5679,
        name: "Santa Bárbara",
      },
      {
        id: 569,
        name: "Santo Domingo",
      },
      {
        id: 5697,
        name: "El Santuario",
      },
      {
        id: 5736,
        name: "Segovia",
      },
      {
        id: 5761,
        name: "Sopetrán",
      },
      {
        id: 5789,
        name: "Támesis",
      },
      {
        id: 579,
        name: "Tarazá",
      },
      {
        id: 5792,
        name: "Tarso",
      },
      {
        id: 5809,
        name: "Titiribí",
      },
      {
        id: 5819,
        name: "Toledo",
      },
      {
        id: 5837,
        name: "Turbo",
      },
      {
        id: 5842,
        name: "Uramita",
      },
      {
        id: 5847,
        name: "Urrao",
      },
      {
        id: 5854,
        name: "Valdivia",
      },
      {
        id: 5856,
        name: "Valparaíso",
      },
      {
        id: 5858,
        name: "Vegachí",
      },
      {
        id: 5861,
        name: "Venecia",
      },
      {
        id: 5885,
        name: "Yalí",
      },
      {
        id: 5887,
        name: "Yarumal",
      },
      {
        id: 589,
        name: "Yolombó",
      },
      {
        id: 5893,
        name: "Yondó",
      },
      {
        id: 5895,
        name: "Zaragoza",
      },
      {
        id: 5665,
        name: "San Pedro de Uraba",
      },
      {
        id: 5042,
        name: "Santafé de Antioquia",
      },
      {
        id: 5686,
        name: "Santa Rosa de Osos",
      },
      {
        id: 5647,
        name: "San Andrés de Cuerquía",
      },
      {
        id: 5873,
        name: "Vigía del Fuerte",
      },
      {
        id: 5658,
        name: "San José de La Montaña",
      },
      {
        id: 5659,
        name: "San Juan de Urabá",
      },
      {
        id: 5148,
        name: "El Carmen de Viboral",
      },
      {
        id: 5649,
        name: "San Carlos",
      },
    ],
  },
  {
    id: 15,
    name: "Boyacá",
    items: [
      {
        id: 15832,
        name: "Tununguá",
      },
      {
        id: 15476,
        name: "Motavita",
      },
      {
        id: 15189,
        name: "Ciénega",
      },
      {
        id: 15001,
        name: "Tunja",
      },
      {
        id: 15022,
        name: "Almeida",
      },
      {
        id: 15047,
        name: "Aquitania",
      },
      {
        id: 15051,
        name: "Arcabuco",
      },
      {
        id: 1509,
        name: "Berbeo",
      },
      {
        id: 15092,
        name: "Betéitiva",
      },
      {
        id: 15097,
        name: "Boavita",
      },
      {
        id: 15104,
        name: "Boyacá",
      },
      {
        id: 15106,
        name: "Briceño",
      },
      {
        id: 15109,
        name: "Buena Vista",
      },
      {
        id: 15114,
        name: "Busbanzá",
      },
      {
        id: 15131,
        name: "Caldas",
      },
      {
        id: 15135,
        name: "Campohermoso",
      },
      {
        id: 15162,
        name: "Cerinza",
      },
      {
        id: 15172,
        name: "Chinavita",
      },
      {
        id: 15176,
        name: "Chiquinquirá",
      },
      {
        id: 1518,
        name: "Chiscas",
      },
      {
        id: 15183,
        name: "Chita",
      },
      {
        id: 15185,
        name: "Chitaraque",
      },
      {
        id: 15187,
        name: "Chivatá",
      },
      {
        id: 15204,
        name: "Cómbita",
      },
      {
        id: 15212,
        name: "Coper",
      },
      {
        id: 15215,
        name: "Corrales",
      },
      {
        id: 15218,
        name: "Covarachía",
      },
      {
        id: 15223,
        name: "Cubará",
      },
      {
        id: 15224,
        name: "Cucaita",
      },
      {
        id: 15226,
        name: "Cuítiva",
      },
      {
        id: 15232,
        name: "Chíquiza",
      },
      {
        id: 15236,
        name: "Chivor",
      },
      {
        id: 15238,
        name: "Duitama",
      },
      {
        id: 15244,
        name: "El Cocuy",
      },
      {
        id: 15248,
        name: "El Espino",
      },
      {
        id: 15272,
        name: "Firavitoba",
      },
      {
        id: 15276,
        name: "Floresta",
      },
      {
        id: 15293,
        name: "Gachantivá",
      },
      {
        id: 15296,
        name: "Gameza",
      },
      {
        id: 15299,
        name: "Garagoa",
      },
      {
        id: 15317,
        name: "Guacamayas",
      },
      {
        id: 15322,
        name: "Guateque",
      },
      {
        id: 15325,
        name: "Guayatá",
      },
      {
        id: 15332,
        name: "Güicán",
      },
      {
        id: 15362,
        name: "Iza",
      },
      {
        id: 15367,
        name: "Jenesano",
      },
      {
        id: 15368,
        name: "Jericó",
      },
      {
        id: 15377,
        name: "Labranzagrande",
      },
      {
        id: 1538,
        name: "La Capilla",
      },
      {
        id: 15401,
        name: "La Victoria",
      },
      {
        id: 15425,
        name: "Macanal",
      },
      {
        id: 15442,
        name: "Maripí",
      },
      {
        id: 15455,
        name: "Miraflores",
      },
      {
        id: 15464,
        name: "Mongua",
      },
      {
        id: 15466,
        name: "Monguí",
      },
      {
        id: 15469,
        name: "Moniquirá",
      },
      {
        id: 1548,
        name: "Muzo",
      },
      {
        id: 15491,
        name: "Nobsa",
      },
      {
        id: 15494,
        name: "Nuevo Colón",
      },
      {
        id: 155,
        name: "Oicatá",
      },
      {
        id: 15507,
        name: "Otanche",
      },
      {
        id: 15511,
        name: "Pachavita",
      },
      {
        id: 15514,
        name: "Páez",
      },
      {
        id: 15516,
        name: "Paipa",
      },
      {
        id: 15518,
        name: "Pajarito",
      },
      {
        id: 15522,
        name: "Panqueba",
      },
      {
        id: 15531,
        name: "Pauna",
      },
      {
        id: 15533,
        name: "Paya",
      },
      {
        id: 15542,
        name: "Pesca",
      },
      {
        id: 1555,
        name: "Pisba",
      },
      {
        id: 15572,
        name: "Puerto Boyacá",
      },
      {
        id: 1558,
        name: "Quípama",
      },
      {
        id: 15599,
        name: "Ramiriquí",
      },
      {
        id: 156,
        name: "Ráquira",
      },
      {
        id: 15621,
        name: "Rondón",
      },
      {
        id: 15632,
        name: "Saboyá",
      },
      {
        id: 15638,
        name: "Sáchica",
      },
      {
        id: 15646,
        name: "Samacá",
      },
      {
        id: 1566,
        name: "San Eduardo",
      },
      {
        id: 15673,
        name: "San Mateo",
      },
      {
        id: 15686,
        name: "Santana",
      },
      {
        id: 1569,
        name: "Santa María",
      },
      {
        id: 15696,
        name: "Santa Sofía",
      },
      {
        id: 1572,
        name: "Sativanorte",
      },
      {
        id: 15723,
        name: "Sativasur",
      },
      {
        id: 1574,
        name: "Siachoque",
      },
      {
        id: 15753,
        name: "Soatá",
      },
      {
        id: 15755,
        name: "Socotá",
      },
      {
        id: 15757,
        name: "Socha",
      },
      {
        id: 15759,
        name: "Sogamoso",
      },
      {
        id: 15761,
        name: "Somondoco",
      },
      {
        id: 15762,
        name: "Sora",
      },
      {
        id: 15763,
        name: "Sotaquirá",
      },
      {
        id: 15764,
        name: "Soracá",
      },
      {
        id: 15774,
        name: "Susacón",
      },
      {
        id: 15776,
        name: "Sutamarchán",
      },
      {
        id: 15778,
        name: "Sutatenza",
      },
      {
        id: 1579,
        name: "Tasco",
      },
      {
        id: 15798,
        name: "Tenza",
      },
      {
        id: 15804,
        name: "Tibaná",
      },
      {
        id: 15808,
        name: "Tinjacá",
      },
      {
        id: 1581,
        name: "Tipacoque",
      },
      {
        id: 15814,
        name: "Toca",
      },
      {
        id: 1582,
        name: "Tópaga",
      },
      {
        id: 15822,
        name: "Tota",
      },
      {
        id: 15835,
        name: "Turmequé",
      },
      {
        id: 15839,
        name: "Tutazá",
      },
      {
        id: 15842,
        name: "Umbita",
      },
      {
        id: 15861,
        name: "Ventaquemada",
      },
      {
        id: 15879,
        name: "Viracachá",
      },
      {
        id: 15897,
        name: "Zetaquira",
      },
      {
        id: 15816,
        name: "Togüí",
      },
      {
        id: 15407,
        name: "Villa de Leyva",
      },
      {
        id: 15537,
        name: "Paz de Río",
      },
      {
        id: 15693,
        name: "Santa Rosa de Viterbo",
      },
      {
        id: 15681,
        name: "San Pablo de Borbur",
      },
      {
        id: 15667,
        name: "San Luis de Gaceno",
      },
      {
        id: 15664,
        name: "San José de Pare",
      },
      {
        id: 15676,
        name: "San Miguel de Sema",
      },
      {
        id: 15837,
        name: "Tuta",
      },
    ],
  },
  {
    id: 23,
    name: "Córdoba",
    items: [
      {
        id: 23675,
        name: "San Bernardo del Viento",
      },
      {
        id: 23001,
        name: "Montería",
      },
      {
        id: 23068,
        name: "Ayapel",
      },
      {
        id: 23079,
        name: "Buenavista",
      },
      {
        id: 2309,
        name: "Canalete",
      },
      {
        id: 23162,
        name: "Cereté",
      },
      {
        id: 23168,
        name: "Chimá",
      },
      {
        id: 23182,
        name: "Chinú",
      },
      {
        id: 233,
        name: "Cotorra",
      },
      {
        id: 23417,
        name: "Lorica",
      },
      {
        id: 23419,
        name: "Los Córdobas",
      },
      {
        id: 23464,
        name: "Momil",
      },
      {
        id: 235,
        name: "Moñitos",
      },
      {
        id: 23555,
        name: "Planeta Rica",
      },
      {
        id: 2357,
        name: "Pueblo Nuevo",
      },
      {
        id: 23574,
        name: "Puerto Escondido",
      },
      {
        id: 23586,
        name: "Purísima",
      },
      {
        id: 2366,
        name: "Sahagún",
      },
      {
        id: 2367,
        name: "San Andrés Sotavento",
      },
      {
        id: 23672,
        name: "San Antero",
      },
      {
        id: 23686,
        name: "San Pelayo",
      },
      {
        id: 23807,
        name: "Tierralta",
      },
      {
        id: 23815,
        name: "Tuchín",
      },
      {
        id: 23855,
        name: "Valencia",
      },
      {
        id: 23682,
        name: "San José de Uré",
      },
      {
        id: 23189,
        name: "Ciénaga de Oro",
      },
      {
        id: 23678,
        name: "San Carlos",
      },
    ],
  },
  {
    id: 27,
    name: "Chocó",
    items: [
      {
        id: 27361,
        name: "Istmina",
      },
      {
        id: 27001,
        name: "Quibdó",
      },
      {
        id: 27006,
        name: "Acandí",
      },
      {
        id: 27025,
        name: "Alto Baudo",
      },
      {
        id: 2705,
        name: "Atrato",
      },
      {
        id: 27073,
        name: "Bagadó",
      },
      {
        id: 27075,
        name: "Bahía Solano",
      },
      {
        id: 27077,
        name: "Bajo Baudó",
      },
      {
        id: 27099,
        name: "Bojaya",
      },
      {
        id: 2716,
        name: "Cértegui",
      },
      {
        id: 27205,
        name: "Condoto",
      },
      {
        id: 27372,
        name: "Juradó",
      },
      {
        id: 27413,
        name: "Lloró",
      },
      {
        id: 27425,
        name: "Medio Atrato",
      },
      {
        id: 2743,
        name: "Medio Baudó",
      },
      {
        id: 2745,
        name: "Medio San Juan",
      },
      {
        id: 27491,
        name: "Nóvita",
      },
      {
        id: 27495,
        name: "Nuquí",
      },
      {
        id: 2758,
        name: "Río Iro",
      },
      {
        id: 276,
        name: "Río Quito",
      },
      {
        id: 27615,
        name: "Riosucio",
      },
      {
        id: 27745,
        name: "Sipí",
      },
      {
        id: 278,
        name: "Unguía",
      },
      {
        id: 2725,
        name: "El Litoral del San Juan",
      },
      {
        id: 27135,
        name: "El Cantón del San Pablo",
      },
      {
        id: 27245,
        name: "El Carmen de Atrato",
      },
      {
        id: 2766,
        name: "San José del Palmar",
      },
      {
        id: 27086,
        name: "Belén de Bajira",
      },
    ],
  },
  {
    id: 52,
    name: "Nariño",
    items: [
      {
        id: 52699,
        name: "Santacruz",
      },
      {
        id: 52001,
        name: "Pasto",
      },
      {
        id: 52019,
        name: "Albán",
      },
      {
        id: 52022,
        name: "Aldana",
      },
      {
        id: 52036,
        name: "Ancuyá",
      },
      {
        id: 52079,
        name: "Barbacoas",
      },
      {
        id: 52203,
        name: "Colón",
      },
      {
        id: 52207,
        name: "Consaca",
      },
      {
        id: 5221,
        name: "Contadero",
      },
      {
        id: 52215,
        name: "Córdoba",
      },
      {
        id: 52224,
        name: "Cuaspud",
      },
      {
        id: 52227,
        name: "Cumbal",
      },
      {
        id: 52233,
        name: "Cumbitara",
      },
      {
        id: 5225,
        name: "El Charco",
      },
      {
        id: 52254,
        name: "El Peñol",
      },
      {
        id: 52256,
        name: "El Rosario",
      },
      {
        id: 5226,
        name: "El Tambo",
      },
      {
        id: 52287,
        name: "Funes",
      },
      {
        id: 52317,
        name: "Guachucal",
      },
      {
        id: 5232,
        name: "Guaitarilla",
      },
      {
        id: 52323,
        name: "Gualmatán",
      },
      {
        id: 52352,
        name: "Iles",
      },
      {
        id: 52354,
        name: "Imués",
      },
      {
        id: 52356,
        name: "Ipiales",
      },
      {
        id: 52378,
        name: "La Cruz",
      },
      {
        id: 52381,
        name: "La Florida",
      },
      {
        id: 52385,
        name: "La Llanada",
      },
      {
        id: 5239,
        name: "La Tola",
      },
      {
        id: 52399,
        name: "La Unión",
      },
      {
        id: 52405,
        name: "Leiva",
      },
      {
        id: 52411,
        name: "Linares",
      },
      {
        id: 52418,
        name: "Los Andes",
      },
      {
        id: 52427,
        name: "Magüí",
      },
      {
        id: 52435,
        name: "Mallama",
      },
      {
        id: 52473,
        name: "Mosquera",
      },
      {
        id: 5248,
        name: "Nariño",
      },
      {
        id: 5249,
        name: "Olaya Herrera",
      },
      {
        id: 52506,
        name: "Ospina",
      },
      {
        id: 5252,
        name: "Francisco Pizarro",
      },
      {
        id: 5254,
        name: "Policarpa",
      },
      {
        id: 5256,
        name: "Potosí",
      },
      {
        id: 52565,
        name: "Providencia",
      },
      {
        id: 52573,
        name: "Puerres",
      },
      {
        id: 52585,
        name: "Pupiales",
      },
      {
        id: 52612,
        name: "Ricaurte",
      },
      {
        id: 52621,
        name: "Roberto Payán",
      },
      {
        id: 52678,
        name: "Samaniego",
      },
      {
        id: 52683,
        name: "Sandoná",
      },
      {
        id: 52685,
        name: "San Bernardo",
      },
      {
        id: 52687,
        name: "San Lorenzo",
      },
      {
        id: 52693,
        name: "San Pablo",
      },
      {
        id: 52696,
        name: "Santa Bárbara",
      },
      {
        id: 5272,
        name: "Sapuyes",
      },
      {
        id: 52786,
        name: "Taminango",
      },
      {
        id: 52788,
        name: "Tangua",
      },
      {
        id: 52838,
        name: "Túquerres",
      },
      {
        id: 52885,
        name: "Yacuanquer",
      },
      {
        id: 52694,
        name: "San Pedro de Cartago",
      },
      {
        id: 52258,
        name: "El Tablón de Gómez",
      },
    ],
  },
  {
    id: 68,
    name: "Santander",
    items: [
      {
        id: 68575,
        name: "Puerto Wilches",
      },
      {
        id: 68573,
        name: "Puerto Parra",
      },
      {
        id: 68001,
        name: "Bucaramanga",
      },
      {
        id: 68013,
        name: "Aguada",
      },
      {
        id: 6802,
        name: "Albania",
      },
      {
        id: 68051,
        name: "Aratoca",
      },
      {
        id: 68077,
        name: "Barbosa",
      },
      {
        id: 68079,
        name: "Barichara",
      },
      {
        id: 68081,
        name: "Barrancabermeja",
      },
      {
        id: 68092,
        name: "Betulia",
      },
      {
        id: 68101,
        name: "Bolívar",
      },
      {
        id: 68121,
        name: "Cabrera",
      },
      {
        id: 68132,
        name: "California",
      },
      {
        id: 68152,
        name: "Carcasí",
      },
      {
        id: 6816,
        name: "Cepitá",
      },
      {
        id: 68162,
        name: "Cerrito",
      },
      {
        id: 68167,
        name: "Charalá",
      },
      {
        id: 68169,
        name: "Charta",
      },
      {
        id: 68179,
        name: "Chipatá",
      },
      {
        id: 6819,
        name: "Cimitarra",
      },
      {
        id: 68207,
        name: "Concepción",
      },
      {
        id: 68209,
        name: "Confines",
      },
      {
        id: 68211,
        name: "Contratación",
      },
      {
        id: 68217,
        name: "Coromoro",
      },
      {
        id: 68229,
        name: "Curití",
      },
      {
        id: 68245,
        name: "El Guacamayo",
      },
      {
        id: 68255,
        name: "El Playón",
      },
      {
        id: 68264,
        name: "Encino",
      },
      {
        id: 68266,
        name: "Enciso",
      },
      {
        id: 68271,
        name: "Florián",
      },
      {
        id: 68276,
        name: "Floridablanca",
      },
      {
        id: 68296,
        name: "Galán",
      },
      {
        id: 68298,
        name: "Gambita",
      },
      {
        id: 68307,
        name: "Girón",
      },
      {
        id: 68318,
        name: "Guaca",
      },
      {
        id: 6832,
        name: "Guadalupe",
      },
      {
        id: 68322,
        name: "Guapotá",
      },
      {
        id: 68324,
        name: "Guavatá",
      },
      {
        id: 68327,
        name: "Güepsa",
      },
      {
        id: 68368,
        name: "Jesús María",
      },
      {
        id: 6837,
        name: "Jordán",
      },
      {
        id: 68377,
        name: "La Belleza",
      },
      {
        id: 68385,
        name: "Landázuri",
      },
      {
        id: 68397,
        name: "La Paz",
      },
      {
        id: 68406,
        name: "Lebríja",
      },
      {
        id: 68418,
        name: "Los Santos",
      },
      {
        id: 68425,
        name: "Macaravita",
      },
      {
        id: 68432,
        name: "Málaga",
      },
      {
        id: 68444,
        name: "Matanza",
      },
      {
        id: 68464,
        name: "Mogotes",
      },
      {
        id: 68468,
        name: "Molagavita",
      },
      {
        id: 68498,
        name: "Ocamonte",
      },
      {
        id: 685,
        name: "Oiba",
      },
      {
        id: 68502,
        name: "Onzaga",
      },
      {
        id: 68522,
        name: "Palmar",
      },
      {
        id: 68533,
        name: "Páramo",
      },
      {
        id: 68547,
        name: "Piedecuesta",
      },
      {
        id: 68549,
        name: "Pinchote",
      },
      {
        id: 68572,
        name: "Puente Nacional",
      },
      {
        id: 68615,
        name: "Rionegro",
      },
      {
        id: 68669,
        name: "San Andrés",
      },
      {
        id: 68679,
        name: "San Gil",
      },
      {
        id: 68682,
        name: "San Joaquín",
      },
      {
        id: 68686,
        name: "San Miguel",
      },
      {
        id: 68705,
        name: "Santa Bárbara",
      },
      {
        id: 68745,
        name: "Simacota",
      },
      {
        id: 68755,
        name: "Socorro",
      },
      {
        id: 6877,
        name: "Suaita",
      },
      {
        id: 68773,
        name: "Sucre",
      },
      {
        id: 6878,
        name: "Suratá",
      },
      {
        id: 6882,
        name: "Tona",
      },
      {
        id: 68861,
        name: "Vélez",
      },
      {
        id: 68867,
        name: "Vetas",
      },
      {
        id: 68872,
        name: "Villanueva",
      },
      {
        id: 68895,
        name: "Zapatoca",
      },
      {
        id: 68524,
        name: "Palmas del Socorro",
      },
      {
        id: 68689,
        name: "San Vicente de Chucurí",
      },
      {
        id: 68684,
        name: "San José de Miranda",
      },
      {
        id: 6872,
        name: "Santa Helena del Opón",
      },
      {
        id: 68655,
        name: "Sabana de Torres",
      },
      {
        id: 68235,
        name: "El Carmen de Chucurí",
      },
      {
        id: 68855,
        name: "Valle de San José",
      },
      {
        id: 68673,
        name: "San Benito",
      },
      {
        id: 68344,
        name: "Hato",
      },
    ],
  },
  {
    id: 50,
    name: "Meta",
    items: [
      {
        id: 5037,
        name: "Uribe",
      },
      {
        id: 50001,
        name: "Villavicencio",
      },
      {
        id: 50006,
        name: "Acacias",
      },
      {
        id: 50124,
        name: "Cabuyaro",
      },
      {
        id: 50223,
        name: "Cubarral",
      },
      {
        id: 50226,
        name: "Cumaral",
      },
      {
        id: 50245,
        name: "El Calvario",
      },
      {
        id: 50251,
        name: "El Castillo",
      },
      {
        id: 5027,
        name: "El Dorado",
      },
      {
        id: 50313,
        name: "Granada",
      },
      {
        id: 50318,
        name: "Guamal",
      },
      {
        id: 50325,
        name: "Mapiripán",
      },
      {
        id: 5033,
        name: "Mesetas",
      },
      {
        id: 5035,
        name: "La Macarena",
      },
      {
        id: 504,
        name: "Lejanías",
      },
      {
        id: 5045,
        name: "Puerto Concordia",
      },
      {
        id: 50568,
        name: "Puerto Gaitán",
      },
      {
        id: 50573,
        name: "Puerto López",
      },
      {
        id: 50577,
        name: "Puerto Lleras",
      },
      {
        id: 5059,
        name: "Puerto Rico",
      },
      {
        id: 50606,
        name: "Restrepo",
      },
      {
        id: 50686,
        name: "San Juanito",
      },
      {
        id: 50689,
        name: "San Martín",
      },
      {
        id: 50711,
        name: "Vista Hermosa",
      },
      {
        id: 5011,
        name: "Barranca de Upía",
      },
      {
        id: 50287,
        name: "Fuente de Oro",
      },
      {
        id: 5068,
        name: "San Carlos de Guaroa",
      },
      {
        id: 50683,
        name: "San Juan de Arama",
      },
    ],
  },
  {
    id: 8,
    name: "Atlántico",
    items: [
      {
        id: 8001,
        name: "Barranquilla",
      },
      {
        id: 8078,
        name: "Baranoa",
      },
      {
        id: 8141,
        name: "Candelaria",
      },
      {
        id: 8296,
        name: "Galapa",
      },
      {
        id: 8421,
        name: "Luruaco",
      },
      {
        id: 8433,
        name: "Malambo",
      },
      {
        id: 8436,
        name: "Manatí",
      },
      {
        id: 8549,
        name: "Piojó",
      },
      {
        id: 8558,
        name: "Polonuevo",
      },
      {
        id: 8634,
        name: "Sabanagrande",
      },
      {
        id: 8638,
        name: "Sabanalarga",
      },
      {
        id: 8675,
        name: "Santa Lucía",
      },
      {
        id: 8685,
        name: "Santo Tomás",
      },
      {
        id: 8758,
        name: "Soledad",
      },
      {
        id: 877,
        name: "Suan",
      },
      {
        id: 8832,
        name: "Tubará",
      },
      {
        id: 8849,
        name: "Usiacurí",
      },
      {
        id: 8372,
        name: "Juan de Acosta",
      },
      {
        id: 852,
        name: "Palmar de Varela",
      },
      {
        id: 8137,
        name: "Campo de La Cruz",
      },
    ],
  },
  {
    id: 13,
    name: "Bolívar",
    items: [
      {
        id: 13006,
        name: "Achí",
      },
      {
        id: 13042,
        name: "Arenal",
      },
      {
        id: 13052,
        name: "Arjona",
      },
      {
        id: 13062,
        name: "Arroyohondo",
      },
      {
        id: 1314,
        name: "Calamar",
      },
      {
        id: 1316,
        name: "Cantagallo",
      },
      {
        id: 13188,
        name: "Cicuco",
      },
      {
        id: 13212,
        name: "Córdoba",
      },
      {
        id: 13222,
        name: "Clemencia",
      },
      {
        id: 13248,
        name: "El Guamo",
      },
      {
        id: 1343,
        name: "Magangué",
      },
      {
        id: 13433,
        name: "Mahates",
      },
      {
        id: 1344,
        name: "Margarita",
      },
      {
        id: 13458,
        name: "Montecristo",
      },
      {
        id: 13468,
        name: "Mompós",
      },
      {
        id: 13473,
        name: "Morales",
      },
      {
        id: 1349,
        name: "Norosí",
      },
      {
        id: 13549,
        name: "Pinillos",
      },
      {
        id: 1358,
        name: "Regidor",
      },
      {
        id: 136,
        name: "Río Viejo",
      },
      {
        id: 13647,
        name: "San Estanislao",
      },
      {
        id: 1365,
        name: "San Fernando",
      },
      {
        id: 13657,
        name: "San Juan Nepomuceno",
      },
      {
        id: 13673,
        name: "Santa Catalina",
      },
      {
        id: 13683,
        name: "Santa Rosa",
      },
      {
        id: 13744,
        name: "Simití",
      },
      {
        id: 1376,
        name: "Soplaviento",
      },
      {
        id: 1378,
        name: "Talaigua Nuevo",
      },
      {
        id: 1381,
        name: "Tiquisio",
      },
      {
        id: 13836,
        name: "Turbaco",
      },
      {
        id: 13838,
        name: "Turbaná",
      },
      {
        id: 13873,
        name: "Villanueva",
      },
      {
        id: 13074,
        name: "Barranco de Loba",
      },
      {
        id: 13688,
        name: "Santa Rosa del Sur",
      },
      {
        id: 133,
        name: "Hatillo de Loba",
      },
      {
        id: 13244,
        name: "El Carmen de Bolívar",
      },
      {
        id: 13667,
        name: "San Martín de Loba",
      },
      {
        id: 1303,
        name: "Altos del Rosario",
      },
      {
        id: 13655,
        name: "San Jacinto del Cauca",
      },
      {
        id: 1367,
        name: "San Pablo de Borbur",
      },
      {
        id: 13654,
        name: "San Jacinto",
      },
    ],
  },
  {
    id: 17,
    name: "Caldas",
    items: [
      {
        id: 17001,
        name: "Manizales",
      },
      {
        id: 17013,
        name: "Aguadas",
      },
      {
        id: 17042,
        name: "Anserma",
      },
      {
        id: 1705,
        name: "Aranzazu",
      },
      {
        id: 17088,
        name: "Belalcázar",
      },
      {
        id: 17174,
        name: "Chinchiná",
      },
      {
        id: 17272,
        name: "Filadelfia",
      },
      {
        id: 1738,
        name: "La Dorada",
      },
      {
        id: 17388,
        name: "La Merced",
      },
      {
        id: 17433,
        name: "Manzanares",
      },
      {
        id: 17442,
        name: "Marmato",
      },
      {
        id: 17446,
        name: "Marulanda",
      },
      {
        id: 17486,
        name: "Neira",
      },
      {
        id: 17495,
        name: "Norcasia",
      },
      {
        id: 17513,
        name: "Pácora",
      },
      {
        id: 17524,
        name: "Palestina",
      },
      {
        id: 17541,
        name: "Pensilvania",
      },
      {
        id: 17614,
        name: "Riosucio",
      },
      {
        id: 17616,
        name: "Risaralda",
      },
      {
        id: 17653,
        name: "Salamina",
      },
      {
        id: 17662,
        name: "Samaná",
      },
      {
        id: 17665,
        name: "San José",
      },
      {
        id: 17777,
        name: "Supía",
      },
      {
        id: 17867,
        name: "Victoria",
      },
      {
        id: 17873,
        name: "Villamaría",
      },
      {
        id: 17877,
        name: "Viterbo",
      },
    ],
  },
  {
    id: 18,
    name: "Caquetá",
    items: [
      {
        id: 18001,
        name: "Florencia",
      },
      {
        id: 18029,
        name: "Albania",
      },
      {
        id: 18205,
        name: "Curillo",
      },
      {
        id: 18247,
        name: "El Doncello",
      },
      {
        id: 18256,
        name: "El Paujil",
      },
      {
        id: 18479,
        name: "Morelia",
      },
      {
        id: 18592,
        name: "Puerto Rico",
      },
      {
        id: 18756,
        name: "Solano",
      },
      {
        id: 18785,
        name: "Solita",
      },
      {
        id: 1886,
        name: "Valparaíso",
      },
      {
        id: 1861,
        name: "San José del Fragua",
      },
      {
        id: 18094,
        name: "Belén de Los Andaquies",
      },
      {
        id: 1815,
        name: "Cartagena del Chairá",
      },
    ],
  },
  {
    id: 19,
    name: "Cauca",
    items: [
      {
        id: 19001,
        name: "Popayán",
      },
      {
        id: 19022,
        name: "Almaguer",
      },
      {
        id: 1905,
        name: "Argelia",
      },
      {
        id: 19075,
        name: "Balboa",
      },
      {
        id: 191,
        name: "Bolívar",
      },
      {
        id: 1911,
        name: "Buenos Aires",
      },
      {
        id: 1913,
        name: "Cajibío",
      },
      {
        id: 19137,
        name: "Caldono",
      },
      {
        id: 19142,
        name: "Caloto",
      },
      {
        id: 19212,
        name: "Corinto",
      },
      {
        id: 19256,
        name: "El Tambo",
      },
      {
        id: 1929,
        name: "Florencia",
      },
      {
        id: 193,
        name: "Guachené",
      },
      {
        id: 19318,
        name: "Guapi",
      },
      {
        id: 19355,
        name: "Inzá",
      },
      {
        id: 19364,
        name: "Jambaló",
      },
      {
        id: 19392,
        name: "La Sierra",
      },
      {
        id: 19397,
        name: "La Vega",
      },
      {
        id: 19418,
        name: "López",
      },
      {
        id: 1945,
        name: "Mercaderes",
      },
      {
        id: 19455,
        name: "Miranda",
      },
      {
        id: 19473,
        name: "Morales",
      },
      {
        id: 19513,
        name: "Padilla",
      },
      {
        id: 19532,
        name: "Patía",
      },
      {
        id: 19533,
        name: "Piamonte",
      },
      {
        id: 19548,
        name: "Piendamó",
      },
      {
        id: 19573,
        name: "Puerto Tejada",
      },
      {
        id: 19585,
        name: "Puracé",
      },
      {
        id: 19622,
        name: "Rosas",
      },
      {
        id: 19701,
        name: "Santa Rosa",
      },
      {
        id: 19743,
        name: "Silvia",
      },
      {
        id: 1976,
        name: "Sotara",
      },
      {
        id: 1978,
        name: "Suárez",
      },
      {
        id: 19785,
        name: "Sucre",
      },
      {
        id: 19807,
        name: "Timbío",
      },
      {
        id: 19809,
        name: "Timbiquí",
      },
      {
        id: 19821,
        name: "Toribio",
      },
      {
        id: 19824,
        name: "Totoró",
      },
      {
        id: 19845,
        name: "Villa Rica",
      },
      {
        id: 19698,
        name: "Santander de Quilichao",
      },
      {
        id: 19693,
        name: "San Sebastián",
      },
    ],
  },
  {
    id: 20,
    name: "Cesar",
    items: [
      {
        id: 20001,
        name: "Valledupar",
      },
      {
        id: 20011,
        name: "Aguachica",
      },
      {
        id: 20013,
        name: "Agustín Codazzi",
      },
      {
        id: 20032,
        name: "Astrea",
      },
      {
        id: 20045,
        name: "Becerril",
      },
      {
        id: 2006,
        name: "Bosconia",
      },
      {
        id: 20175,
        name: "Chimichagua",
      },
      {
        id: 20178,
        name: "Chiriguaná",
      },
      {
        id: 20228,
        name: "Curumaní",
      },
      {
        id: 20238,
        name: "El Copey",
      },
      {
        id: 2025,
        name: "El Paso",
      },
      {
        id: 20295,
        name: "Gamarra",
      },
      {
        id: 2031,
        name: "González",
      },
      {
        id: 20383,
        name: "La Gloria",
      },
      {
        id: 20443,
        name: "Manaure",
      },
      {
        id: 20517,
        name: "Pailitas",
      },
      {
        id: 2055,
        name: "Pelaya",
      },
      {
        id: 2057,
        name: "Pueblo Bello",
      },
      {
        id: 20621,
        name: "La Paz",
      },
      {
        id: 2071,
        name: "San Alberto",
      },
      {
        id: 2075,
        name: "San Diego",
      },
      {
        id: 2077,
        name: "San Martín",
      },
      {
        id: 20787,
        name: "Tamalameque",
      },
      {
        id: 20614,
        name: "Río de Oro",
      },
      {
        id: 204,
        name: "La Jagua de Ibirico",
      },
    ],
  },
  {
    id: 25,
    name: "Cundinamarca",
    items: [
      {
        id: 25035,
        name: "Anapoima",
      },
      {
        id: 25053,
        name: "Arbeláez",
      },
      {
        id: 25086,
        name: "Beltrán",
      },
      {
        id: 25095,
        name: "Bituima",
      },
      {
        id: 25099,
        name: "Bojacá",
      },
      {
        id: 2512,
        name: "Cabrera",
      },
      {
        id: 25123,
        name: "Cachipay",
      },
      {
        id: 25126,
        name: "Cajicá",
      },
      {
        id: 25148,
        name: "Caparrapí",
      },
      {
        id: 25151,
        name: "Caqueza",
      },
      {
        id: 25168,
        name: "Chaguaní",
      },
      {
        id: 25178,
        name: "Chipaque",
      },
      {
        id: 25181,
        name: "Choachí",
      },
      {
        id: 25183,
        name: "Chocontá",
      },
      {
        id: 252,
        name: "Cogua",
      },
      {
        id: 25214,
        name: "Cota",
      },
      {
        id: 25224,
        name: "Cucunubá",
      },
      {
        id: 25245,
        name: "El Colegio",
      },
      {
        id: 2526,
        name: "El Rosal",
      },
      {
        id: 25279,
        name: "Fomeque",
      },
      {
        id: 25281,
        name: "Fosca",
      },
      {
        id: 25286,
        name: "Funza",
      },
      {
        id: 25288,
        name: "Fúquene",
      },
      {
        id: 25293,
        name: "Gachala",
      },
      {
        id: 25295,
        name: "Gachancipá",
      },
      {
        id: 25297,
        name: "Gachetá",
      },
      {
        id: 25307,
        name: "Girardot",
      },
      {
        id: 25312,
        name: "Granada",
      },
      {
        id: 25317,
        name: "Guachetá",
      },
      {
        id: 2532,
        name: "Guaduas",
      },
      {
        id: 25322,
        name: "Guasca",
      },
      {
        id: 25324,
        name: "Guataquí",
      },
      {
        id: 25326,
        name: "Guatavita",
      },
      {
        id: 25335,
        name: "Guayabetal",
      },
      {
        id: 25339,
        name: "Gutiérrez",
      },
      {
        id: 25368,
        name: "Jerusalén",
      },
      {
        id: 25372,
        name: "Junín",
      },
      {
        id: 25377,
        name: "La Calera",
      },
      {
        id: 25386,
        name: "La Mesa",
      },
      {
        id: 25394,
        name: "La Palma",
      },
      {
        id: 25398,
        name: "La Peña",
      },
      {
        id: 25402,
        name: "La Vega",
      },
      {
        id: 25407,
        name: "Lenguazaque",
      },
      {
        id: 25426,
        name: "Macheta",
      },
      {
        id: 2543,
        name: "Madrid",
      },
      {
        id: 25436,
        name: "Manta",
      },
      {
        id: 25438,
        name: "Medina",
      },
      {
        id: 25473,
        name: "Mosquera",
      },
      {
        id: 25483,
        name: "Nariño",
      },
      {
        id: 25486,
        name: "Nemocón",
      },
      {
        id: 25488,
        name: "Nilo",
      },
      {
        id: 25489,
        name: "Nimaima",
      },
      {
        id: 25491,
        name: "Nocaima",
      },
      {
        id: 25506,
        name: "Venecia",
      },
      {
        id: 25513,
        name: "Pacho",
      },
      {
        id: 25518,
        name: "Paime",
      },
      {
        id: 25524,
        name: "Pandi",
      },
      {
        id: 2553,
        name: "Paratebueno",
      },
      {
        id: 25535,
        name: "Pasca",
      },
      {
        id: 25572,
        name: "Puerto Salgar",
      },
      {
        id: 2558,
        name: "Pulí",
      },
      {
        id: 25592,
        name: "Quebradanegra",
      },
      {
        id: 25594,
        name: "Quetame",
      },
      {
        id: 25596,
        name: "Quipile",
      },
      {
        id: 25599,
        name: "Apulo",
      },
      {
        id: 25612,
        name: "Ricaurte",
      },
      {
        id: 25649,
        name: "San Bernardo",
      },
      {
        id: 25653,
        name: "San Cayetano",
      },
      {
        id: 25658,
        name: "San Francisco",
      },
      {
        id: 25736,
        name: "Sesquilé",
      },
      {
        id: 2574,
        name: "Sibaté",
      },
      {
        id: 25743,
        name: "Silvania",
      },
      {
        id: 25745,
        name: "Simijaca",
      },
      {
        id: 25754,
        name: "Soacha",
      },
      {
        id: 25769,
        name: "Subachoque",
      },
      {
        id: 25772,
        name: "Suesca",
      },
      {
        id: 25777,
        name: "Supatá",
      },
      {
        id: 25779,
        name: "Susa",
      },
      {
        id: 25781,
        name: "Sutatausa",
      },
      {
        id: 25785,
        name: "Tabio",
      },
      {
        id: 25793,
        name: "Tausa",
      },
      {
        id: 25797,
        name: "Tena",
      },
      {
        id: 25799,
        name: "Tenjo",
      },
      {
        id: 25805,
        name: "Tibacuy",
      },
      {
        id: 25807,
        name: "Tibirita",
      },
      {
        id: 25815,
        name: "Tocaima",
      },
      {
        id: 25817,
        name: "Tocancipá",
      },
      {
        id: 25823,
        name: "Topaipí",
      },
      {
        id: 25839,
        name: "Ubalá",
      },
      {
        id: 25841,
        name: "Ubaque",
      },
      {
        id: 25845,
        name: "Une",
      },
      {
        id: 25851,
        name: "Útica",
      },
      {
        id: 25867,
        name: "Vianí",
      },
      {
        id: 25871,
        name: "Villagómez",
      },
      {
        id: 25873,
        name: "Villapinzón",
      },
      {
        id: 25875,
        name: "Villeta",
      },
      {
        id: 25878,
        name: "Viotá",
      },
      {
        id: 25898,
        name: "Zipacón",
      },
      {
        id: 25662,
        name: "San Juan de Río Seco",
      },
      {
        id: 25843,
        name: "Villa de San Diego de Ubate",
      },
      {
        id: 25328,
        name: "Guayabal de Siquima",
      },
      {
        id: 25645,
        name: "San Antonio del Tequendama",
      },
      {
        id: 25001,
        name: "Agua de Dios",
      },
      {
        id: 25154,
        name: "Carmen de Carupa",
      },
      {
        id: 25862,
        name: "Vergara",
      },
    ],
  },
  {
    id: 41,
    name: "Huila",
    items: [
      {
        id: 41001,
        name: "Neiva",
      },
      {
        id: 41006,
        name: "Acevedo",
      },
      {
        id: 41013,
        name: "Agrado",
      },
      {
        id: 41016,
        name: "Aipe",
      },
      {
        id: 4102,
        name: "Algeciras",
      },
      {
        id: 41026,
        name: "Altamira",
      },
      {
        id: 41078,
        name: "Baraya",
      },
      {
        id: 41132,
        name: "Campoalegre",
      },
      {
        id: 41206,
        name: "Colombia",
      },
      {
        id: 41244,
        name: "Elías",
      },
      {
        id: 41298,
        name: "Garzón",
      },
      {
        id: 41306,
        name: "Gigante",
      },
      {
        id: 41319,
        name: "Guadalupe",
      },
      {
        id: 41349,
        name: "Hobo",
      },
      {
        id: 41357,
        name: "Iquira",
      },
      {
        id: 41359,
        name: "Isnos",
      },
      {
        id: 41378,
        name: "La Argentina",
      },
      {
        id: 41396,
        name: "La Plata",
      },
      {
        id: 41483,
        name: "Nátaga",
      },
      {
        id: 41503,
        name: "Oporapa",
      },
      {
        id: 41518,
        name: "Paicol",
      },
      {
        id: 41524,
        name: "Palermo",
      },
      {
        id: 4153,
        name: "Palestina",
      },
      {
        id: 41548,
        name: "Pital",
      },
      {
        id: 41551,
        name: "Pitalito",
      },
      {
        id: 41615,
        name: "Rivera",
      },
      {
        id: 4166,
        name: "Saladoblanco",
      },
      {
        id: 41676,
        name: "Santa María",
      },
      {
        id: 4177,
        name: "Suaza",
      },
      {
        id: 41791,
        name: "Tarqui",
      },
      {
        id: 41797,
        name: "Tesalia",
      },
      {
        id: 41799,
        name: "Tello",
      },
      {
        id: 41801,
        name: "Teruel",
      },
      {
        id: 41807,
        name: "Timaná",
      },
      {
        id: 41872,
        name: "Villavieja",
      },
      {
        id: 41885,
        name: "Yaguará",
      },
      {
        id: 41668,
        name: "San Agustín",
      },
    ],
  },
  {
    id: 44,
    name: "La Guajira",
    items: [
      {
        id: 44001,
        name: "Riohacha",
      },
      {
        id: 44035,
        name: "Albania",
      },
      {
        id: 44078,
        name: "Barrancas",
      },
      {
        id: 4409,
        name: "Dibula",
      },
      {
        id: 44098,
        name: "Distracción",
      },
      {
        id: 4411,
        name: "El Molino",
      },
      {
        id: 44279,
        name: "Fonseca",
      },
      {
        id: 44378,
        name: "Hatonuevo",
      },
      {
        id: 4443,
        name: "Maicao",
      },
      {
        id: 4456,
        name: "Manaure",
      },
      {
        id: 44847,
        name: "Uribia",
      },
      {
        id: 44855,
        name: "Urumita",
      },
      {
        id: 44874,
        name: "Villanueva",
      },
      {
        id: 4442,
        name: "La Jagua del Pilar",
      },
      {
        id: 4465,
        name: "San Juan del Cesar",
      },
    ],
  },
  {
    id: 47,
    name: "Magdalena",
    items: [
      {
        id: 47001,
        name: "Santa Marta",
      },
      {
        id: 4703,
        name: "Algarrobo",
      },
      {
        id: 47053,
        name: "Aracataca",
      },
      {
        id: 47058,
        name: "Ariguaní",
      },
      {
        id: 47161,
        name: "Cerro San Antonio",
      },
      {
        id: 4717,
        name: "Chivolo",
      },
      {
        id: 47205,
        name: "Concordia",
      },
      {
        id: 47245,
        name: "El Banco",
      },
      {
        id: 47258,
        name: "El Piñon",
      },
      {
        id: 47268,
        name: "El Retén",
      },
      {
        id: 47288,
        name: "Fundación",
      },
      {
        id: 47318,
        name: "Guamal",
      },
      {
        id: 4746,
        name: "Nueva Granada",
      },
      {
        id: 47541,
        name: "Pedraza",
      },
      {
        id: 47551,
        name: "Pivijay",
      },
      {
        id: 47555,
        name: "Plato",
      },
      {
        id: 47605,
        name: "Remolino",
      },
      {
        id: 47675,
        name: "Salamina",
      },
      {
        id: 47703,
        name: "San Zenón",
      },
      {
        id: 47707,
        name: "Santa Ana",
      },
      {
        id: 47745,
        name: "Sitionuevo",
      },
      {
        id: 47798,
        name: "Tenerife",
      },
      {
        id: 4796,
        name: "Zapayán",
      },
      {
        id: 4798,
        name: "Zona Bananera",
      },
      {
        id: 47692,
        name: "San Sebastián de Buenavista",
      },
      {
        id: 4766,
        name: "Sabanas de San Angel",
      },
      {
        id: 47545,
        name: "Pijiño del Carmen",
      },
    ],
  },
  {
    id: 63,
    name: "Quindío",
    items: [
      {
        id: 63001,
        name: "Armenia",
      },
      {
        id: 63111,
        name: "Buenavista",
      },
      {
        id: 6319,
        name: "Circasia",
      },
      {
        id: 63212,
        name: "Córdoba",
      },
      {
        id: 63272,
        name: "Filandia",
      },
      {
        id: 63401,
        name: "La Tebaida",
      },
      {
        id: 6347,
        name: "Montenegro",
      },
      {
        id: 63548,
        name: "Pijao",
      },
      {
        id: 63594,
        name: "Quimbaya",
      },
      {
        id: 6369,
        name: "Salento",
      },
    ],
  },
  {
    id: 66,
    name: "Risaralda",
    items: [
      {
        id: 66001,
        name: "Pereira",
      },
      {
        id: 66045,
        name: "Apía",
      },
      {
        id: 66075,
        name: "Balboa",
      },
      {
        id: 6617,
        name: "Dosquebradas",
      },
      {
        id: 66318,
        name: "Guática",
      },
      {
        id: 66383,
        name: "La Celia",
      },
      {
        id: 664,
        name: "La Virginia",
      },
      {
        id: 6644,
        name: "Marsella",
      },
      {
        id: 66456,
        name: "Mistrató",
      },
      {
        id: 66572,
        name: "Pueblo Rico",
      },
      {
        id: 66594,
        name: "Quinchía",
      },
      {
        id: 66687,
        name: "Santuario",
      },
      {
        id: 66682,
        name: "Santa Rosa de Cabal",
      },
      {
        id: 66088,
        name: "Belén de Umbría",
      },
    ],
  },
  {
    id: 70,
    name: "Sucre",
    items: [
      {
        id: 70001,
        name: "Sincelejo",
      },
      {
        id: 7011,
        name: "Buenavista",
      },
      {
        id: 70124,
        name: "Caimito",
      },
      {
        id: 70204,
        name: "Coloso",
      },
      {
        id: 70221,
        name: "Coveñas",
      },
      {
        id: 7023,
        name: "Chalán",
      },
      {
        id: 70233,
        name: "El Roble",
      },
      {
        id: 70235,
        name: "Galeras",
      },
      {
        id: 70265,
        name: "Guaranda",
      },
      {
        id: 704,
        name: "La Unión",
      },
      {
        id: 70418,
        name: "Los Palmitos",
      },
      {
        id: 70429,
        name: "Majagual",
      },
      {
        id: 70473,
        name: "Morroa",
      },
      {
        id: 70508,
        name: "Ovejas",
      },
      {
        id: 70523,
        name: "Palmito",
      },
      {
        id: 70678,
        name: "San Benito Abad",
      },
      {
        id: 70708,
        name: "San Marcos",
      },
      {
        id: 70713,
        name: "San Onofre",
      },
      {
        id: 70717,
        name: "San Pedro",
      },
      {
        id: 70771,
        name: "Sucre",
      },
      {
        id: 70823,
        name: "Tolú Viejo",
      },
      {
        id: 70742,
        name: "San Luis de Sincé",
      },
      {
        id: 70702,
        name: "San Juan de Betulia",
      },
      {
        id: 7082,
        name: "Santiago de Tolú",
      },
    ],
  },
  {
    id: 73,
    name: "Tolima",
    items: [
      {
        id: 73024,
        name: "Alpujarra",
      },
      {
        id: 73026,
        name: "Alvarado",
      },
      {
        id: 7303,
        name: "Ambalema",
      },
      {
        id: 73055,
        name: "Armero",
      },
      {
        id: 73067,
        name: "Ataco",
      },
      {
        id: 73124,
        name: "Cajamarca",
      },
      {
        id: 73168,
        name: "Chaparral",
      },
      {
        id: 732,
        name: "Coello",
      },
      {
        id: 73217,
        name: "Coyaima",
      },
      {
        id: 73226,
        name: "Cunday",
      },
      {
        id: 73236,
        name: "Dolores",
      },
      {
        id: 73268,
        name: "Espinal",
      },
      {
        id: 7327,
        name: "Falan",
      },
      {
        id: 73275,
        name: "Flandes",
      },
      {
        id: 73283,
        name: "Fresno",
      },
      {
        id: 73319,
        name: "Guamo",
      },
      {
        id: 73347,
        name: "Herveo",
      },
      {
        id: 73349,
        name: "Honda",
      },
      {
        id: 73352,
        name: "Icononzo",
      },
      {
        id: 73443,
        name: "Mariquita",
      },
      {
        id: 73449,
        name: "Melgar",
      },
      {
        id: 73461,
        name: "Murillo",
      },
      {
        id: 73483,
        name: "Natagaima",
      },
      {
        id: 73504,
        name: "Ortega",
      },
      {
        id: 7352,
        name: "Palocabildo",
      },
      {
        id: 73547,
        name: "Piedras",
      },
      {
        id: 73555,
        name: "Planadas",
      },
      {
        id: 73563,
        name: "Prado",
      },
      {
        id: 73585,
        name: "Purificación",
      },
      {
        id: 73616,
        name: "Rio Blanco",
      },
      {
        id: 73622,
        name: "Roncesvalles",
      },
      {
        id: 73624,
        name: "Rovira",
      },
      {
        id: 73671,
        name: "Saldaña",
      },
      {
        id: 73686,
        name: "Santa Isabel",
      },
      {
        id: 73861,
        name: "Venadillo",
      },
      {
        id: 7387,
        name: "Villahermosa",
      },
      {
        id: 73873,
        name: "Villarrica",
      },
      {
        id: 73854,
        name: "Valle de San Juan",
      },
      {
        id: 73148,
        name: "Carmen de Apicala",
      },
      {
        id: 73678,
        name: "San Luis",
      },
      {
        id: 73675,
        name: "San Antonio",
      },
    ],
  },
  {
    id: 81,
    name: "Arauca",
    items: [
      {
        id: 81065,
        name: "Arauquita",
      },
      {
        id: 8122,
        name: "Cravo Norte",
      },
      {
        id: 813,
        name: "Fortul",
      },
      {
        id: 81591,
        name: "Puerto Rondón",
      },
      {
        id: 81736,
        name: "Saravena",
      },
      {
        id: 81794,
        name: "Tame",
      },
      {
        id: 81001,
        name: "Arauca",
      },
    ],
  },
  {
    id: 85,
    name: "Casanare",
    items: [
      {
        id: 85001,
        name: "Yopal",
      },
      {
        id: 8501,
        name: "Aguazul",
      },
      {
        id: 85015,
        name: "Chámeza",
      },
      {
        id: 85125,
        name: "Hato Corozal",
      },
      {
        id: 85136,
        name: "La Salina",
      },
      {
        id: 85162,
        name: "Monterrey",
      },
      {
        id: 85263,
        name: "Pore",
      },
      {
        id: 85279,
        name: "Recetor",
      },
      {
        id: 853,
        name: "Sabanalarga",
      },
      {
        id: 85315,
        name: "Sácama",
      },
      {
        id: 8541,
        name: "Tauramena",
      },
      {
        id: 8543,
        name: "Trinidad",
      },
      {
        id: 8544,
        name: "Villanueva",
      },
      {
        id: 85325,
        name: "San Luis de Gaceno",
      },
      {
        id: 8525,
        name: "Paz de Ariporo",
      },
    ],
  },
  {
    id: 86,
    name: "Putumayo",
    items: [
      {
        id: 86001,
        name: "Mocoa",
      },
      {
        id: 86219,
        name: "Colón",
      },
      {
        id: 8632,
        name: "Orito",
      },
      {
        id: 86569,
        name: "Puerto Caicedo",
      },
      {
        id: 86571,
        name: "Puerto Guzmán",
      },
      {
        id: 86573,
        name: "Leguízamo",
      },
      {
        id: 86749,
        name: "Sibundoy",
      },
      {
        id: 86755,
        name: "San Francisco",
      },
      {
        id: 86757,
        name: "San Miguel",
      },
      {
        id: 8676,
        name: "Santiago",
      },
      {
        id: 86865,
        name: "Valle de Guamez",
      },
    ],
  },
  {
    id: 91,
    name: "Amazonas",
    items: [
      {
        id: 91001,
        name: "Leticia",
      },
      {
        id: 91263,
        name: "El Encanto",
      },
      {
        id: 91405,
        name: "La Chorrera",
      },
      {
        id: 91407,
        name: "La Pedrera",
      },
      {
        id: 9143,
        name: "La Victoria",
      },
      {
        id: 91536,
        name: "Puerto Arica",
      },
      {
        id: 9154,
        name: "Puerto Nariño",
      },
      {
        id: 91669,
        name: "Puerto Santander",
      },
      {
        id: 91798,
        name: "Tarapacá",
      },
      {
        id: 9153,
        name: "Puerto Alegría",
      },
    ],
  },
  {
    id: 94,
    name: "Guainía",
    items: [
      {
        id: 94001,
        name: "Inírida",
      },
      {
        id: 94343,
        name: "Barranco Minas",
      },
      {
        id: 94663,
        name: "Mapiripana",
      },
      {
        id: 94883,
        name: "San Felipe",
      },
      {
        id: 94884,
        name: "Puerto Colombia",
      },
      {
        id: 94885,
        name: "La Guadalupe",
      },
      {
        id: 94886,
        name: "Cacahual",
      },
      {
        id: 94887,
        name: "Pana Pana",
      },
      {
        id: 94888,
        name: "Morichal",
      },
    ],
  },
  {
    id: 97,
    name: "Vaupés",
    items: [
      {
        id: 97001,
        name: "Mitú",
      },
      {
        id: 97161,
        name: "Carurú",
      },
      {
        id: 97666,
        name: "Taraira",
      },
      {
        id: 97777,
        name: "Papunahua",
      },
      {
        id: 97889,
        name: "Yavaraté",
      },
      {
        id: 97511,
        name: "Pacoa",
      },
    ],
  },
  {
    id: 99,
    name: "Vichada",
    items: [
      {
        id: 99001,
        name: "Puerto Carreño",
      },
      {
        id: 99524,
        name: "La Primavera",
      },
      {
        id: 99624,
        name: "Santa Rosalía",
      },
      {
        id: 99773,
        name: "Cumaribo",
      },
    ],
  },
  {
    id: 95,
    name: "Guaviare",
    items: [
      {
        id: 95015,
        name: "Calamar",
      },
      {
        id: 95001,
        name: "San José del Guaviare",
      },
      {
        id: 952,
        name: "Miraflores",
      },
      {
        id: 95025,
        name: "El Retorno",
      },
    ],
  },
  {
    id: 88,
    name: "Archipiélago de San Andrés, Providencia y Santa Catalina",
    items: [
      {
        id: 88564,
        name: "Providencia",
      },
      {
        id: 88001,
        name: "San Andrés",
      },
    ],
  },
  {
    id: 11,
    name: "Bogotá D.C.",
    items: [
      {
        id: 11001,
        name: "Bogotá D.C.",
      },
    ],
  },
  {
    id: 54,
    name: "Norte de Santander",
    items: [
      {
        id: 54743,
        name: "Silos",
      },
      {
        id: 54125,
        name: "Cácota",
      },
      {
        id: 5482,
        name: "Toledo",
      },
      {
        id: 5448,
        name: "Mutiscua",
      },
      {
        id: 54261,
        name: "El Zulia",
      },
      {
        id: 5466,
        name: "Salazar",
      },
      {
        id: 54223,
        name: "Cucutilla",
      },
      {
        id: 54553,
        name: "Puerto Santander",
      },
      {
        id: 54313,
        name: "Gramalote",
      },
      {
        id: 5425,
        name: "El Tarra",
      },
      {
        id: 548,
        name: "Teorama",
      },
      {
        id: 54051,
        name: "Arboledas",
      },
    ],
  },
];

export default departments;
