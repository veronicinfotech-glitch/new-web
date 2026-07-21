const fs = require('fs');
const https = require('https');
const path = require('path');

const shortcodes = [
  'DacfAbPSpn7',
  'Dace4gPysXR',
  'Dacew9tya6n',
  'DaXxPzqys4D',
  'DaXxJZayN2x',
  'DaXxCQzy338'
];

const dir = path.join(__dirname, 'public', 'instagram');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

async function fetchImage(shortcode) {
  return new Promise((resolve, reject) => {
    https.get(`https://api.microlink.io/?url=https://www.instagram.com/p/${shortcode}/`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.data && json.data.image && json.data.image.url) {
            resolve(json.data.image.url);
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', reject);
  });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const file = fs.createWriteStream(filename);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  const posts = [];
  for (let code of shortcodes) {
    console.log(`Fetching ${code}...`);
    const imgUrl = await fetchImage(code);
    if (imgUrl) {
      console.log(`Downloading ${imgUrl} to ${code}.jpg...`);
      await downloadImage(imgUrl, path.join(dir, `${code}.jpg`));
      posts.push({ id: code, image: `/instagram/${code}.jpg`, url: `https://www.instagram.com/p/${code}/` });
    }
    await new Promise(r => setTimeout(r, 1000));
  }
  console.log(JSON.stringify(posts, null, 2));
}

run();
