import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    it("Should be able to execute raw sql", async() => {
        const id = 1;
        const name = 'Uqie';

        const result = await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUE (${id}, ${name})`;

        expect(result).toBe(1);
    });
});