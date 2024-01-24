import express from 'express';
import request from "supertest";

const app = express();

app.use(express.static(__dirname + '/static'))

app.get("/", (req, res) => {
    res.send(`Hello Response`);
});

app.get("/info.txt", (req, res) => {
    res.send(`Hello Response`);
});

test("Test static file", async() => {

    const response = await request(app).get('/')

    expect(response.text).toContain('Hello Response');
});

test("Test static file /info.txt", async() => {

    const response = await request(app).get('/info.txt')

    expect(response.text).toContain('uqie');
});