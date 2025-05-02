import { z } from 'zod'

export const signupSchema = z.object({
    username: z.string(),
    password: z.string().min(8),
  })

export type signupParams = z.infer<typeof signupSchema>