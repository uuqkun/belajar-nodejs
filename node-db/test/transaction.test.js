import { prismaClient } from "../src/prisma-client";

// describe("Prisma ORM", () => {
//   it("should execute sequential transaction", async () => {
//     const [user1, user2] = await prismaClient.$transaction([
//       prismaClient.customer.create({
//         data: {
//           id: "2f3f219r3",
//           name: "Rudy",
//           email: "rrr@gmail.com",
//           phone: "994839",
//         },
//       }),
//       prismaClient.customer.create({
//         data: {
//           id: "1f3f219r3",
//           name: "Donny",
//           email: "don@gmail.com",
//           phone: "1290839",
//         },
//       }),
//     ]);

//     expect(user1.name).toBe("Rudy");
//     expect(user2.name).toBe("Donny");
//   });
// });

describe("Prisma ORM", () => {
  it("should execute interactive transaction", async () => {
    const [user1, user2] = await prismaClient.$transaction(async (prisma) => {
      const user1 = await prisma.customer.findUnique({
        where: {
            id: "2f3f219r3",
        }
      });

      const user2 = await prisma.customer.findUnique({
        where: {
            id: "1f3f219r3",
        }
      });

      return [user1, user2];
    });

    expect(user1.name).toBe("Rudy");
    expect(user2.name).toBe("Donny");
  });
});
