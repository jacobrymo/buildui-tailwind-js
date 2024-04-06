export default function layout({ children }) {
  return (
    <main className="flex flex-col w-screen min-h-screen bg-black items-center px-4 py-10">
      <section className="flex flex-col gap-8 w-full mt-10 max-w-[1024px]">
        {children}
      </section>
    </main>
  );
}
