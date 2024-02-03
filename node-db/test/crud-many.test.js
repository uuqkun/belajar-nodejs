import { prismaClient } from "../src/prisma-client.js";

/*
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
*/

// CRUD test
describe("Prisma Client ORM", () => {
  it("should be able to create data", async () => {
    const { count } = await prismaClient.products.createMany({
      data: [
        {
          id: "P0001",
          name: "Shampoo A",
          price: 1.99,
          stock: 100,
          category: "Shampoo",
        },
        {
          id: "P0002",
          name: "Chicken Breast Fillet",
          price: 1.99,
          stock: 10,
          category: "Fresh Products",
        },
        {
          id: "P0003",
          name: "Face Wash B",
          price: 0.79,
          stock: 100,
          category: "Face Wash",
        },
        {
          id: "P0004",
          name: "Tissue X",
          price: 0.39,
          stock: 100,
          category: "Tissue",
        },
        {
          id: "P0005",
          name: "Toothpaste Y",
          price: 1.99,
          stock: 100,
          category: "Toothpaste",
        },
        {
          id: "P0006",
          name: "Toothpaste Y",
          price: 1.99,
          stock: 100,
          category: "Toothpaste",
        },
        {
          id: "P0007",
          name: "Toothpaste Y",
          price: 2.99,
          stock: 22,
          category: "Toothpaste",
        },
        {
          id: "P0006",
          name: "Face Serum Y",
          price: 3.99,
          stock: 10,
          category: "Face Serum",
        },
      ],
      skipDuplicates: true,
    });

    console.info(`Created ${count} products`);
  });

  test("should retrieve aggregated data", async () => {
    const products = await prismaClient.products.groupBy({
      by: ["category"],
      _avg: {
        stock: true,
        price: true,
      },
    });

    console.info(products);
  });

  test("should retrieve aggregated data (count)", async () => {
    const products = await prismaClient.products.aggregate({
      _avg: {
        stock: true,
        price: true
      }, 
      count: {
        category: true
      }
    });

    console.info(products)
  });
});
