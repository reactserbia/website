import { z } from 'zod'

export const emailSubscribeSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email()
})
