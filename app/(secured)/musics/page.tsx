import MusicList from "../../../components/music-list";
import { fetchMusics } from "@/lib/api";

export default async function MusicsPage() {
  const musics = await fetchMusics();

  if (musics.status == 400) {
    return <>Something went wrong ...</>;
  }

  return <div>{musics ? <MusicList musics={musics.data} /> : <></>}</div>;
}
