import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const logosDirectory = path.join(process.cwd(), 'public/images/logos_zusters');
  const filenames = fs.readdirSync(logosDirectory);

  const partsData = filenames.map(filename => {
    const name = filename.replace(/^logo-|\.(svg|webp)$/g, ''); // Extract name from filename
    const imageUrl = `/images/logos_zusters/${filename}`; // Construct image URL

    return {
      name: name,
      description: `Logo for ${name}`, // You can add a more detailed description here
      image: imageUrl,
      link: '#' // Replace with actual links if available
    };
  });

  res.status(200).json(partsData);
}