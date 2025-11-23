import { Makeswift } from '@makeswift/runtime/next'
import { runtime } from './runtime'
if (!process.env.MAKESWIFT_SITE_API_KEY) throw new Error('MAKESWIFT_SITE_API_KEY is required')
export const client = new Makeswift(process.env.MAKESWIFT_SITE_API_KEY!, { runtime })
