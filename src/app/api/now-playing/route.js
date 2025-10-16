// src/app/api/now-playing/route.ts
export const revalidate = 0; // Disable caching
export const dynamic = "force-dynamic"; // Always fresh data

export async function GET() {
  const username = process.env.LASTFM_USERNAME;
  const apiKey = process.env.LASTFM_API_KEY;

  if (!username || !apiKey) {
    return Response.json({ error: "Missing credentials" }, { status: 500 });
  }

  try {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`,
      {
        next: { revalidate: 0 },
      }
    );

    const data = await res.json();

    const track = data.recenttracks?.track?.[0];

    if (track?.["@attr"]?.nowplaying) {
      return Response.json(
        {
          isPlaying: true,
          name: track.name,
          artist: track.artist["#text"],
          album: track.album["#text"],
          image: track.image[3]["#text"],
          url: track.url,
        },
        {
          headers: {
            "Cache-Control": "no-store, max-age=0",
          },
        }
      );
    }

    return Response.json(
      { isPlaying: false },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (error) {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
