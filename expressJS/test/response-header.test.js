import express from 'express';
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
    res.set({
        'Content-Type': 'application/json', 
        'X-Author': 'Uqie Rach'
    });
});

test("Test response header", async () => {

    let response = await request(app).get('/');
    expect(response.get('Content-type')).toBe('application/json');
    expect(response.get('X-Author')).toBe('Uqie Rach');
});