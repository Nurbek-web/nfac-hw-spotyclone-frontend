"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import MusicList from "../../../components/music-list";

interface Music {
  _id: string;
  name: string;
  artist: string;
  duration: string;
  src: string;
  date: string;
}

const Musics: React.FC = () => {
  const [musics, setMusics] = useState<Music[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMusics = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v5/musics");
        console.log(response.data);
        setMusics(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching musics:", error);
        setError("Error fetching musics");
        setLoading(false);
      }
    };

    fetchMusics();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <div>{musics ? <MusicList musics={musics} /> : <></>}</div>;
};

export default Musics;
