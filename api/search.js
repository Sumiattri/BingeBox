export default async function handler(req, res) {
  const { query } = req.query; // ✅ destructure `query` string

  if (!query) {
    return res.status(400).json({ error: "Missing query parameter" });
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    res.status(200).json(data.results); // send back only results array
  } catch (err) {
    console.error("TMDB fetch error:", err); // helpful for debugging
    res.status(500).json({ error: "TMDB fetch failed" });
  }
}
