import { prismaClient } from "../src/prisma-client";

describe("insert", () => {
    it("Should be able to insert new customer", async() => {
        const newCustomer = await prismaClient.customer.create({
            data: {
                id: '2323fjfe93', 
                name: "Salih", 
                email: 'salih@gmail.com',
                phone: '994839',    
            }
        });

        expect(newCustomer.id).toBe('2323fjfe93');
        expect(newCustomer.name).toBe('Salih');
        expect(newCustomer.email).toBe('salih@gmail.com');
        expect(newCustomer.phone).toBe('994839');
    });
});

describe("Prisma ORM update", () => {
    it("Should be able to update customer", async() => {
        const customer = await prismaClient.customer.update({
            data: {
                name: "Abdu Salih", 
                phone: '085755803320',    
            }, where: {
                id: '2323fjfe93'
            }
        });

        expect(customer.id).toBe('2323fjfe93');
        expect(customer.name).toBe('Abdu Salih');
        expect(customer.email).toBe('salih@gmail.com');
        expect(customer.phone).toBe('085755803320');
    });
});

