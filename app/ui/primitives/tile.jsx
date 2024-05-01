export default function Tile({ children }, childMax) {
  return (
    <div className="flex min-h-96 w-full select-none items-center justify-center rounded-3xl border border-transparent bg-gray-950/80 px-4 py-10 transition-all duration-200 md:py-16 md:hover:rounded-2xl md:hover:border-gray-500/10 md:hover:bg-gray-950/85">
      {children}
    </div>
  );
}

export { Tile };
