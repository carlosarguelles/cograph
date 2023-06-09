import { Graph } from "./Node.js";

const graph = new Graph();

const Mompos = graph.addNode("Mompós", "green");
const SantaAna = graph.addNode("Santa Ana");
const Guamal = graph.addNode("Guamal");
const Penoncito = graph.addNode("Peñoncito");
const SanSebastian = graph.addNode("San Sebastián de Buenavista");
const Astrea = graph.addNode("Astrea");
const Pijino = graph.addNode("Pijiño");
const Cartagena = graph.addNode("Cartagena");
const Sincelejo = graph.addNode("Sincelejo");
const Monteria = graph.addNode("Monteria");
const PlanetaRica = graph.addNode("Planeta Rica");
const Tolu = graph.addNode("Tolú");
const ElCarmenDeBolivar = graph.addNode("El Carmen de Bolivar");
const Magangue = graph.addNode("Magangué");
const LaYe = graph.addNode("La Ye");
const Caucasia = graph.addNode("Caucasia");
const Zaragoza = graph.addNode("Zaragoza");
const Barrancabermeja = graph.addNode("Barrancabermeja");
const PuertoBerrio = graph.addNode("Puerto Berrio");
const PuertoTriunfo = graph.addNode("Puerto Triunfo");
const Marinilla = graph.addNode("Marinilla");
const Medellin = graph.addNode("Medellin");
const Guarne = graph.addNode("Guarne", "green");
const Yarumal = graph.addNode("Yarumal");
const Barbosa = graph.addNode("Barbosa");
const Plato = graph.addNode("Plato");
const Barranquilla = graph.addNode("Barranquilla");
const SantaMarta = graph.addNode("Santa Marta");
const Bosconia = graph.addNode("Bosconia");
const ElBanco = graph.addNode("El Banco");
const Aguachica = graph.addNode("Aguachica");
const Cucuta = graph.addNode("Cúcuta");
const Pamplona = graph.addNode("Pamplona");
const Bucaramanga = graph.addNode("Bucaramanga");
const SanAlberto = graph.addNode("San Alberto");
const ElBurro = graph.addNode("El Burro");
const CuatroVientos = graph.addNode("Cuatro Vientos");
const SanRoque = graph.addNode("San Roque");
const Toluviejo = graph.addNode("Toluviejo");
const Covenas = graph.addNode("Coveñas");
const Lorica = graph.addNode("Lorica");
const Tuchin = graph.addNode("Tuchín");
const Chinu = graph.addNode("Chinú");
const Sahagun = graph.addNode("Sahagún");
const CienagaDeOro = graph.addNode("Ciénaga de Oro");
const Cerete = graph.addNode("Cereté");
const LaGloria = graph.addNode("La Gloria");
const ElBongo = graph.addNode("El Bongo");
const Ovejas = graph.addNode("Ovejas");
const BarbosaSantander = graph.addNode("Barbosa, Santander");
const Malaga = graph.addNode("Málaga");
const Tunja = graph.addNode("Tunja");
const Chiquinquira = graph.addNode("Chiquinquirá");

graph.addEdge(Mompos, Guamal, 34);
graph.addEdge(Guamal, ElBanco, 37);
graph.addEdge(Guamal, SanSebastian, 20);
graph.addEdge(SanSebastian, Astrea, 48);
graph.addEdge(SanSebastian, Penoncito, 20);
graph.addEdge(Penoncito, Pijino, 12);
graph.addEdge(Penoncito, SantaAna, 20);
graph.addEdge(Guamal, Astrea, 45);
graph.addEdge(Astrea, CuatroVientos, 38);
graph.addEdge(Mompos, Magangue, 55);
graph.addEdge(Magangue, ElBongo, 60);
graph.addEdge(ElBongo, Ovejas, 10);
graph.addEdge(ElBongo, Sincelejo, 30);
graph.addEdge(Ovejas, ElCarmenDeBolivar, 27);
graph.addEdge(Ovejas, Toluviejo, 33);
graph.addEdge(ElCarmenDeBolivar, Cartagena, 116);
graph.addEdge(Cartagena, Tolu, 142);
graph.addEdge(Tolu, Toluviejo, 19);
graph.addEdge(Toluviejo, Sincelejo, 21);
graph.addEdge(Tolu, Covenas, 23);
graph.addEdge(Covenas, Lorica, 27);
graph.addEdge(Lorica, Tuchin, 37);
graph.addEdge(Lorica, Cerete, 42);
graph.addEdge(Tuchin, Chinu, 27);
graph.addEdge(Tuchin, CienagaDeOro, 50);
graph.addEdge(Sincelejo, Chinu, 27);
graph.addEdge(Chinu, Sahagun, 23);
graph.addEdge(Sahagun, LaYe, 17);
graph.addEdge(Sahagun, CienagaDeOro, 21);
graph.addEdge(LaYe, CienagaDeOro, 16);
graph.addEdge(CienagaDeOro, Cerete, 19);
graph.addEdge(Cerete, Monteria, 18);
graph.addEdge(LaYe, PlanetaRica, 56);
graph.addEdge(Monteria, PlanetaRica, 54);
graph.addEdge(PlanetaRica, Caucasia, 69);
graph.addEdge(Caucasia, Zaragoza, 88);
graph.addEdge(Barrancabermeja, PuertoBerrio, 124);
graph.addEdge(Barrancabermeja, PuertoTriunfo, 188);
graph.addEdge(PuertoTriunfo, Marinilla, 165);
graph.addEdge(Marinilla, Guarne, 19);
graph.addEdge(Caucasia, Yarumal, 163);
graph.addEdge(Yarumal, Medellin, 122);
graph.addEdge(Yarumal, Barbosa, 101);
graph.addEdge(Zaragoza, Barbosa, 216);
graph.addEdge(Medellin, Guarne, 31);
graph.addEdge(Medellin, Marinilla, 41);
graph.addEdge(PuertoBerrio, Barbosa, 142);
graph.addEdge(PuertoBerrio, PuertoTriunfo, 128);
graph.addEdge(Mompos, SantaAna, 28);
graph.addEdge(SantaAna, Magangue, 31);
graph.addEdge(SantaAna, Pijino, 18);
graph.addEdge(Pijino, LaGloria, 60);
graph.addEdge(LaGloria, Plato, 57);
graph.addEdge(Plato, ElCarmenDeBolivar, 46);
graph.addEdge(Plato, Barranquilla, 200);
graph.addEdge(Barranquilla, Cartagena, 127);
graph.addEdge(Barranquilla, SantaMarta, 100);
graph.addEdge(LaGloria, Bosconia, 51);
graph.addEdge(SantaMarta, Bosconia, 162);
graph.addEdge(ElBanco, ElBurro, 46);
graph.addEdge(ElBurro, Aguachica, 70);
graph.addEdge(Barbosa, Medellin, 42);
graph.addEdge(Aguachica, Cucuta, 198);
graph.addEdge(Cucuta, Pamplona, 76);
graph.addEdge(Pamplona, Bucaramanga, 124);
graph.addEdge(Aguachica, SanAlberto, 72);
graph.addEdge(SanAlberto, Bucaramanga, 162);
graph.addEdge(SanAlberto, Barrancabermeja, 121);
graph.addEdge(Bucaramanga, Barrancabermeja, 116);
graph.addEdge(Bosconia, CuatroVientos, 40);
graph.addEdge(CuatroVientos, ElBanco, 97);
graph.addEdge(CuatroVientos, SanRoque, 66);
graph.addEdge(SanRoque, ElBurro, 57);
graph.addEdge(Pamplona, Malaga, 133);
graph.addEdge(Bucaramanga, Malaga, 154);
graph.addEdge(Malaga, Tunja, 225);
graph.addEdge(Tunja, BarbosaSantander, 71);
graph.addEdge(Tunja, Chiquinquira, 76);
graph.addEdge(Chiquinquira, BarbosaSantander, 49);
graph.addEdge(Chiquinquira, PuertoTriunfo, 211);
graph.addEdge(Bucaramanga, BarbosaSantander, 214);

export default graph;
