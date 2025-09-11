// Script to download album cover images locally
// Run this once to download all images to public/albums/

const fs = require('fs');
const https = require('https');
const path = require('path');

// Create albums directory if it doesn't exist
const albumsDir = path.join(__dirname, 'public', 'albums');
if (!fs.existsSync(albumsDir)) {
  fs.mkdirSync(albumsDir, { recursive: true });
}

// Album data with current external URLs
const albums = [
  {
    name: "honestly-nevermind.jpg",
    url: "https://a1.mzstatic.com/r40/Music122/v4/84/2c/b4/842cb419-243c-b3f4-4da9-b6b980996062/22UMGIM67371.rgb.jpg"
  },
  {
    name: "certified-lover-boy.jpg", 
    url: "https://a1.mzstatic.com/r40/Music115/v4/11/36/38/1136384a-eebc-697a-c005-d890e41c0854/21UM1IM07518.rgb.jpg"
  },
  {
    name: "views.jpg",
    url: "https://a1.mzstatic.com/r40/Music115/v4/95/f5/87/95f587f7-21c3-d5f9-d81a-4350f9caa020/16UMGIM27643.rgb.jpg"
  },
  {
    name: "if-youre-reading-this.jpg",
    url: "https://a1.mzstatic.com/r40/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg"
  },
  {
    name: "blonde.jpg",
    url: "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526"
  },
  {
    name: "channel-orange.jpg", 
    url: "https://a1.mzstatic.com/r40/Music115/v4/ae/0b/3d/ae0b3d3a-d9b5-3d7f-6c6b-6d4f4f4b2b2b/12UMGIM53789.rgb.jpg"
  },
  // Add more albums as needed...
];

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(albumsDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${filename}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function downloadAllImages() {
  console.log('🚀 Starting album cover downloads...');
  
  try {
    for (const album of albums) {
      await downloadImage(album.url, album.name);
    }
    console.log('✨ All images downloaded successfully!');
    console.log('📁 Images saved to: public/albums/');
    console.log('🔄 Now update your album data to use local paths like: "/albums/blonde.jpg"');
  } catch (error) {
    console.error('❌ Error downloading images:', error);
  }
}

downloadAllImages();
