import { MakeswiftApiHandler } from '@makeswift/runtime/next/server'

import { runtime } from '../../../makeswift/runtime'
import '../../../makeswift/components'

export const dynamic = 'force-dynamic'

const handler = MakeswiftApiHandler(
  process.env.MAKESWIFT_SITE_API_KEY as string,
  { runtime },
)

export { handler as GET, handler as POST, handler as OPTIONS }
