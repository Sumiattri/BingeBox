export default async function handler(req, res) {
  const { category } = req.query;

  let url = "";

  if (category === "trending") {
    url = `https://api.themoviedb.org/3/trending/movie/week`;
  } else if (category === "discover") {
    url = `https://api.themoviedb.org/3/discover/movie`;
  } else {
    return res.status(400).json({ error: "Invalid category" });
  }

  try {
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
    });

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
