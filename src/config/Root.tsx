'use client'

import { ReactChildren } from '@/interfaces/interface.common'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Container from '@/config/Container'

export default function Root({ children }: ReactChildren) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
      },
    },
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        <Container>{children}</Container>
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
