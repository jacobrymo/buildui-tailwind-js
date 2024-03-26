export default function Home() {
  return (
    <div className="flex text-gray-100 h-screen">
      <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
        <div className="bg-gray-700 text-gray-100 w-12 h-12 flex items-center justify-center rounded-3xl hover:bg-brand hover:text-white hover:rounded-2xl transition-all ease-out">
          <DiscordLogo className="w-7" />
        </div>

        <div className="bg-gray-700 text-gray-100 w-12 h-12 flex items-center justify-center rounded-3xl hover:bg-brand hover:text-white hover:rounded-2xl transition-all ease-out">
          S1
        </div>
      </div>

      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="flex items-center h-12 px-3 font-ginto font-[600] text-white shadow-md">
          Tailwind CSS
        </div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-4">
          <p className="text-white">General</p>
          {[...Array(40)].map((_, i) => (
            <p key={i} className="text-gray-300">
              Channel {i + 1}
            </p>
          ))}
        </div>
      </div>

      <main className="flex flex-col bg-gray-700 flex-1">
        <div className="flex items-center h-12 px-3 font-ginto font-[500] text-white shadow-md">
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
        </div>
      </main>
    </div>
  );
}

function DiscordLogo(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19.73 4.87a18.2 18.2 0 00-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 00.96 17.7a18.43 18.43 0 005.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83zM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27z"
      />
    </svg>
  );
}
