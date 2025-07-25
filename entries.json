// File: api/entries.js
export default async function handler(req, res) {
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxKH_dTwZBQgGk69YcziKyjeOaGUqEWfFLZcWnbKWqMdZDpiNAMixyADgQLPHlT3euBCQ/exec';
  
  // Weiterleiten von GET?action=get
  if (req.method === 'GET') {
    const url = SCRIPT_URL + '?action=get';
    const r = await fetch(url);
    const text = await r.text();
    res.setHeader('Content-Type', 'application/json');
    res.send(text);
    return;
  }

  // Weiterleiten von POST
  if (req.method === 'POST') {
    const r = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const text = await r.text();
    res.setHeader('Content-Type', 'application/json');
    res.send(text);
    return;
  }

  // Andere Methoden
  res.status(405).send({ error: 'Method Not Allowed' });
}
