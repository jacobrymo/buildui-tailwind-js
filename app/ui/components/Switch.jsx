'use client';

import * as Switch from '@radix-ui/react-switch';
import { useState } from 'react';

export default function SwitchDemo() {
  let [switchStatus, setSwitchStatus] = useState(false);
  return (
    <label className="relative grid place-items-center">
      {/* <span className="absolute z-0 scale-[200%] text-9xl font-black tracking-[-.08em] opacity-[.02]">
        {switchStatus ? '1' : '0'}
      </span> */}
      <Switch.Root
        checked={switchStatus}
        onCheckedChange={setSwitchStatus}
        className="flex h-10 w-16 items-center rounded-lg bg-gray-800 px-1 shadow-inner shadow-black/20 backdrop-blur-md transition hover:bg-opacity-90 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-white data-[state=checked]:bg-sky-500 data-[state=checked]:hover:bg-opacity-95"
      >
        <Switch.Thumb className="h-8 w-3 rounded-md bg-gray-200 shadow-sm transition-all duration-150 hover:w-[14px]  hover:bg-white active:-translate-x-0.5 data-[state=checked]:w-8 data-[state=checked]:translate-x-6 data-[state=checked]:bg-white data-[state=checked]:hover:-ms-0.5 data-[state=checked]:hover:w-[34px] data-[state=checked]:active:translate-x-[26px]" />
      </Switch.Root>
    </label>
  );
}
