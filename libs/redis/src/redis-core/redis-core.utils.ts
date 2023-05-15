import Redis from 'ioredis'
import { RedisModuleOptions } from './redis-core.interfaces'
import {
  REDIS_MODULE_CONNECTION,
  REDIS_MODULE_OPTIONS_TOKEN,
  REDIS_MODULE_CONNECTION_TOKEN,
} from './redis-core.constants'

export function getRedisOptionsToken(connection?: string): string {
  return `${
    connection || REDIS_MODULE_CONNECTION
  }_${REDIS_MODULE_OPTIONS_TOKEN}`
}

export function getRedisConnectionToken(connection?: string): string {
  return `${
    connection || REDIS_MODULE_CONNECTION
  }_${REDIS_MODULE_CONNECTION_TOKEN}`
}

export function createRedisConnection(options: RedisModuleOptions) {
  const { config } = options
  if (config.url) {
    return new Redis(config.url, config)
  } else {
    return new Redis(config)
  }
}
