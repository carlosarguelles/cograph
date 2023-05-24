import ColGraph from "./ColGraph.js";

const container = document.getElementById("mynetwork");

const edges = ColGraph.edges;
const nodes = ColGraph.nodes;

const data = {
  nodes,
  edges,
};

new vis.Network(container, data, {});

function getNodeDegrees(nodes, edges) {
  const nodeDegrees = {};
  nodes.forEach((node) => {
    const connectedEdges = edges.get({
      filter: (edge) => edge.from === node.id || edge.to === node.id,
    });
    nodeDegrees[node.id] = { grades: connectedEdges.length, label: node.label };
  });
  return nodeDegrees;
}

function getAdjacencyList(nodes, edges) {
  const adjacencyList = {};
  nodes.forEach((node) => {
    adjacencyList[node.id] = [];
  });
  edges.forEach((edge) => {
    const { from, to, value } = edge;
    adjacencyList[from]?.push({ node: to, value });
    adjacencyList[to]?.push({ node: from, value }); // uncomment this line for undirected graphs */
  });
  return adjacencyList;
}

const nodeDegrees = getNodeDegrees(nodes, edges);

const sumOfDegrees = Object.entries(nodeDegrees).reduce(
  (prev, [_, v]) => prev + v["grades"],
  0
);

const nEdges = edges.length;

const adjacencyList = getAdjacencyList(nodes, edges);

const summary = {
  nodeDegrees,
  sumOfDegrees,
  nEdges,
  nNodes: nodes.length,
  theorem: sumOfDegrees === nEdges * 2,
  adjacencyList: Object.entries(adjacencyList)
    .map(
      ([key, values]) =>
        `${key} => ${values
          .map(({ node, value }) => `[${node}|${value}]`)
          .join(", ")}`
    )
    .join("\n"),
};
console.log(summary);

const nodesArray = nodes.map((n) => n).sort((a, b) => a.id - b.id);
const edgesArray = edges.map((e) => e);

const nodeMap = {};

nodesArray.forEach(({ id, label }) => {
  nodeMap[id] = label;
});
console.log({ nodeMap });

console.log({
  municipios: nodesArray.map(({ label, id }) => `${id}. ${label}\n`).join(""),
  vectorOfNodes: `G_2(v): {${nodesArray.map((n) => n.id).join(", ")}}`,
  vectorOfEdges: `G_2(A): {${edgesArray
    .map(({ from, to }) => `(${from}, ${to})`)
    .join(", ")}}`,
  descriptiveListOfEdges: edgesArray
    .map(({ from, to, value }) => {
      return `${nodeMap[from]} - ${nodeMap[to]} : ${value}km = (${from}, ${to})`;
    })
    .join("\n"),
  nodeDegrees: Object.entries(nodeDegrees)
    .map(([id, { grades, label }]) => `${id} (${label}) = ${grades}`)
    .join("\n"),
});
