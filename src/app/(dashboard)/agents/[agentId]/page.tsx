import { getQueryClient,trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { AgentIdView } from "@/modules/agents/ui/views/agent-id-view";
import { AgentIdViewLoading } from "@/modules/agents/ui/views/agent-id-view";
import { AgentIdViewError } from "@/modules/agents/ui/views/agent-id-view";
interface Props{
    params: Promise<{agentId: string}>
};

const Page = async ({ params}: Props)=>{
    const { agentId } = await params;
    
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(
        trpc.agents.getOne.queryOptions({ id: agentId}),
    );
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<AgentIdViewLoading/>}>
                <ErrorBoundary fallback={<AgentIdViewError/>}>
                <AgentIdView agentId={agentId}/>
                </ErrorBoundary>
            </Suspense>
        </HydrationBoundary>
    );
}

export default Page;