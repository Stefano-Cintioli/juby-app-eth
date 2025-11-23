'use client';
import { MiniKitProvider } from '@worldcoin/minikit-js/minikit-provider';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';

interface ClientProvidersProps {
  children: ReactNode;
  session: Session | null;
}

/**
 * ClientProvider wraps the app with essential context providers.
 *
 * - MiniKitProvider: Required for MiniKit functionality and World App integration
 * - SessionProvider: Manages authentication session state
 *
 * This component ensures both providers are available to all child components.
 */
export default function ClientProviders({
  children,
  session,
}: ClientProvidersProps) {
  // Get World App ID from environment variable
  const appId = process.env.NEXT_PUBLIC_WORLD_APP_ID || '';

  if (!appId) {
    console.error('NEXT_PUBLIC_WORLD_APP_ID is not configured. MiniKit functionality will not work.');
  }

  return (
    <MiniKitProvider props={{ appId }}>
      <SessionProvider session={session}>{children}</SessionProvider>
    </MiniKitProvider>
  );
}
