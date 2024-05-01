'use client';
import { VStack, HStack, Tile } from './primitives';
import Switch from './components/Switch';
import RadioCardGroup from './components/RadioCardGroup';
import Toast from './components/Toast';
import Slider from './components/Slider';
import { useState } from 'react';

export default function UiCollection() {
  let [volume, setVolume] = useState(25);

  return (
    <>
      <VStack>
        <span className="mx-4 text-sm font-bold text-gray-600">
          BuildUI & Radix{' '}
        </span>
        <h1 className="mx-4 text-3xl font-bold">Playground</h1>
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
