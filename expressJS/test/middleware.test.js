import express from 'express';
import request from "supertest";

// Middlewares 
const logger = (req, res, next) => {
    console.info(`Received request: ${req.method} ${req.originalUrl}`);
    next();
};

const addPoweredHeader = (req, res, next) => {
    res.set("X-powered-by", "Uqie Rach");
    next();
};

const apiKeyMiddleware = (req, res, next) => {
    if (req.query.apiKey) {
        next();
    } else {
        req.status(401).end();
    }
};

const requestTimeMiddleware = (req, res, next) => {
    req.requestTime = Date.now();
    next();
};


const app = express();
app.use(logger);
app.use(apiKeyMiddleware);
app.use(addPoweredHeader);
app.use(requestTimeMiddleware);

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.get('/time', (req, res) => {
    res.send(`Hello, Today is ${req.requestTime}`)
});

test("Test response middleware", async () => {
    const response = await request(app).get('/').query({ apiKey: 12 });
    expect(response.get('X-powered-by')).toBe('Uqie Rach')
    expect(response.text).toBe("Hello world!");
});

test("Test response middleware unauthorized", async () => {
    const response = await request(app).get('/');
    expect()
    expect(response.status).toBe(500);
});

test("Test response middleware", async () => {
    const response = await request(app).get('/time').query({ apiKey: 12 });
    expect(response.get('X-powered-by')).toBe('Uqie Rach')
    expect(response.text).toContain("Hello, Today is");
});


