import { ResponsiveDialog } from "@/components/responsive-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AgentForm } from "./agent-form";
interface NewAgentDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export const NewAgentDialog = ({open,onOpenChange}:NewAgentDialogProps) => {
    return (
        <ResponsiveDialog title="Create New Agent"  description="Create a new Agent" open={open} onOpenChange={onOpenChange}>
        <AgentForm
            onSucess={()=>onOpenChange(false)}
            onCancel={()=>onOpenChange(false)}/>
        </ResponsiveDialog>
    )
}