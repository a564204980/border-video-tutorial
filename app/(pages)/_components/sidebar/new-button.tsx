import React from "react";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
            <Plus className="text-white" />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
        {/* 使用hash路由模式可以满足Clerk的路由要求 */}
        <CreateOrganization routing="hash" />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
