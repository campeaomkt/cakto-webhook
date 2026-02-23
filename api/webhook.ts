import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(200).json({ status: 'online' });
  }

  console.log('Body:', req.body);

  return res.status(200).json({
    status: 'ok',
    received: req.body,
  });
}
