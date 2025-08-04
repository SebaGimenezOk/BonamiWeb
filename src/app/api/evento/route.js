import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.EVENTBRITE_TOKEN;

  if (!token) {
    console.error("[API evento] No hay token configurado en .env.local");
    return NextResponse.json({ error: "No hay token configurado" }, { status: 500 });
  }

  try {
    const response = await fetch("https://www.eventbrite.com.ar/e/bonamiretro-tickets-1470993945489?aff=oddtdtcreator", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[API evento] Error Eventbrite API: ${response.status}`, errorText);
      return NextResponse.json(
        { error: `Error Eventbrite API: ${response.status}`, details: errorText },
        { status: 500 }
      );
    }

    const data = await response.json();

    if (!data.events || data.events.length === 0) {
      console.warn("[API evento] No se encontraron eventos");
      return NextResponse.json({ error: "No se encontraron eventos" }, { status: 404 });
    }

    console.log("[API evento] Evento obtenido correctamente:", data.events[0].name.text);
    return NextResponse.json(data.events[0]);
  } catch (error) {
    console.error("[API evento] Error interno:", error.message);
    return NextResponse.json({ error: "Error interno", details: error.message }, { status: 500 });
  }
}
