import createWithMakeswift from '@makeswift/runtime/next/plugin'
const withMakeswift = createWithMakeswift()
/** @type {import('next').NextConfig} */
const nextConfig = {}
export default withMakeswift(nextConfig)
