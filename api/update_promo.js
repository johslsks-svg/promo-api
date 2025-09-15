import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Simple authentication (change your password)
  const { password, promos } = req.body;
  if (password !== 'yourAdminPassword') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const filePath = path.join(process.cwd(), 'promos.json');
    fs.writeFileSync(filePath, JSON.stringify(promos, null, 2));
    return res.status(200).json({ message: '✅ Promos updated!' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
