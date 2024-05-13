'use client';
import * as RadixToast from '@radix-ui/react-toast';
import Button from './Button';
import { XMarkIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = () => {
  const [open, setOpen] = React.useState(false);
  let [toasts, setToasts] = React.useState([]);

  return (
    <>
      <Button
        onClick={() => {
          setToasts([
            ...toasts,
            {
              id: window.crypto.randomUUID(),
              message: getRandomMessage(),
            },
          ]);
        }}
      >
        Toast please!
      </Button>
      <RadixToast.Provider>
        <AnimatePresence>
          {toasts.map((toast) => (
            <RadixToast.Root
              key={toast.id}
              className="flex items-center justify-between gap-4 rounded-xl bg-gray-400/20 py-2 pe-3 ps-4 backdrop-blur-lg"
              onOpenChange={() => {
                setToasts(toasts.filter((t) => t.id !== toast.id));
              }}
              asChild
              forceMount
            >
              <motion.li
                initial={{ y: 64, filter: 'blur(8px)' }}
                animate={{ y: 0, filter: 'blur(0px)' }}
                exit={{
                  opacity: 0,
                  zIndex: -1,
                  filter: 'blur(24px)',
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 0.996 }}
                whileHover={{ scale: 1.016 }}
                transition={{ type: 'spring', bounce: 0, duration: 0.64 }}
                layout
              >
                <RadixToast.Description className="text-wrap">
                  {toast.message}
                </RadixToast.Description>
                <RadixToast.Close className="grid size-12 transform place-items-center rounded-md hover:scale-[1.04] hover:bg-gray-600/20 hover:text-gray-200 md:size-8">
                  <XMarkIcon className="size-6 " />
                </RadixToast.Close>
              </motion.li>
            </RadixToast.Root>
          ))}
        </AnimatePresence>

        <RadixToast.Viewport className="fixed bottom-4 left-0 right-0 z-10 flex w-screen flex-col items-center gap-2" />
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
