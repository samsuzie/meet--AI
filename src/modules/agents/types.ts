import { inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "@/trpc/routers/_app";
// this is done so that frontend knows the exact shape of data returned by your backend's API
export type AgentGetOne = inferRouterOutputs<AppRouter>["agents"]["getOne"];

