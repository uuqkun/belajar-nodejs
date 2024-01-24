import express from 'express';
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
    res.send(`Hello Response`);
});

app.use((req, res) => {
    res.status(404).send('Halaman tidak ditemukan!');
});

test("Test response", async() => {

    const response = await request(app).get('/')

    expect(response.text).toBe('Hello Response');
});

test("Test response not found", async() => {

    const response = await request(app).get('/not-found')

    expect(response.status).toBe(404);
    expect(response.text).toBe('Halaman tidak ditemukan!');
});
