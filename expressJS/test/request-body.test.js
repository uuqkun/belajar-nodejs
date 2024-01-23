import express from 'express';
import request from "supertest";

const app = express();

// Built-in Middleware for JSON & form parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.post('/json', (req, res) => {
    const name = req.body.name
    res.json({
        message: `Hello ${name}`
    });
});

app.post('/form', (req, res) => {
    const name = req.body.name;
    res.json({
        message: `Hello ${name}`
    });
});


// Unit test 
test('Request body JSON parsing', async () => {
    const response = await request(app)
        .post('/json')
        .set('Content-Type', 'application/json')
        .send({ name: 'uqie' });

    expect(response.body).toEqual({ message: 'Hello uqie' })
});

test('Request body Form parsing', async () => {
    const response = await request(app)
        .post('/form')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send('name=uqie');

    expect(response.body).toEqual({ message: 'Hello uqie' })
});

