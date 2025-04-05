import React from "react";
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable"

import {TooltipProvider} from '@/components/ui/tooltip'
import { serializeJsonQuery } from "@prisma/client/runtime/library";

type Props = {
    defaultLayout: number[] | undefined
}

const Mail = ({defaultLayout = [20, 32, 40]}: Props) => {
    return(
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup direction='horizontal' onLayout={(sizes: number[])=>{
                console.log(sizes);
            }} className="items-stretch h-full min-h-screen">

            </ResizablePanelGroup>
        </TooltipProvider>
    )
}