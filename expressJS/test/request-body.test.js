import express from 'express';
import request from "supertest";
import fileUpload from 'express-fileupload';

const app = express();

// Built-in Middleware for JSON & form parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());

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

app.post('/file', async (req, res) => {
    const textFile = req.files.article;
    await textFile.mv(__dirname + '/upload/' + textFile.name);

    res.send(`Hello ${req.body.name} you uploaded ${textFile.name}`);
})


// Unit test 
test("Test request file upload", async () => {
    const response = await request(app)
        .post('/file') 
        .set("content-type", 'multipart/form-data')
        .field('name', 'uqie')
        .attach('article', __dirname + '/info.txt');

        expect(response.text).toBe("Hello uqie you uploaded info.txt")
});

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

