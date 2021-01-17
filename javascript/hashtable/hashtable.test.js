'use strict';

const obj = require('./hashtable');

describe('Hash Table', () => {
  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    const map = new obj.HashMap(10);
    map.set('Sara', 'cats');
    expect(map.get('Sara').head.value.Sara).toBe('cats');
  });

  it('Retrieving based on a key returns the value stored', () => {
    const map = new obj.HashMap(10);
    map.set('Sara', 'cats');
    expect(map.get('Sara').head.value.Sara).toBe('cats');
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    const map = new obj.HashMap(10);
    map.set('Sara', 'cats');
    expect(map.get('Boots')).toBe(null);
  });

  it('Successfully handle a collision within the hashtable', () => {
    const hashmap = new obj.HashMap(2);
    hashmap.set('Sara', 'cats');
    hashmap.set('Grant', 'dogs');
    hashmap.set('Bob', 'ducks');
    expect(hashmap.size).toBe(2);
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const hashmap = new obj.HashMap(2);
    hashmap.set('Sara', 'cats');
    hashmap.set('Sara', 'dogs');
    hashmap.set('Bob', 'ducks');
    expect(hashmap.get('Sara').head.value.Sara).toBe('cats');
  });

  it('Successfully hash a key to an in-range value', () => {
    const hashmap = new obj.HashMap(20);
    let hashedKey = hashmap.hash('Sara');
    expect(hashedKey).toBeLessThanOrEqual(20);
  });

});
