import winston from 'winston'
import { isDev } from './env'

const logger = winston.createLogger({
    level: isDev() ? 'debug' : 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        winston.format.align(),
        winston.format.printf((info) => `[${info.level}]: ${[info.timestamp]}: ${info.message}`),
    ),
    defaultMeta: { service: 'custom-service' },
    transports: [new winston.transports.Console()],
})

export default logger
