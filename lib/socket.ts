import { io } from "socket.io-client";

const URL = "http://localhost:5000/api/v5";

export const socket = io(URL);
