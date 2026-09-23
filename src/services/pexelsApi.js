const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

const PEXELS_API_URL = "https://api.pexels.com/v1";

export async function searchPhotos(
  query,
  { perPage = 6, orientation = "landscape" } = {},
) {
  const searchParams = new URLSearchParams({
    query,
    per_page: perPage,
    orientation,
  });

  const response = await fetch(`${PEXELS_API_URL}/search?${searchParams}`, {
    headers: {
      Authorization: PEXELS_API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`Pexels request failed: ${response.status}`);
  }

  const data = await response.json();

  return data.photos;
}
