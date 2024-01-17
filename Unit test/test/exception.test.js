import { callMe, myException } from "../src/exception.js";

test('exception', () => {
    expect(() => callMe('Uqie')).toThrow();
    expect(() => callMe('Uqie')).toThrow(myException);
    expect(() => callMe('Uqie')).toThrow("Error");
});

test("Exception not happen", () => {
    expect(callMe("uqie")).toBe("OK");
});