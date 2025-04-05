import React from "react";
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable"

import {TooltipProvider} from '@/components/ui/tooltip'
import { serializeJsonQuery } from "@prisma/client/runtime/library";

type Props = {
    defaultLayout: number[] | undefined
    navCollapseSize: number
}

const Mail = ({defaultLayout = [20, 32, 40], navCollapseSize}: Props) => {
    return(
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup direction='horizontal' onLayout={(sizes: number[])=>{
                console.log(sizes);
            }} className="items-stretch h-full min-h-screen">
                <ResizablePanel defaultSize={defaultLayout[0]} collapsedSize={navCollapseSize} collapsible={true}
                minSize={15}
                maxSize={40}
                onResize={() => {

                }}
                className={'min-w-[50px] transition-all duration-300 ease-in-out'}
                >

                    <div className="flex flex-col h-full flex-1">
                        <div className="flex h-[52px] items-center justify-between">
                            {/*Account switcher */}
                        </div>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
    )
}