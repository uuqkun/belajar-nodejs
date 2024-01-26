import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should be able to create new book", async () => {
    const books = [
      {
        name: "Voyage of the Dawn Treader",
        price: 122500,
        category: "Drama",
        stock: 80,
      },
      {
        name: "Bulan Terbelah di Langit Amerika",
        price: 122500,
        category: "Romance",
        stock: 80,
      },
    ];

    const { count } = await prismaClient.books.createMany({
      data: books,
    });

    expect(count).toBe(2);
  });

  it("should be able to update book", async () => {
    const { count } = await prismaClient.books.updateMany({
      data: {
        price: 9.99,
      },
      where: {
        category: "Fantasy",
      },
    });

    expect(count).toBe(4);
  });

  it("Should be able to delete book", async () => {
    const { count } = await prismaClient.books.deleteMany({
      where: {
        name: "The Hobbit II",
      },
    });

    expect(count).toBe(1);
  });

  it("should be able to read all books", async () => {
    const { length } = await prismaClient.books.findMany();

    expect(length).toBe(5);
  });
});
