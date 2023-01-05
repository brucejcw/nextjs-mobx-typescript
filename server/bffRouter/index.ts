import express from 'express'
import accountRouter from './accountRouter'
import todoRouter from './todoRouter'

const bffRouter = express.Router()

bffRouter.use('/account', accountRouter)
bffRouter.use('/todo', todoRouter)

export default bffRouter
