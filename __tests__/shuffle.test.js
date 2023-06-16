const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  it('should return an array with the same length as the input array', () => {
    const input = [1, 2, 3, 4, 5];
    const shuffled = shuffle(input);
    expect(shuffled.length).toBe(input.length);
  });

  it('should return an array with the same elements as the input array', () => {
    const input = [1, 2, 3, 4, 5];
    const shuffled = shuffle(input);
    expect(shuffled.sort()).toEqual(input.sort());
  });
});
