import { merge } from "./merge";

describe("merge function", () => {
  it("should merge three sorted arrays correctly", () => {
    const collection_1 = [1, 4, 7];
    const collection_2 = [10, 8, 6, 4, 2];
    const collection_3 = [3, 4, 5, 9];

    const expected = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10];
    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual(expected);
  });

  it("should handle empty arrays", () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];

    const expected: number[] = [];
    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual(expected);
  });

  it("should handle arrays with negative numbers", () => {
    const collection_1 = [-3, 0, 3];
    const collection_2 = [2, 1, -2];
    const collection_3 = [-1, 4, 5];

    const expected = [-3, -2, -1, 0, 1, 2, 3, 4, 5];
    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual(expected);
  });

  it("should handle arrays with duplicate elements", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [3, 2, 1];
    const collection_3 = [3, 4, 5];

    const expected = [1, 1, 2, 3, 3, 3, 4, 5, 5];
    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual(expected);
  });
});
