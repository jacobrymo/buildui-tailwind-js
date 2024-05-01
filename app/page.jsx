'use client';
import { VStack, HStack, Tile } from './ui/primitives';
import Switch from './ui/components/Switch';
import RadioCardGroup from './ui/components/RadioCardGroup';
import Toast from './ui/components/Toast';
import Slider from './ui/components/Slider';
import { useState } from 'react';

export default function Home() {
  let [volume, setVolume] = useState(25);

  return (
    <>
      <VStack>
        <subtitle className="mx-4 text-sm font-bold text-gray-600">
          BuildUI & Radix{' '}
        </subtitle>
        <h1 className="mx-4 mb-8 text-3xl font-bold">Playground</h1>
      </VStack>
      <VStack>
        <Tile>
          <Toast />
        </Tile>

        <HStack>
          <Tile>
            <Switch />
          </Tile>
          <Tile>
            <div className="relative grid place-items-center">
              <span className="absolute z-0 scale-[200%] text-9xl font-black tracking-[-.08em] opacity-[.02]">
                {volume}
              </span>
              <Slider
                className="relative z-10"
                value={volume}
                onValueChange={setVolume}
              />
            </div>
          </Tile>
        </HStack>
        <Tile>
          <RadioCardGroup />
        </Tile>
      </VStack>
    </>
  );
}

{
  /* <div className="flex w-60 flex-col bg-gray-800">
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
</main> */
}
