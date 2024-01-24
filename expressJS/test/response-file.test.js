import express from 'express';
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/info.txt')
});

test("Test response sendfile", async () => {

    const response = await request(app).get('/')
    expect(response.text).toContain('uqie');
});