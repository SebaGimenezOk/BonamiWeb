export default async function handler(req, res) {
  try {
    // URL de demo Shoutcast
    const response = await fetch("http://castdemo.centova.com:25000/stats?sid=1&json=1");
    const data = await response.json();

    // Extraemos artista y título
    const rawTitle = data.songtitle || "";
    const [artist, title] = rawTitle.split(" - ");

    res.status(200).json({
      artist: artist?.trim() || "Desconocido",
      title: title?.trim() || "Desconocida",
    });
  } catch (error) {
    console.error("Error fetching current song:", error);
    res.status(500).json({ artist: "", title: "" });
  }
}
