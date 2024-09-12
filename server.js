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
    origin: 'https://cookietestfront.onrender.com'
}

server.use((req, res, next) => {
    console.log('------------------------------')
    console.log('CUSTOM LOG: Request headers')
    console.log(JSON.stringify(req.headers, null, 2))
    console.log('------------------------------')
    next();
})

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public'))

server.use(cors(corsOptions))
server.use(cookieParser('SecretCookieKey'))
server.use('/', indexRouter)

server.use(errorHandler)
server.use(pathHandler)