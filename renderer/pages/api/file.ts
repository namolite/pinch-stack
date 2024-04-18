import fs from 'fs';
import path from 'path';
import http from 'http';

export default function handler(req, res) {
  const { url: fileUrl } = req.query;

  if (!fileUrl) {
    return res.status(400).json({ error: 'Missing fileUrl parameter' });
  }

  const fileName = path.basename(fileUrl);
  const filePath = path.join(process.cwd(), 'downloads', fileName);

  const file = fs.createWriteStream(filePath);

  http.get(fileUrl, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close(() => {
        console.log('File downloaded successfully:', fileName);
        res.status(200).json({ message: 'File downloaded successfully' });
      });
    });
  }).on('error', (error) => {
    console.error('Error downloading file:', error);
    res.status(500).json({ error: 'Error downloading file' });
  });
}