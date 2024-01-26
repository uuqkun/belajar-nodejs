import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    it("Should be able to query sql", async() => {
        const id = 1;
        const users = await prismaClient.$queryRaw`SELECT * FROM sample WHERE id = ${id}`;

        for (const user of users) {
            console.info(`id: ${user.id}, name: ${user.name}`)
        };
    });
});