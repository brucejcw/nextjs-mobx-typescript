import logger from './logger'

export const isDev = () => {
    return process.env.NODE_ENV === 'development'
}

export const isProd = () => {
    return process.env.NODE_ENV === 'production'
}

export const printSystemInfo = () => {
    logger.info('=========== print out system info ===========')
    logger.info(`process.version: ${process.version}`)
    logger.info(`process.env.PORT: ${process.env.PORT}`)
    logger.info(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)
}
