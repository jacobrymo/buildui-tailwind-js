'use client';

import { useState } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

let options = [
  { value: '1tb', label: '1TB SSD Storage', price: 0 },
  { value: '2tb', label: '2TB SSD Storage', price: 400 },
  { value: '4tb', label: '4TB SSD Storage', price: 1000 },
  { value: '8tb', label: '8TB SSD Storage', price: 2200 },
];

export default function RadioCards() {
  let [selectedValue, setSelectedValue] = useState(options[0].value);
  let selectedOption = options.find((option) => option.value === selectedValue);

  return (
    <form
      className="flex flex-col justify-center max-w-xl w-full gap-4"
      action={(formData) => {
        let data = Object.fromEntries(formData);
        alert(JSON.stringify(data));
      }}
    >
      <label>Storage</label>
      <RadioGroup.Root
        name="storage"
        value={selectedValue}
        className="space-y-2"
        onValueChange={(v) => setSelectedValue(v)}
      >
        {options.map((option) => (
          <RadioGroup.Item
            // onClick={() => setSelectedValue(option.value)} // Uses state to apply active treatment to the last selected object
            key={option.value}
            value={option.value} // Inspired by html input =radio
            className={`flex items-center justify-between w-full gap-2 p-4 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-white min-h-12 focus-visible:scale-[1.002] focus-visible:bg-gray-800/85 rounded-xl bg-gray-900 hover:bg-gray-800/65 hover:scale-[1.002] active:scale-[0.998] active:bg-gray-800/50 transition-all duration-75 ${
              option.value === selectedValue
                ? 'border-sky-500 ring-1 ring-inset ring-sky-500'
                : 'border-gray-800'
            }`}
          >
            <span className="text-start text-sm font-medium">
              {option.label}
            </span>
            {selectedValue !== option.value && (
              <span className="text-end text-sm text-white/40">
                {option.price > selectedOption.price ? '+ ' : '- '}
                {numberFormat.format(option.price - selectedOption.price)}
              </span>
            )}
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
      <button className="self-end w-fit h-10 px-3 text-sm font-bold bg-sky-600 rounded-xl hover:bg-sky-500">
        <span className="px-1">Buy</span>
      </button>
    </form>
  );
}

const numberFormat = new Intl.NumberFormat('en-us', {
  style: 'currency',
  currency: 'USD',
  signDisplay: 'never',
});
