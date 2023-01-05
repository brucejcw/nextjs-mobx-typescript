import express from 'express'
import { getAccount } from '@server/services/accountService'

const router = express.Router()

router.get('/test', (_req, res) => {
    const result = getAccount()
    return res.json(result)
})

export default router
