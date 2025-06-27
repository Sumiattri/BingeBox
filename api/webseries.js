export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/tv?with_original_language=hi&sort_by=popularity.desc&vote_count.gte=50",
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
    console.error("Fetch error in /api/popular:", err);
    res.status(500).json({ error: "Popular fetch failed" });
  }
}
