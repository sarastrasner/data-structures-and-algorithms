const obj = require('./get-edge');

describe('Testing GetEdges function', () => {
  it('return whether the full trip is possible with direct flights, and how much it would cost', () => {
    let graph = new obj.Graph();
    graph.addVertex('Metroville');
    graph.addVertex('Pandora');
    graph.addDirectedEdge('Metroville','Pandora',82);
    expect(graph.getEdge('Metroville', 'Pandora')).toBe(true);
  });
});
