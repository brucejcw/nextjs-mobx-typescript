import express from 'express'
import { parse } from 'url'
import { Request, Response, NextFunction } from 'express-serve-static-core'
import app from './app'
import logger from '../lib/logger'

const router = express.Router()

const handle = app.getRequestHandler()
// const backDoorUrl = '/login/goalkeeper'

function ensureAuthenticated(_req: Request, _res: Response, next: NextFunction) {
    // if (req.isAuthenticated() || req.url === backDoorUrl) {
    return next()
    // }
    // return res.redirect(`${basePath}/login`)
}

router.get('*', ensureAuthenticated, (req, res) => {
    const parsedUrl = parse(req.url, true)
    logger.debug(parsedUrl.pathname)
    return handle(req, res, parsedUrl)
})

export default router
