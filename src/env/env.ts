import { z } from 'zod'

const envSchema = z.object({
  EXPO_PUBLIC_WEATHER_APP_ID: z.string(),
})

export const env = envSchema.parse(process.env)
