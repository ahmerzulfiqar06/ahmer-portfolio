const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/favicon.svg'));

  // Generate PNG favicons in different sizes
  const sizes = [16, 32, 48, 64, 128, 192, 512];

  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, `../public/favicon-${size}x${size}.png`));
  }

  // Generate apple-touch-icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));

  // Generate icon.png (192x192 for PWA)
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(__dirname, '../public/icon.png'));

  console.log('Favicons generated successfully!');
}

generateFavicons().catch(console.error);
