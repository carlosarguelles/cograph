const nodes = new vis.DataSet([
  { id: 1, label: "Mompós", color: "blue" },
  { id: 3, label: "Cartagena", color: "orange" },
  { id: 4, label: "Sincelejo", color: "orange" },
  { id: 5, label: "Monteria", color: "orange" },
  { id: 6, label: "Planeta Rica", color: "orange" },
  { id: 8, label: "Tolú", color: "orange" },
  { id: 10, label: "El Carmen de Bolivar", color: "orange" },
  { id: 11, label: "Magangué", color: "orange" },
  { id: 13, label: "La Ye", color: "orange" },
  { id: 14, label: "Caucasia", color: "orange" },
  { id: 15, label: "Zaragoza", color: "orange" },
  { id: 18, label: "Barrancabermeja", color: "orange" },
  { id: 19, label: "Puerto Berrio", color: "orange" },
  { id: 20, label: "Puerto Triunfo", color: "orange" },
  { id: 21, label: "Marinilla", color: "orange" },
  { id: 24, label: "Medellin", color: "orange" },
  { id: 25, label: "Guarne", color: "blue" },
  { id: 26, label: "Yarumal", color: "orange" },
  { id: 27, label: "Barbosa", color: "orange" },
  { id: 28, label: "Santa Ana", color: "orange" },
  { id: 29, label: "Plato", color: "orange" },
  { id: 30, label: "Barranquilla", color: "orange" },
  { id: 31, label: "Santa Marta", color: "orange" },
  { id: 32, label: "Bosconia", color: "orange" },
  { id: 2, label: "El Banco", color: "orange" },
  { id: 33, label: "Aguachica", color: "orange" },
  { id: 34, label: "Cúcuta", color: "orange" },
  { id: 35, label: "Pamplona", color: "orange" },
  { id: 36, label: "Bucaramanga", color: "orange" },
  { id: 37, label: "San Alberto", color: "orange" },
]);

var edges = new vis.DataSet([
  { from: 1, to: 2, label: "71 km", value: 71 },
  { from: 1, to: 11, label: "55 km", value: 55 },
  { from: 11, to: 4, label: "93 km", value: 93 },
  { from: 11, to: 10, label: "105 km", value: 105 },
  { from: 10, to: 3, label: "116 km", value: 116 },
  { from: 3, to: 8, label: "142 km", value: 142 },
  { from: 8, to: 4, label: "39 km", value: 39 },
  { from: 8, to: 5, label: "109 km", value: 109 },
  { from: 4, to: 13, label: "65 km", value: 65 },
  { from: 13, to: 5, label: "53 km", value: 53 },
  { from: 13, to: 6, label: "56 km", value: 56 },
  { from: 5, to: 6, label: "54 km", value: 54 },
  { from: 6, to: 14, label: "69 km", value: 69 },
  { from: 14, to: 15, label: "88 km", value: 88 },
  { from: 18, to: 19, label: "124 km", value: 124 },
  { from: 18, to: 20, label: "188 km", value: 188 },
  { from: 20, to: 21, label: "165 km", value: 165 },
  { from: 21, to: 25, label: "19 km", value: 19 },
  { from: 14, to: 26, label: "163 km", value: 163 },
  { from: 26, to: 24, label: "122 km", value: 122 },
  { from: 26, to: 27, label: "101 km", value: 101 },
  { from: 15, to: 27, label: "216 km", value: 216 },
  { from: 24, to: 25, label: "31 km", value: 31 },
  { from: 24, to: 21, label: "41 km", value: 41 },
  { from: 10, to: 4, label: "71 km", value: 71 },
  { from: 19, to: 27, label: "142 km", value: 142 },
  { from: 19, to: 20, label: "128 km", value: 128 },
  { from: 1, to: 28, label: "28 km", value: 28 },
  { from: 28, to: 11, label: "31 km", value: 31 },
  { from: 28, to: 29, label: "129 km", value: 129 },
  { from: 29, to: 10, label: "46 km", value: 46 },
  { from: 29, to: 30, label: "200 km", value: 200 },
  { from: 30, to: 3, label: "127 km", value: 127 },
  { from: 30, to: 31, label: "100 km", value: 100 },
  { from: 29, to: 32, label: "110 km", value: 110 },
  { from: 31, to: 32, label: "162 km", value: 162 },
  { from: 32, to: 18, label: "401 km", value: 401 },
  { from: 32, to: 2, label: "139 km", value: 139 },
  { from: 2, to: 18, label: "301 km", value: 301 },
  { from: 27, to: 24, label: "42 km", value: 42 },
]);