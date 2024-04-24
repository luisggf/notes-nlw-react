import logo from "./assets/logo-nlw-expert.svg";
import { NoteCard } from "./components/note-card";
import { NewNote } from "./components/new-note-card";

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

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Search through your notes..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder: text-slate-500 outline-none "
        />
      </form>
      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNote />
        <NoteCard
          note={{
            creationDate: new Date(),
            content: "Hello World!",
          }}
        />
      </div>
    </div>
  );
}

export default App;
