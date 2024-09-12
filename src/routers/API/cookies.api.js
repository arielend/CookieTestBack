import { getCookies } from '../../controllers/cookies.controller.js'
import { Router } from 'express'

const cookiesRouter = Router()

cookiesRouter.post("/", getCookies)

export default cookiesRouter