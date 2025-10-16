
export async function GET() {
    try {
      const username = process.env.LASTFM_USERNAME;
      const apiKey = process.env.LASTFM_API_KEY;
  
      console.log('Environment check:', {
        hasUsername: !!username,
        hasApiKey: !!apiKey
      });
  
      if (!username || !apiKey) {
        console.error('Missing credentials');
        return Response.json(
          { error: 'Missing credentials', isPlaying: false }, 
          { status: 500 }
        );
      }
  
      const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`;
      
      console.log('Fetching from Last.fm...');
      const res = await fetch(url);
      
      if (!res.ok) {
        console.error('Last.fm API error:', res.status, res.statusText);
        return Response.json(
          { error: 'Last.fm API failed', isPlaying: false }, 
          { status: res.status }
        );
      }
  
      const data = await res.json();
      console.log('Last.fm response:', data);
  
      const track = data.recenttracks?.track?.[0];
  
      if (track?.['@attr']?.nowplaying) {
        return Response.json({
          isPlaying: true,
          name: track.name,
          artist: track.artist['#text'],
          album: track.album['#text'],
          image: track.image[3]['#text'],
          url: track.url
        });
      }
  
      return Response.json({ isPlaying: false });
    } catch (error) {
      console.error('Unexpected error:', error);
      return Response.json(
        { error: 'Internal error', isPlaying: false }, 
        { status: 500 }
      );
    }
  }