// this file and its content will only be used for rendering the routes and not for developing the code . 
// the actual code will be developed or coded in sign-in-view.tsx file 
import { Card } from "@/components/ui/card";
import { Sign } from "crypto";
import { SignInView } from "@/modules/auth/ui/views/sign-in-view";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
const Page=async()=>{
    const session = await  auth.api.getSession({
    headers: await headers(),
    });

    if(!!session){
        redirect('/');
    }
    return<SignInView />
}
export default Page;

// to find the above page , we have to go to
// http://localhost:3000/sign-in

