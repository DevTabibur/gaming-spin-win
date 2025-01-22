import path from 'path'
import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import { TransformableInfo } from 'logform'
const { combine, timestamp, label, printf } = format

//! Custom Log Format

const myFormat = printf((info: TransformableInfo) => {
  const date = new Date(info.timestamp as string)
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return `${date.toDateString()} ${hour}:${minutes}:${seconds} } [${info.label}] ${info.level}: ${info.message}`
})

// ! this is successLogger
const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'Gaming' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'GAMING-Home-%DATE%-success.log'
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

// ! this is errorLogger
const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'Gaming' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'Gaming-Home-%DATE%-error.log'
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

export { logger, errorLogger }

//** HOW TO USE */
// import { logger, errorlogger } from '../../logger'
// logger.info('API Request Received') // print & store success message
// errorLogger.error(`API Error: ${error.message}`) // print & store error / fatal message
