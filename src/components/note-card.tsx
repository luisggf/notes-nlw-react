import * as Dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import { X } from "lucide-react";

interface CardData {
  note: {
    creationDate: Date;
    content: string;
  };
}

export function NoteCard({ note }: CardData) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md text-left bg-slate-800 p-5 flex flex-col gap-3 relative overflow-hidden hover:ring-2 hover:ring-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-300">
          {note.creationDate.toISOString()}
        </span>
        <p className="text-sm leading-6 text-slate-400">{note.content}</p>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-black/0"></div>
      </Dialog.Trigger>
      <Dialog.DialogPortal>
        <Dialog.DialogOverlay className="inset-0 fixed bg-black/50" />
        <Dialog.DialogContent className="overflow-hidden fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] h-[60vh] w-full bg-slate-700 rounded-md flex flex-col outline-none">
          <Dialog.DialogClose className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-red-400 outline-none">
            <X className="w-5 h-5" />
          </Dialog.DialogClose>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-slate-300">
              {formatDistanceToNow(note.creationDate, { addSuffix: true })}
            </span>
            <p className="text-sm leading-6 text-slate-400">{note.content}</p>
          </div>
          <button
            type="button"
            className=" bg-red-400 outline-none py-4 w-full text-sm font-medium"
          >
            Delete note
          </button>
        </Dialog.DialogContent>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
}
