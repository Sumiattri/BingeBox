export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=99&with_watch_providers=8&watch_region=IN&sort_by=popularity.desc&vote_average.gte=6&vote_count.gte=100&include_adult=false",
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
    res.status(500).json({ error: "Discover fetch failed" });
  }
}
