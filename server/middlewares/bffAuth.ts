import { get } from 'lodash'
import { Request, Response, NextFunction } from 'express-serve-static-core'
import BffException from '../exceptions/BffException'

const bffAuth = async (req: Request, _res: Response, next: NextFunction) => {
    if (get(req, 'session.passport')) {
        return next()
    }
    const params = {
        status: 401,
        code: 'UNAUTHORIZED',
    }
    return next(new BffException('Bff request not authenticated', params))
}

export default bffAuth
