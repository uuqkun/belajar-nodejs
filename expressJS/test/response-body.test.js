import express from 'express';
import request from "supertest";

test("Test response body", async () => {
    const app = express();

    app.get("/", (req, res) => {
        res.set({
            'Content-type': 'application/json'
        });

        res.send({
            id: 1,
            name: 'Uqie Rach',
            email: 'uuqkun@gmail.com'
        })

    });

    const response = await request(app).get('/')
    expect(response.body).toEqual({
        id: 1,
        name: 'Uqie Rach',
        email: 'uuqkun@gmail.com'
    })
});