import findPeakElement from ".";

describe("findPeakElement", () => {
  it("when there is one peak, should find it only", () => {
    const nums = [1, 2, 3, 1];
    expect(findPeakElement(nums)).toEqual(2);
  });

  it("when there is one peak at the beginning, should find it only", () => {
    const nums = [30, 20, 10, 0];
    const result = findPeakElement(nums);
    expect(result).toBe(0);
  });

  it("when there is one peak at the end, should find it only", () => {
    const nums = [0, 10, 20, 30];
    const result = findPeakElement(nums);
    expect(result).toBe(3);
  });

  it("when there is one peak at the end, should find it only-2", () => {
    const nums = [1, 2];
    const result = findPeakElement(nums);
    expect(result).toBe(1);
  });

  it("when there are multiple peak elements, should return either one", () => {
    const nums = [1, 2, 1, 3, 5, 6, 4];
    const result = findPeakElement(nums);
    expect(result === 1 || result === 5).toBe(true);
  });

  it("when there is only one element, should return 0", () => {
    const nums = [20];
    expect(findPeakElement(nums)).toEqual(0);
  });

  it("when there is no element, should return -1", () => {
    const nums = [];
    expect(findPeakElement(nums)).toEqual(0);
  });
});
