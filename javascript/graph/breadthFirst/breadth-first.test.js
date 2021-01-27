const obj = require('../graph');

describe('Testing Graph Class', () => {
  it('A node can be successfully added to the graph', () => {
    let graph = new obj.Graph();
    graph.addVertex(4);
    graph.addVertex(6);
    graph.addDirectedEdge(4,6,2);
    expect(graph.breadthFirstTraversal(4)).toContain(4, 6);
  });
});
