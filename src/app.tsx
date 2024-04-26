import logo from "./assets/logo-nlw-expert.svg";
import { NoteCard } from "./components/note-card";
import { NewNote } from "./components/new-note-card";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import { LogIn } from "./components/signin";

// TAILWIND CLASSES ================
// p-x (padding-x)
// bg-slate-x (background color x)
// h-px (height of 1px)
// mx-auto (margin x axys set to auto)
// max-w-6xl (max width x)
// space-y-6 (gives space x to the first element)
// tracking-tight (makes the text letters from the font slightly closer)
// grid (set the display to grid)
// grid-cols-x (set the number of grids to x)
// gap-6 (sets a gap of 6 between the grids)

interface Note {
  id: string;
  creationDate: Date;
  content: string;
}

export function App() {
  const [SearchNote, SetSearchNote] = useState("");
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [notes, setNotes] = useState<Note[]>(() => {
    const NotesOnStorage = localStorage.getItem("notes");
    if (NotesOnStorage) {
      return JSON.parse(NotesOnStorage);
    }
    return [];
  });

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    SetSearchNote(query);
  }
  const filterNotes =
    SearchNote != ""
      ? notes.filter((note) =>
          note.content.toLowerCase().includes(SearchNote.toLowerCase())
        )
      : notes;

  function OnNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      creationDate: new Date(),
      content,
    };

    const notesArray = [newNote, ...notes];
    setNotes([newNote, ...notes]);
    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  function DeleteNote(id: string) {
    const newNoteArray = notes.map((note) => {
      return note;
    });
    const FilteredNotes = newNoteArray.filter((note) => note.id != id);
    setNotes(FilteredNotes);
    localStorage.setItem("notes", JSON.stringify(FilteredNotes));
    toast.success("Note has been sucessfully deleted!");
  }

  function HandleUserLogin() {
    setIsLoggedIn(true);
  }
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      {!IsLoggedIn ? (
        <LogIn OnUserLogin={HandleUserLogin} />
      ) : (
        <>
          <h1 className="text-slate-200 font-bold text-5xl">
            Welcome,{" "}
            <span className="text-5xl font-extrabold text-lime-300">
              User X
            </span>
          </h1>
          <img src={logo} alt="NLW Expert" />
          <form className="w-full">
            <input
              type="text"
              placeholder="Search through your notes..."
              className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder: text-slate-500 outline-none "
              onChange={handleSearch}
            />
          </form>
          <div className="h-px bg-slate-700" />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 auto-rows-[250px] gap-6">
            <NewNote onNoteCreated={OnNoteCreated} />

            {filterNotes.map((note) => {
              return (
                <NoteCard
                  key={note.id}
                  note={note}
                  onNoteDeleted={DeleteNote}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
