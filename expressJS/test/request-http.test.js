import express from 'express';
import request from "supertest";

test("Request Query", async() => {
    const app = express();
    app.get("/", (req, res) => {
        res.send(`Hello ${req.query.name}`);
    });

    // const response = await request(app).get('/?name=John');
    const response = await request(app).get('/').query({name: 'Uqie'});

    expect(response.text).toBe('Hello Uqie');
});