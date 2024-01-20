import express from 'express';
import request from "supertest";

test("Request Query", async() => {
    const app = express();

    app.get("/", (req, res) => {
        const accept = req.get("Accept");
        res.send(`Accept: ${accept}`);
    });

    const response = await request(app).get('/').set("Accept", "application/json");

    expect(response.text).toBe('Accept: application/json');
});