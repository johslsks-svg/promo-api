import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'promos.json');
  const data = fs.readFileSync(filePath, 'utf8');
  const promos = JSON.parse(data);
  res.status(200).json(promos);
}
