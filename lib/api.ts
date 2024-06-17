import { useAuth } from "@/context/AuthContext";
import axiosInstance from "./axiosInstance";

export const fetchMusics = async () => {
  try {
    const response = await axiosInstance.get("/musics");

    return { data: response.data, status: 200 };
  } catch (error) {
    console.error("Error fetching musics:", error);
    return { data: null, status: 400 };
  }
};
export const fetchMusicByID = async (id: string, options = {}) => {
  try {
    const response = await axiosInstance(`/musics/${id}`, options);
    return response.data;
  } catch (error) {
    return 404;
  }
};
