import express from 'express'
import { Express } from 'express-serve-static-core'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import app from '@server/pageRouter/app'
import pageRouter from '@server/pageRouter'
import bffRouter from '@server/bffRouter'
import logger from '@server/lib/logger'
import { printSystemInfo } from '@server/lib/env'
import { bffErrorHandler } from '@server/middlewares/handleError'

printSystemInfo()

const port = parseInt(process.env.PORT || '3000', 10)
let server: Express

app.prepare()
    /**
     * server settings
     */
    .then(() => {
        server = express()
        server.use(cookieParser())
        server.use(bodyParser.urlencoded({ extended: true }))
        server.use(bodyParser.json())

        server.get('/health', (_req, res) => {
            res.json({ health: 'OK' })
        })
    })
    /**
     * router settings
     */
    .then(() => {
        server.use('/bff', bffRouter, bffErrorHandler)
        server.use('/', pageRouter)
    })
    /**
     * listen
     */
    .then(() => {
        server
            .listen(port, () => {
                logger.info(`> Ready on http://localhost:${port}`)
            })
            .on('error', (err) => {
                logger.error(err)
            })
    })
    /**
     * exception
     */
    .catch((ex) => {
        logger.error(ex.stack)
        process.exit(1)
    })
