import SwitchDemo from './1-switch/page';

function Tile({ children }) {
  return (
    <div className="w-full flex items-center justify-center h-96 rounded-3xl bg-gray-950/80 border border-transparent hover:border-gray-500/10 hover:rounded-2xl hover:bg-gray-950/85 transition-all duration-200">
      {children}
    </div>
  );
}

function HStack({ children }) {
  return <div className="flex gap-2 w-full">{children}</div>;
}

function VStack({ children }) {
  return <div className="flex flex-col gap-2 w-full">{children}</div>;
}

export default function uiCollection() {
  return (
    <>
      <h1 className="text-3xl font-bold w-full">Radix playground</h1>
      <HStack>
        <Tile>
          <SwitchDemo />
        </Tile>
        <Tile>
          <SwitchDemo />
        </Tile>
      </HStack>
    </>
  );
}
