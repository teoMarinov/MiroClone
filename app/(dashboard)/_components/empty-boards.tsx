import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";

export const EmptyBoards = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image src="/note.svg" width={110} height={110} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
      <p className="to-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
      <Dialog>
      <DialogTrigger>
        <div className="aspect-square">
         
            <Button size={'lg'}>
                Create new board
            </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none min-w-[480px]">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
      </div>
    </div>
  );
};
