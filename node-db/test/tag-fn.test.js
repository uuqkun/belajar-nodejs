function tagFunction (array, ...args) {
    console.info(array);
    console.info(args);
};

describe("Tag Function", () => {
    it("Should be able to log array and args", () => {
        const name = "John";
        
        tagFunction`Hello ${name}!`;
        tagFunction`Hello ${name}!How are you?`;
    });
});

describe("Tag Function", () => {
    it("Should be able to log query", () => {
        const name = "John";
        
        tagFunction`SELECT * FROM users WHERE name=${name}`;
    });
});