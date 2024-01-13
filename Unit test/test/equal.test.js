test("test tobe", () => {
    const name = "uqie";
    const say = `Hello ${name}`;

    expect(say).toBe("Hello uqie");
});

test("test toEqual", () => {
    let worker = { id: 1 };
    Object.assign(worker, { name: 'uqie' });

    expect(worker).toEqual({ id: 1, name: 'uqie' });
});