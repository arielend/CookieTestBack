import { Router } from 'express'
import cookiesApi from './cookies.api.js'

const apiRouter = Router()

apiRouter.use("/cookies", cookiesApi)

export default apiRouter