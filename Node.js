export class Node {
  constructor(id, label, color) {
    this.id = id;
    this.label = label;
    this.color = color;
  }
}

export class Graph {
  constructor() {
    this.nodes = new vis.DataSet();
    this.edges = new vis.DataSet();
    this.nodeCount = 0;
  }

  addNode(label, color = "orange") {
    const node = new Node(this.nodeCount, label, color);
    this.nodes.add(node);
    this.nodeCount++;
    return node;
  }

  addEdge(from, to, distance) {
    const edge = {
      from: from.id,
      to: to.id,
      label: `${distance} km`,
      value: distance,
    };
    this.edges.add(edge);
    return edge;
  }

  getGraph() {
    return { edges: this.edges, nodes: this.nodes };
  }
}
