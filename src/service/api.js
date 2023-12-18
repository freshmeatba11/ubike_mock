import { create } from "apisauce";

export const Api = create({
  baseURL: "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2",
  headers: {
    "Content-Type": "application/json",
  },
});
