import { Music } from "@/@types/music";
import MusicCard from "./music-card";
import Link from "next/link";

export default function MusicList({ musics }: { musics: Music[] }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Music Tracks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {musics.map((music: Music) => (
          <Link key={music._id} href={`/musics/${music._id}`}>
            <MusicCard music={music} />
          </Link>
        ))}
      </div>
    </div>
  );
}
