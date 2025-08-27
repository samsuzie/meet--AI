import { AgentsErrorView, AgentsView, AgentsViewLoading } from '@/modules/agents/ui/views/agents-view';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient ,trpc} from '@/trpc/server';
import React, { Suspense } from 'react'
import { LoadingState } from '@/components/loading-state';
import { ErrorBoundary } from 'react-error-boundary';

const page = async() => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery((trpc).agents.getMany.queryOptions());
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<AgentsViewLoading />}>
        <ErrorBoundary fallback={<AgentsErrorView/>}>
            <AgentsView/>
        </ErrorBoundary>
        </Suspense>
    </HydrationBoundary>
  );
};

export default page;
