import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

export function NewNote() {
  const [ShouldShowText, setShouldShowText] = useState(true);
  const [content, setContent] = useState("");
  function HandleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
    if (event.target.value === "") {
      setShouldShowText(true);
    }
  }
  function HandleStartText() {
    setShouldShowText(false);
  }

  function HandleSaveNote(event: FormEvent) {
    event.preventDefault();
    console.log(content);
    toast.success("Note created sucessfully!");
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md text-left flex flex-col gap-3 bg-slate-700 p-5 hover:ring-2 hover:ring-slate-500 outline-none focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-200">Add note</span>
        <p className="text-sm leading-6 text-slate-400">
          Record a audio note that will be converted into text
        </p>
      </Dialog.Trigger>
      <Dialog.DialogPortal>
        <Dialog.DialogOverlay className="inset-0 fixed bg-black/50" />
        <Dialog.DialogContent className="overflow-hidden fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] h-[60vh] w-full bg-slate-700 rounded-md flex flex-col outline-none">
          <Dialog.DialogClose className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-red-400 outline-none">
            <X className="w-5 h-5" />
          </Dialog.DialogClose>
          <form onSubmit={HandleSaveNote} className="flex-1 flex flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-slate-300">
                Add note
              </span>

              {ShouldShowText ? (
                <p className="text-sm leading-6 text-slate-400">
                  Start{" "}
                  <button className="font-medium text-lime-400 hover:underline">
                    recording a note
                  </button>{" "}
                  in audio or if you rather{" "}
                  <button
                    onClick={HandleStartText}
                    className="font-medium text-lime-400 hover:underline"
                  >
                    use just text
                  </button>
                  .
                </p>
              ) : (
                <textarea
                  autoFocus
                  className="text-sm leading-6 bg-transparent resize-none flex-1 text-slate-400 outline-none"
                  onChange={HandleContentChange}
                ></textarea>
              )}
            </div>
            <button
              type="submit"
              className=" bg-lime-400 outline-none py-4 w-full text-sm font-medium text-lime-950 hover:bg-lime-500"
            >
              Add note
            </button>
          </form>
        </Dialog.DialogContent>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
}
