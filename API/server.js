import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()

app.get('/usuarios', (req, res) => {
    res.send('blz')
})

app.listen(3000)