// api/category/[genre].js

const genreMap = {
  action: 28,
  horror: 27,
  comedy: 35,
  romance: 10749,
  thriller: 53,
  documentary: 99,
  animation: 16,
  family: 10751,
  scifi: 878,

  // add more if needed
};

export default async function handler(req, res) {
  const { genre } = req.query;
  const genreId = genreMap[genre.toLowerCase()];

  if (!genreId) {
    return res.status(400).json({ error: "Invalid genre" });
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&sort_by=popularity.desc`,
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
    console.error("TMDB Error:", err);
    res.status(500).json({ error: "Failed to fetch genre movies" });
  }
}
