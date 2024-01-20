import express from "express";
import request from "supertest";

const app = express();

app.get("/user", (req, res) => {
    res.send(`Hello ${req.query.firstName} ${req.query.lastName}!`);
});

test("Test request query param", async  () => {
    // const response = await request(app).get('/user?firstName=Uqie&lastName=Rach');
    const response = await request(app).get('/user').query({
        firstName: 'Uqie', 
        lastName: 'Rach'
    });

    expect(response.text).toBe('Hello Uqie Rach!');
});