import express from 'express';
import request from "supertest";
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    const name = req.cookies['name'];

    res.send(`Hello ${name}`);
});

app.post('/login', (req, res) => {
    const name = req.body.name;

    res.cookie('Login', name, { path: '/' });
    res.send(`Hello ${name}`);
})

test("Test cookie read", async () => {

    let response = await request(app).get('/')
        .set('Cookie', 'name=uqie;author=uqie rach')

    expect(response.text).toBe('Hello uqie');
});

test("Test cookie write", async () => {

    let response = await request(app).post('/login')
        .send({ name: 'uqie' });

    expect(response.get('Set-Cookie').toString()).toBe('Login=uqie; Path=/')
    expect(response.text).toBe('Hello uqie');
});