"use client";

import { Music } from "@/@types/music";
import axios from "axios";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface MusicDetailProps {
  music: Music;
  onDelete: () => void;
}

const MusicDetail: React.FC<MusicDetailProps> = ({ music, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/v5/musics/${music._id}`);
      onDelete();
      setIsOpen(false); // Close the confirmation dialog
    } catch (error) {
      console.error("Error deleting music:", error);
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-[auto_1fr] items-center gap-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">{music.name}</h1>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <span>{music.artist}</span>
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <span>{music.date}</span>
            <span className="h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <span>{music.duration}</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Delete
          </button>
        </div>
      </div>
      <div>
        <audio className="w-full" controls src={music.src}>
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Confirmation Dialog */}
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setIsOpen}
        >
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg p-8 mx-4 md:mx-auto max-w-md z-20">
                <Dialog.Title className="text-lg font-bold mb-4">
                  Confirm Deletion
                </Dialog.Title>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Are you sure you want to delete this music?
                </p>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mr-4"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default MusicDetail;
