import { prismaClient } from "../src/prisma-client";

describe('One to one relationship', () => {
    test('should able to create new records', async () => {
        const authors = await prismaClient.author.createMany({
            data: [
                {
                    id: "a0219"
                },
                {
                    id: "a0213"
                },
                {
                    id: "a0211"
                },
                {
                    id: "a0241"
                },
                {
                    id: "a0214"
                },
                {
                    id: "a0210"
                }
            ],
            skipDuplicates: true
        });

        console.info(authors);
    });

    test('should create new detail for assigned author', async () => {  
        const authorDetail = await prismaClient.authorDetail.create({
            data: {
                name: "Rizky Ramadhan",
                authorId: "a0211",
                nationality: "Indonesia",
                phone_num: "08123456789"
            },

        })

        console.info(authorDetail);
    })

    test('should read data from authors table', async () => {
        const authors = await prismaClient.author.findMany({
            select: {
                id: true,
                detail: true
            }
        })

        console.info(authors)
    })




});