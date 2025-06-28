export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const [detailsRes, creditsRes] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
      }),
      fetch(`https://api.themoviedb.org/3/tv/${id}/credits`, {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
      }),
    ]);

    const details = await detailsRes.json();
    const credits = await creditsRes.json();

    res.status(200).json({
      release_date: details.release_date,
      genres: details.genres, // [{ id: 18, name: 'Drama' }, ...]
      cast: credits.cast.slice(0, 8), // First 8 actors
      runtime: details.runtime,
      overview: details.overview,
      vote_average: details.vote_average,
    });
  } catch (err) {
    console.error("❌ Fetch error:", err);
    res.status(500).json({ error: "Movie detail fetch failed" });
  }
}
