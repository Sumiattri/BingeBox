export default async function handler(req, res) {
  const { id } = req.query;

  console.log("🔍 Movie ID:", id);
  console.log("🔐 Token:", process.env.TMDB_TOKEN?.slice(0, 20)); // log part of token to check
  console.log("🔥 Vercel, pick me up! This is a live function.");
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: "Invalid or missing movie ID" });
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/images`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    console.log("🎬 TMDB response:", data);

    const logos = data.logos;
    const enLogo =
      logos.find((logo) => logo.iso_639_1 === "en") || logos[0] || null;

    res.status(200).json({ logo: enLogo?.file_path || null });
  } catch (err) {
    console.error("❌ Logo fetch error:", err);
    res.status(500).json({ error: "Failed to fetch logo" });
  }
}
