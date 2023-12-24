import { z } from 'zod'

export const emailSubscribeSchema = z.object({
    FIRST_NAME: z.string().min(2).max(50),
    LAST_NAME: z.string().min(2).max(50),
    CITY: z.string().min(2).max(50),
    EMAIL: z.string().email()
})
