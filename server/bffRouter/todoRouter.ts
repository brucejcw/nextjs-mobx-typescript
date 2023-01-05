import express from 'express'
import BffException from '@server/exceptions/BffException'

const router = express.Router()

router.get('/list', (_req, res, next) => {
    try {
        const result = {
            list: [
                {
                    title: 'have a meeting',
                },
                {
                    title: 'have a trip',
                },
            ],
        }

        return res.json(result)
    } catch (e) {
        return next(new BffException('not match'))
    }
})

router.post('/add', (_req, res) => {
    return res.json({ success: true })
})

export default router
