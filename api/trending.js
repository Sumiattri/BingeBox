export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week",
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("TMDB ERROR:", error);
      return res.status(response.status).json({ error: "TMDB API failed" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Serverless function error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}


export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.themoviedb.org/3/discover/movie?with_original_language=hi&sort_by=popularity.deschttps://api.themoviedb.org/3/discover/movie?with_original_language=hi&sort_by=popularity.desc&primary_release_date.gte=2024-04-18",
 {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Popular fetch failed" });
  }
}
export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Discover fetch failed" });
  }
}