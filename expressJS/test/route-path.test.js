import express from "express"
import request from 'supertest'

const app = express()

app.get('/categories/*.json', (req, res) => {
    res.send(req.originalUrl)
})

app.get('/products/*(\\d+).json', (req, res) => {
    res.send(req.originalUrl)
})

test('Route path test', async () => {
    let response = await request(app).get('/products/23.json')
    expect(response.status).toBe(200)
    expect(response.text).toBe('/products/23.json')

    response = await request(app).get('/products/ggg.json')
    expect(response.status).toBe(404)

    response = await request(app).get('/categories/pakaian.json')
    expect(response.status).toBe(200)
    expect(response.text).toBe('/categories/pakaian.json')

})