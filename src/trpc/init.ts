import { initTRPC, TRPCError } from '@trpc/server';
import next from 'next';
import { cache } from 'react';
import {auth} from '@/lib/auth';
import { headers } from 'next/headers';
export const createTRPCContext = cache(async () => {
  /**
   * @see: https://trpc.io/docs/server/context
   */
  return { userId: 'user_123' };
});
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  // transformer: superjson,
});
// Base router and procedure helpers
//group of apis
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
//one single api
export const baseProcedure = t.procedure;

//protected procedure , to make protected paths
export const protectedProcedure = baseProcedure.use(async ({ ctx, next})=>{
   const session = await  auth.api.getSession({
      headers: await headers(),
    });
    if(!session){
      throw new TRPCError({code:'UNAUTHORIZED', message:'You must be logged in to access this resource'})
    }
    return next({ctx:{
      ...ctx,
      auth:session
    }});
});