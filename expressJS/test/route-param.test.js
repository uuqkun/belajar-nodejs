import express from "express"
import request from 'supertest'

const app = express()

app.get('/categories/:id', (req, res) => {
    const idCategory = req.params.id
    res.send(`Category ID: ${idCategory}`)
    
})

app.get('/products/:id(\\d+)', (req, res) => {
    const idProduct = req.params.id
    res.send(`Product ID: ${idProduct}`)
    
})

test('Route path params test', async () => {
    let response = await request(app).get('/products/23')
    expect(response.status).toBe(200)
    expect(response.text).toBe('Product ID: 23')

    response = await request(app).get('/products/ggg')
    expect(response.status).toBe(404)

    response = await request(app).get('/categories/pakaian')
    expect(response.status).toBe(200)
    expect(response.text).toBe('Category ID: pakaian')

})