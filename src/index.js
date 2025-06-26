export default {
  async fetch(request, env, ctx) {
    const url = 'https://allrounderscoreboard.onrender.com/score?id=113496';

    try {
      const res = await fetch(url);
      const data = await res.json();

      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
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
