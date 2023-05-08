import express from 'express'
import { faker } from '@faker-js/faker';

const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

const app = express()
const PORT = '3000'

app.use("/patrick", express.static('public/pat.html'))
app.use("/home", express.static('public'))

app.get("/", async(req,res) => {
  res.json(randomName)
})

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`)
})
