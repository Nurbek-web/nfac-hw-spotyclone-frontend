import { io } from "socket.io-client";

const URL =
  "https://nfac-hw-spotyclone-backend-production.up.railway.app/api/v5";

export const socket = io(URL);
