export default async function handler(req, res) {
  try {
    const response = await fetch(
      // "https://api.themoviedb.org/3/discover/tv?&with_original_language=en",
      "https://api.themoviedb.org/3/trending/tv/day",
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "TV fetch failed" });
  }
}
