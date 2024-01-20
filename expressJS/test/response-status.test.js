import express from 'express';
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
    if (req.query.id) {
        res.status(200);
        res.send(`${req.query.id}`);
    } else {
        res.status(400);
        res.end();
    }
});

test("Test response status", async () => {

    let response = await request(app).get('/').query({ id: 'Q123F' });
    expect(response.status).toBe(200);
    expect(response.text).toBe(`Q123F`);

    response = await request(app).get('/');
    expect(response.status).toBe(400);
});