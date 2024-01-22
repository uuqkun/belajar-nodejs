import express from 'express';
import request from "supertest";

const app = express();

app.get('/', (req, res) => {
    res.redirect('/next-page');
});


test('Request Redirect', async() => {
    const response = await request(app).get('/');

    expect(response.status).toBe(302);
    expect(response.get('Location')).toBe('/next-page');
});

