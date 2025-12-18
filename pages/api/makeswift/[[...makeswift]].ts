import type { NextApiRequest, NextApiResponse } from 'next'
import { MakeswiftApiHandler } from '@makeswift/runtime/next/server'

import { runtime } from '../../../makeswift/runtime'
import '../../../makeswift/components'

const handler = MakeswiftApiHandler(
  process.env.MAKESWIFT_SITE_API_KEY as string,
  { runtime },
)

export default function makeswiftApi(req: NextApiRequest, res: NextApiResponse) {
  return handler(req, res)
}
