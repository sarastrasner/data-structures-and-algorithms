const leftJoin = require('./left-join');

describe('Left Join', () => {
  it('join two tables', () => {
    let table1 = [{'fond':'enamored'}, {'wrath':'anger'},{'diligent':'employed'},{'outfit':'garb'},{'guide':'usher'}];
    let table2 =[{'fond':'averse'}, {'wrath':'delight'},{'diligent':'idle'},{'guide':'follow'},{'flow':'jam'}];
    let result= leftJoin(table1,table2);
    expect(result).toBeDefined();
  });
});
