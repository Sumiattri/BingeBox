export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=popularity.desc",
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("TMDB Error:", error);
      return res.status(500).json({ error: "TMDB API failed" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Serverless error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
