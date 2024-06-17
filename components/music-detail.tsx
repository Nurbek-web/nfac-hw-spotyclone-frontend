"use client";

import { Music } from "@/@types/music";
import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useRouter } from "next/navigation";

interface MusicDetailProps {
  music: Music;
}

const MusicDetail: React.FC<MusicDetailProps> = ({ music }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/v5/musics/${music._id}`);
      setIsOpen(false);
      router.push("/");
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
          <Button variant="outline" onClick={() => setIsOpen(true)}>
            Delete
          </Button>
        </div>
      </div>
      <div>
        <audio className="w-full" controls src={music.src}>
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this music?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              onClick={handleDelete}
              className="bg-red-500 text-white hover:bg-red-600"
            >
              Delete
            </Button>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MusicDetail;
