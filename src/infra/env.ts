import { z } from 'zod'

const envSchema = z.object({
  MODE: z
    .enum(['development', 'staging', 'production', 'test'])
    .default('development'),
  VITE_BASE_URL: z.string().url(),
})

const _env = envSchema.safeParse(import.meta.env)

if (!_env.success) {
  console.error('❌ Invalid environment variables', _env.error.format())
  throw new Error('Invalid environment variables')
}

export const env = _env.data
console.log(env.MODE)

export function isStaging() {
  return env.MODE === 'staging'
}

export function isProduction() {
  return env.MODE === 'production'
}

export function isDevelopment() {
  return env.MODE === 'development'
}
