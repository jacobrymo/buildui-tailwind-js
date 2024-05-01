'use client';

import { useState } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import Button from './Button';

let options = [
  { value: '1tb', label: '1TB SSD Storage', price: 0 },
  { value: '2tb', label: '2TB SSD Storage', price: 400 },
  { value: '4tb', label: '4TB SSD Storage', price: 1000 },
  { value: '8tb', label: '8TB SSD Storage', price: 2200 },
];

export default function RadioCardGroup() {
  let [selectedValue, setSelectedValue] = useState(options[0].value);
  let selectedOption = options.find((option) => option.value === selectedValue);

  return (
    <form
      className="flex w-full max-w-xl flex-col justify-center gap-4"
      action={(formData) => {
        let data = Object.fromEntries(formData);
        alert(JSON.stringify(data));
      }}
    >
      <label className="text-lg font-bold">Storage</label>
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
            className={`flex min-h-12 w-full items-center justify-between gap-2 rounded-xl bg-gray-900 p-4 transition-all duration-75 hover:scale-[1.002] hover:bg-gray-800/65 focus-visible:scale-[1.002] focus-visible:bg-gray-800/85 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-[0.998] active:bg-gray-800/50 ${
              option.value === selectedValue
                ? 'border-sky-500 ring-1 ring-inset ring-sky-500'
                : 'border-gray-800'
            }`}
          >
            <span className="text-start font-medium">{option.label}</span>
            {selectedValue !== option.value && (
              <span className="text-end text-white/40">
                {option.price > selectedOption.price ? '+ ' : '- '}
                {numberFormat.format(option.price - selectedOption.price)}
              </span>
            )}
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
      <Button type="submit">Buy</Button>
    </form>
  );
}

const numberFormat = new Intl.NumberFormat('en-us', {
  style: 'currency',
  currency: 'USD',
  signDisplay: 'never',
});
