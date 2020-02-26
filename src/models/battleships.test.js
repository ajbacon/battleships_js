import Battleships from './battleships';

describe('Battleships', () => {
  var game
  var expected;

  beforeEach(() => {
    expected = []
    game = new Battleships();
  });

  it('it should initialise a 10x10 array of empty cell objects', () => {
    for(let i = 0; i < 10; i++) {
      expected.push(Array(10).fill({value: "-", shipId: null}))
    };
    expect(game.render()).toEqual(expected);
  });
});
