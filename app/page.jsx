export default function Home() {
  return (
    <>
      <div className="flex w-60 flex-col bg-gray-800">
        <div className="font-ginto flex h-12 items-center px-3 font-[600] text-white shadow-md">
          Tailwind CSS
        </div>
        <div className="flex-1 space-y-4 overflow-y-scroll p-3">
          <p className="text-white">General</p>
          {[...Array(40)].map((_, i) => (
            <p key={i} className="text-gray-300">
              Channel {i + 1}
            </p>
          ))}
        </div>
      </div>

      <main className="flex flex-1 flex-col items-center justify-center bg-gray-700">
        {/* <div className="flex items-center h-12 px-3 font-ginto font-[500] text-white shadow-md">
          Main
        </div>
        <div className="flex-1 p-3 overflow-y-scroll space-y-4">
          {[...Array(40)].map((_, i) => (
            <p key={i}>
              Message {i + 1}. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Impedit vitae quis quas minima consequatur illo
              commodi quisquam hic.
            </p>
          ))}
        </div> */}
      </main>
    </>
  );
}
