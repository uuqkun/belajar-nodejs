import { sum, sumAll } from "../src/sum.js";

test("test sum function 1", () => {
    const result = sum(1, 2);

    expect(result).toBe(3);
});

test("test sumAll function 2", () => {
    const result = sumAll([1, 2, 4, 5, 1, 8]);

    expect(result).toBeGreaterThan(10);
});
