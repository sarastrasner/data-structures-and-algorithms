# Graphs
Implement your own Graph. The graph should be represented as an adjacency list.

## Challenge
Write the following methods:
1. AddNode()
Adds a new node to the graph
Takes in the value of that node
Returns the added node
1. AddEdge()
Adds a new edge between two nodes in the graph
Include the ability to have a “weight”
Takes in the two nodes to be connected by the edge
Both nodes should already be in the Graph
1. GetNodes()
Returns all of the nodes in the graph as a collection (set, list, or similar)
1. GetNeighbors()
Returns a collection of edges connected to the given node
Takes in a given node
Include the weight of the connection in the returned collection
1. Size()
Returns the total number of nodes in the graph

## Approach & Efficiency
1. AddNode() - O(1)
1. AddEdge()- O(1)
1. GetNodes() - O(N)
1. GetNeighbors()  O(1)
1. Size()- O(N)

## API
1. AddNode()
Adds a new node to the graph
Takes in the value of that node
Returns the added node
1. AddEdge()
Adds a new edge between two nodes in the graph
Include the ability to have a “weight”
Takes in the two nodes to be connected by the edge
Both nodes should already be in the Graph
1. GetNodes()
Returns all of the nodes in the graph as a collectiom
1. GetNeighbors()
Returns a collection of edges connected to the given node
Takes in a given node
Include the weight of the connection in the returned collection
1. Size()
Returns the total number of nodes in the graph