import { API_URL } from "../constants";

export async function fetchGallery() {
  const response = await fetch(`${API_URL}/api/upload/files`);
  if (!response.ok) {
    throw new Error("Failed to fetch gallery data");
  }
  const data = await response.json();
  console.log(data);
  return data;
}
