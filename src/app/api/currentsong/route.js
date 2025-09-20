export async function GET(req) {
    try {
      // URL real del streaming de Bonami
      const response = await fetch("https://radiostreamingserver.com.ar/proxy/bonami/stream?type=.mp3");
      
      // Dependiendo del servidor, si devuelve JSON con songtitle
      const data = await response.json();
  
      const rawTitle = data.songtitle || "";
      const [artist, title] = rawTitle.split(" - ");
  
      return new Response(JSON.stringify({
        artist: artist?.trim() || "Desconocido",
        title: title?.trim() || "Desconocida",
      }), { status: 200 });
    } catch (error) {
      console.error("Error fetching current song:", error);
      return new Response(JSON.stringify({ artist: "", title: "" }), { status: 500 });
    }
  }
  