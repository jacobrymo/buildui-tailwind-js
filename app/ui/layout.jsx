export default function layout({ children }) {
  return (
    <main className="flex h-dvh w-full flex-col items-center overflow-y-scroll bg-black px-2 py-16 text-base md:text-sm">
      <section className="flex w-full max-w-[1024px] flex-col gap-8">
        {children}
      </section>
    </main>
  );
}
