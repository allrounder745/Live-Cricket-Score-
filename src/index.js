export default {
  async fetch(request, env, ctx) {
    const { searchParams } = new URL(request.url);
    const matchId = searchParams.get('score');

    if (!matchId) {
      return new Response(JSON.stringify({ error: 'Missing ?score=matchid' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const url = `https://ts-cricket-score-34us.onrender.com/score?id=${matchId}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch score");

      const data = await res.json();

      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-store'
        }
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 500
      });
    }
  }
};
