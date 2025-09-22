export async function GET(req) {
  try {
    const response = await fetch("http://69.64.46.123:8151/status-json.xsl");
    const data = await response.json();

    const rawTitle = data.icestats.source[0].title || "";
    // Separamos en artista y tema, manejando posibles guiones extra
    const parts = rawTitle.split(" - ");
    const artist = parts.slice(0, -1).join(" - ").trim() || "Desconocido";
    const title = parts.slice(-1)[0].trim() || "Desconocida";

    return new Response(JSON.stringify({ artist, title }), { status: 200 });
  } catch (error) {
    console.error("Error fetching current song:", error);
    return new Response(JSON.stringify({ artist: "", title: "" }), { status: 500 });
  }
}
