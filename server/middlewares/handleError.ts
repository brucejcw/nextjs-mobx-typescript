import { NextFunction, Request, Response } from 'express'
import logger from '@server/lib/logger'

export const bffErrorHandler = async (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (typeof next === 'function') {
        logger.error(err && err.message, req, 'Error - BFF error caught')
        return res.status(500).json({ err })
    }
}
