import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import indexRouter from './src/routers/index.router.js'
import errorHandler from './src/middlewares/errorHandler.mid.js'
import pathHandler from './src/middlewares/pathHandler.mid.js'

import __dirname from './utils.js'

const server = express()
const port = process.env.PORT || 8080

const ready = async () => {
    console.log(`Server ready on http://localhost:${port}`)
}

server.listen(port, ready)

const corsOptions = {
    credentials: true,
    origin: 'https://cookie-test-front.vercel.app'
}

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public'))

server.use(cors(corsOptions))
server.use(cookieParser('SecretCookieKey'))
server.use('/', indexRouter)

server.use(errorHandler)
server.use(pathHandler)