'use client';
import * as RadixToast from '@radix-ui/react-toast';
import Button from './Button';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

const Toast = () => {
  let [toasts, setToasts] = useState([{ id: '', message: '' }]);
  return (
    <>
      <Button
        onClick={() => {
          setToasts([
            ...toasts,
            { id: window.crypto.randomUUID(), message: getRandomMessage() },
          ]);
        }}
      >
        This doesn&apos;t work yet
      </Button>

      <RadixToast.Provider>
        {toasts.map((toast) => {
          {
            console.log(toast);
          }
          <RadixToast.Root
            key={toast.id}
            className="flex w-screen items-center gap-4 rounded-xl bg-gray-400/20 py-2 pe-3 ps-4 backdrop-blur-lg md:w-fit"
          >
            {
              <RadixToast.Description className="text-wrap">
                {toast.message}
              </RadixToast.Description>
            }
            <RadixToast.Close className="grid size-12 transform place-items-center rounded-md hover:scale-[1.04] hover:bg-gray-600/20 hover:text-gray-200 md:size-8">
              <XMarkIcon className="size-6 " />
            </RadixToast.Close>
          </RadixToast.Root>;
        })}

        <RadixToast.Viewport className="fixed right-0 top-0 m-4 flex w-40 flex-col gap-1 md:max-w-md" />
      </RadixToast.Provider>
    </>
  );
};

function getRandomMessage() {
  const notifications = [
    'New message received!',
    'Update successful!',
    'Download complete.',
    'Profile updated.',
    'Payment processed.',
    'New friend request.',
    'Meeting rescheduled.',
    'Password changed.',
    'Item added to cart.',
    'Subscription expired.',
    'File uploaded successfully.',
    'Error processing request.',
    'Reminder: Appointment today.',
    'System maintenance soon.',
    'New comment on post.',
    'Weather alert: Heavy rain.',
    'Task deadline approaching.',
    'Discount code applied!',
    'Travel itinerary confirmed.',
    'Battery low: 10% remaining.',
  ];

  const randomIndex = Math.floor(Math.random() * notifications.length);

  return notifications[randomIndex];
}

export default Toast;
