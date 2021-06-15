const obj = require('./graph');

describe('Testing Graph Class', () => {
  it('A node can be successfully added to the grapy', () => {
    let graph = new obj.Graph();
    graph.addVertex(4);
    expect(graph.adjacencyList).toBeDefined();
  });


  it('An edge can be successfully added to the graph', () => {
    let graph = new obj.Graph();
    graph.addVertex(4);
    graph.addVertex(6);
    graph.addDirectedEdge(4,6,2);
    let result = [{'vertex': 6, 'weight': 2}];
    expect(graph.getNeighbors(4)).toEqual(expect.arrayContaining([{'vertex': 6, 'weight': 2}]));
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    let graph = new obj.Graph();
    graph.addVertex(4);
    graph.addVertex(6);
    graph.addDirectedEdge(4,6,2);
    expect(graph.getNodes(4)).toContain(4,6);
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    let graph = new obj.Graph();
    graph.addVertex(4);
    graph.addVertex(6);
    graph.addDirectedEdge(4,6,2);
    expect(graph.getNeighbors(4)).toEqual(expect.arrayContaining([{'vertex': 6, 'weight': 2}]));
  });

  it('Neighbors are returned with the weight between nodes included', () => {
    let graph = new obj.Graph();
    graph.addVertex(4);
    graph.addVertex(6);
    graph.addDirectedEdge(4,6,2);
    expect(graph.getNeighbors(4)).toEqual(expect.arrayContaining([{'vertex': 6, 'weight': 2}]));
  });

  xit('The proper size is returned, representing the number of nodes in the graph', () => {
    let graph = new obj.Graph();
    graph.addVertex(4);
    graph.addVertex(6);
    graph.addDirectedEdge(4,6,2);
    expect(graph.size()).toBe(2);
  });

  it('A graph with only one node and edge can be properly returned', () => {
    let graph = new obj.Graph();
    graph.addVertex(4);
    graph.addVertex(6);
    graph.addDirectedEdge(4,6,2);
    expect(graph.adjacencyList).toBeDefined();
  });

  it('An empty graph properly returns null', () => {
    let graph = new obj.Graph();
    expect(graph).toEqual(expect.arrayContaining([]));
  });


});


describe('Testing Depth first traversal', () => {
  it('A depth first traversal returns a list of all the nodes', () => {
    let graph = new obj.Graph();
    graph.addVertex(4);
    graph.addVertex(6);
    graph.addDirectedEdge(4,6,2);
    expect(graph.depthFirstTraversal(4)).toContain(4, 6 );
  });
});
