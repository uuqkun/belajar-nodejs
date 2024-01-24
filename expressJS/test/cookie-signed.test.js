import express from 'express';
import request from "supertest";
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser("SECRETKEY"));

app.get("/", (req, res) => {
    const name = req.signedCookies['Login'];

    res.send(`Hello ${name}`);
});

app.post('/login', (req, res) => {
    const name = req.body.name;

    res.cookie('Login', name, { path: '/', signed: true });
    res.send(`Hello ${name}`);
})

test("Test cookie read", async () => {

    let response = await request(app).get('/')
        .set('Cookie', 'Login=s%3Auqie.dTrF8Fq2PJgQ%2FYHWe4KdRJFL3tLYlwsYLkgJc7QQqeg; Path=/')

    expect(response.text).toBe('Hello uqie');
});

test("Test cookie write", async () => {

    let response = await request(app).post('/login')
        .send({ name: 'uqie' });
    
        console.info(response.get('Set-Cookie'))

    expect(response.get('Set-Cookie').toString()).toContain('uqie')
    expect(response.text).toBe('Hello uqie');
});