"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { BotIcon, StarIcon, VideoIcon } from "lucide-react";
import { labelDayButton } from "react-day-picker";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { DashboardUserButton } from "./dashboard-user-button";
const firstSection =[
    {
        icon: VideoIcon,
        label: "Meetings",
        href:"/meetings",
    },
    {
        icon: BotIcon,
        label: "Agents",
        href:"/agents",
    },
];


const secondSection =[
    {
        icon: StarIcon,
        label: "Upgrade",
        href: "/upgrade",
    },
    
];

export const DashboardSidebar = () => {
    const pathname = usePathname();
    return (
        <Sidebar>
            <SidebarHeader className="text-sidebar-accent-foreground">
                <Link href="/" className="flex items-center gap-2 px-2 pt-2">
                <Image src="/logo.svg" height={36} width={36} alt="Meet.AI"/>
                <p className="text-2xl font-semibold">Meet.AI</p>
                </Link>
            </SidebarHeader>
            <div className="px-4 py-2">
                <Separator className="opacity-10000 text-[#5D6B68]"/>
            </div>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {firstSection.map((item)=>(
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton 
                                    asChild
                                    className={cn(
                                         "h-10 border border-transparent hover:bg-gradient-to-r hover:border-[#5D6B68]/30 from-sidebar-accent from-4% via-sidebar/50 to-sidebar/50 transition-colors duration-200",
                                          pathname === item.href &&
                                          "bg-gradient-to-r border-l-4 border-l-[#5D6B68] border-[#5D6B68]/50 from-sidebar-accent/20 to-sidebar/10"
                                        )}
                                        isActive={pathname === item.href}
                                    >
                                        <Link href={item.href}>
                                        <item.icon className="size-5"/>
                                        <span className="text-sm font-medium tracking-tight">
                                        {item.label}
                                        </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                 <div className="px-4 py-2">
                <Separator className="opacity-10000 text-[#5D6B68]"/>
            </div>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {secondSection.map((item)=>(
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton 
                                    asChild
                                    className={cn(
                                         "h-10 border border-transparent hover:bg-gradient-to-r hover:border-[#5D6B68]/30 from-sidebar-accent from-4% via-sidebar/50 to-sidebar/50 transition-colors duration-200",
                                          pathname === item.href &&
                                          "bg-gradient-to-r border-l-4 border-l-[#5D6B68] border-[#5D6B68]/50 from-sidebar-accent/20 to-sidebar/10"
                                        )}
                                        isActive={pathname === item.href}
                                    >
                                        <Link href={item.href}>
                                        <item.icon className="size-5"/>
                                        <span className="text-sm font-medium tracking-tight">
                                        {item.label}
                                        </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="text-white">
                <DashboardUserButton/>
            </SidebarFooter>
        </Sidebar>
    )
};