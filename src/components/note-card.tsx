export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 relative overflow-hidden hover:ring-2 hover:ring-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">2 days ago</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, illo
        quas. Nihil enim architecto magnam facilis a laboriosam error vitae,
        libero consequatur optio laudantium, animi suscipit, voluptatibus cum
        sint beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Nobis cumque eius animi distinctio nisi cupiditate odit ad at molestias
        fugit expedita officiis repellat consequuntur adipisci, error aut
        laboriosam eaque quaerat.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-black/0"></div>
    </button>
  );
}
