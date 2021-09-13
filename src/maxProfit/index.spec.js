import maxProfit from "./index";

describe("maxProfit", () => {
  it("when only 1 day, cannot make profit", () => {
    const prices = [10];
    expect(maxProfit(prices)).toEqual(0);
  });

  it("when price increases, should make profit", () => {
    const prices = [10, 20];
    expect(maxProfit(prices)).toEqual(10);
  });

  it("calculates maximum profit-case 1", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toEqual(7);
  });

  it("calculates maximum profit-case 2", () => {
    const prices = [1, 2, 3, 4, 5];
    expect(maxProfit(prices)).toEqual(4);
  });

  it("calculates maximum profit-case 3", () => {
    const prices = [7, 6, 4, 3, 1];
    expect(maxProfit(prices)).toEqual(0);
  });
});
