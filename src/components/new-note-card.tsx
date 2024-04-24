export function NewNote() {
  return (
    <button className="rounded-md text-left bg-slate-700 p-5 space-y-3 hover:ring-2 hover:ring-slate-500 outline-none focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-200">Add note</span>
      <p className="text-sm leading-6 text-slate-400">
        Record a audio note that will be converted into text
      </p>
    </button>
  );
}
