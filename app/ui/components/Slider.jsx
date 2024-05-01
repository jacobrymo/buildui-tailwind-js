'use client';

import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/20/solid';
import * as RadixSlider from '@radix-ui/react-slider';
import { useState } from 'react';
import { VStack } from '../primitives';

export default function Slider({
  value,
  onValueChange = (value) => {},
  name,
  min = 0,
  max = 100,
  step = 1,
}) {
  let [isUsingPointer, setIsUsingPointer] = useState(false);
  let [internalValue, setInternalValue] = useState(value);
  let [stash, setStash] = useState({ clientY: 0, internalValue });

  function updateValue(v) {
    setInternalValue(v);
    onValueChange(v);
  }

  return (
    <VStack>
      <div className="group flex touch-none select-none flex-col items-center gap-3 transition-[margin] *:duration-300 hover:cursor-grab active:cursor-grabbing">
        {/* <SpeakerXMarkIcon className="size-5 text-gray-200 transition group-hover:scale-110 group-hover:text-white" /> */}

        <RadixSlider.Root
          value={[internalValue]}
          onValueCommit={([v]) => {
            updateValue(v);
          }}
          min={min}
          max={max}
          defaultValue={[50]}
          orientation="vertical"
          className="relative flex h-32 grow items-center hover:h-40"
          name={name}
          onPointerDown={(e) => {
            setStash({
              clientY: e.clientY,
              internalValue,
            });
            setIsUsingPointer(true);
          }}
          onPointerMove={(e) => {
            if (e.buttons > 0) {
              let diffInPixels = e.clientY - stash.clientY;
              let sliderHeight = e.currentTarget.clientHeight;
              let pixelsPerUnit = (max - min) / sliderHeight;
              let diffInUnits = diffInPixels * pixelsPerUnit;
              let newValue = stash.internalValue - diffInUnits;
              let clampedValue = clamp(newValue, min, max);
              let steppedValue = roundToStep(clampedValue, step);

              updateValue(steppedValue);
            }
          }}
          onBlur={() => setIsUsingPointer(false)}
        >
          <RadixSlider.Track
            className={`${isUsingPointer ? '' : 'group-has-[:focus-visible]:outline group-has-[:focus-visible]:outline-2 group-has-[:focus-visible]:outline-offset-2'} relative h-full w-2 overflow-hidden rounded-md bg-white/5 backdrop-blur-xl  duration-300 hover:w-12 hover:rounded-xl`}
          >
            <RadixSlider.Range className="absolute w-full bg-gray-200 group-hover:bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="relative z-10 -mt-3 h-5 w-full text-white opacity-0 transition-all group-hover:opacity-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>

              <div className="absolute inset-0 group-has-[:focus-visible]:bg-white"></div>
            </RadixSlider.Range>
          </RadixSlider.Track>

          <RadixSlider.Thumb />
          {/* className="block size-2.5 rounded-full bg-white shadow-sm transition-all focus-visible:outline-none group-hover:size-5" */}
        </RadixSlider.Root>

        {/* <SpeakerWaveIcon className="size-5 text-gray-200 transition group-hover:scale-110 group-hover:text-white" /> */}
      </div>
    </VStack>
  );
}

function clamp(number, min, max) {
  return Math.min(max, Math.max(number, min));
}

function roundToStep(number, step) {
  const inverseStep = 1 / step;
  return Math.round(number * inverseStep) / inverseStep;
}
