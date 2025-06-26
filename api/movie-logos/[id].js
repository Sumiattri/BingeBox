export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    console.log(data);

    const logos = data.logos;
    const enLogo =
      logos.find((logo) => logo.iso_639_1 === "en") || logos[0] || null;

    res.status(200).json({ logo: enLogo?.file_path || null });
  } catch (err) {
    console.error("Logo fetch error:", err);
    res.status(500).json({ error: "Failed to fetch logo" });
  }
}
