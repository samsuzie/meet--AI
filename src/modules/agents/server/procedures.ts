import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { db } from "@/db";
import { agents } from "@/db/schema";
import { resolve } from "path";
import { agentsInsertSchema } from "../schemas";
import { z } from "zod";
import { eq, getTableColumns } from "drizzle-orm";
import { sql } from "drizzle-orm";


export const agentsRouter  = createTRPCRouter({
    //TODO: Change 'getOne' to use 'protectedProcedure'
    getOne: protectedProcedure.input(z.object({id: z.string() })).query(async ({input})=>{
        const [existingAgent]= await db
        .select({
            //todo : Change to actual count 
            meetingCount: sql<number> `5`,
            ...getTableColumns(agents),
           
        })
        .from(agents)
        .where(eq(agents.id, input.id))
        return existingAgent;
    }),
    //TODO: Change 'getMany' to use 'protectedProcedure'
    getMany: protectedProcedure.query(async ()=>{
        const data = await db
        .select()
        .from(agents);
       
        return data;
    }),
    create: protectedProcedure.
    input(agentsInsertSchema)
    .mutation(async ({input,ctx})=>{
       const [createdAgent] = await db
       .insert(agents)
       .values({
        ...input,
        userId: ctx.auth.user.id,
       })
       .returning();
        return createdAgent;
    }),
});