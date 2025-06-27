export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=10749&with_original_language=hi&sort_by=popularity.desc&vote_average.gte=6&vote_count.gte=50&include_adult=false",
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
