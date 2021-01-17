# Hashtables

## Challenge
Implement a Hashtable with the following methods:
1. `add`: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
1. `get`: takes in the key and returns the value from the table.
1. `contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.
1. `hash`: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency
1. `add` time O(n)
1. `get` time O(1)
1. `contains` time O(1)
1. `hash` time O(1)

## API
1. `add`: takes in both the key and value. Hashes the key, and adds the key and value pair to the table, handling collisions as needed.
1. `get`: takes in the key and returns the value from the table.
1. `contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.
1. `hash`: takes in an arbitrary key and returns an index in the collection.