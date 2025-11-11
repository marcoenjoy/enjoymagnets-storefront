'use client';

import { runtime } from './runtime';
import { type SiteVersion } from '@makeswift/runtime/next';
import { ReactRuntimeProvider, RootStyleRegistry } from '@makeswift/runtime/next';
import './components';

export function MakeswiftProvider({
  children,
  siteVersion,
}: {
  children: React.ReactNode;
  siteVersion: SiteVersion | null;
}) {
  return (
    <ReactRuntimeProvider siteVersion={siteVersion} runtime={runtime}>
      <RootStyleRegistry>{children}</RootStyleRegistry>
    </ReactRuntimeProvider>
  );
}
