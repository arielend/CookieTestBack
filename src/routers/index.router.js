import { Router } from 'express'
import indexApi from './API/index.api.js'

const indexRouter = Router()

indexRouter.use("/api", indexApi)

export default indexRouter