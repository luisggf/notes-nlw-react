import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

interface NewNoteCard {
  onNoteCreated: (content: string) => void;
}

export function NewNote({ onNoteCreated }: NewNoteCard) {
  let SpeechRecognition: SpeechRecognition | null = null;
  const [ShouldShowText, setShouldShowText] = useState(true);
  const [content, setContent] = useState("");
  const [isRecording, setIsRecording] = useState(false);
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
    if (!content) {
      toast.error("Note cannot be empty!");
      return;
    }
    event.preventDefault();
    onNoteCreated(content);
    setContent("");
    setShouldShowText(true);
    toast.success("Note created sucessfully!");
  }

  function HandleAudio() {
    const isRecognitionAPIAvaliable =
      "SpeechRecognition" in window || "webkitSpeechRecognition" in window;
    if (!isRecognitionAPIAvaliable) {
      toast.error(
        "Unfortunately your browser does not support Audio Recognition"
      );
      return;
    }
    setIsRecording(true);
    setShouldShowText(false);
    const SpeechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    SpeechRecognition = new SpeechRecognitionAPI();

    // SpeechRecognition.lang = "pt-BR";

    SpeechRecognition.continuous = true;

    SpeechRecognition.maxAlternatives = 1;

    SpeechRecognition.interimResults = true;

    SpeechRecognition.onresult = (form_event) => {
      const transcription = Array.from(form_event.results).reduce(
        (text, result) => {
          return text.concat(result[0].transcript);
        },
        ""
      );
      setContent(transcription);
    };

    SpeechRecognition.onerror = (form_event) => {
      console.error(form_event);
    };

    SpeechRecognition.start();
  }

  function HandleStopRecording() {
    setIsRecording(false);

    if (SpeechRecognition != null) {
      SpeechRecognition.stop();
    }
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
        <Dialog.DialogContent className="overflow-hidden fixed inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] md:h-[60vh] w-full bg-slate-700 md:rounded-md flex flex-col outline-none">
          <Dialog.DialogClose className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-red-400 outline-none">
            <X className="w-5 h-5" />
          </Dialog.DialogClose>
          <form className="flex-1 flex flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-slate-300">
                Add note
              </span>

              {ShouldShowText ? (
                <p className="text-sm leading-6 text-slate-400">
                  Start{" "}
                  <button
                    type="button"
                    onClick={HandleAudio}
                    className="font-medium text-lime-400 hover:underline"
                  >
                    recording a note
                  </button>{" "}
                  in audio or if you rather{" "}
                  <button
                    type="button"
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
                  value={content}
                ></textarea>
              )}
            </div>
            {isRecording ? (
              <button
                onClick={HandleStopRecording}
                type="button"
                className=" bg-slate-900 outline-none py-4 w-full text-sm font-medium text-slate-300 hover:text-slate-100 flex items-center justify-center gap-2"
              >
                <div className="bg-red-500 size-2.5 rounded-full animate-pulse"></div>
                Recording! Click to stop.
              </button>
            ) : (
              <button
                onClick={HandleSaveNote}
                type="button"
                className=" bg-lime-400 outline-none py-4 w-full text-sm font-medium text-lime-950 hover:bg-lime-500"
              >
                Add note
              </button>
            )}
          </form>
        </Dialog.DialogContent>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
}
