import MusicDetail from "@/components/music-detail";
import { fetchMusicByID } from "@/lib/api";
import axios from "axios";

export default async function Page({ params }: { params: any }) {
  const id = params.id;

  const music = await fetchMusicByID(id);

  if (music == 404) return <>Music not found</>;

  return <MusicDetail music={music} />;
}
