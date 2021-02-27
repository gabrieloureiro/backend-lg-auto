import 'reflect-metadata'

import Routes from './routes'
import express from 'express'
import cors from 'cors'

import './database'

const app = express()

app.use(cors())
app.use(express.json())
app.use(Routes)

app.listen(3333, () => {
  console.log('SERVER IS UP!')
})
