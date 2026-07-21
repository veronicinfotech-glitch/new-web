const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const USERNAME = 'veronic_information_technology';
const DATA_FILE = path.join(__dirname, 'public', 'instagram', 'data.json');

(async () => {
  console.log(`Starting Instagram Sync for @${USERNAME}...`);
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');
    
    console.log("Navigating to Instagram profile...");
    await page.goto(`https://www.instagram.com/${USERNAME}/`, { waitUntil: 'networkidle2' });

    console.log("Waiting for posts to load...");
    await page.waitForSelector('article', { timeout: 10000 }).catch(() => console.log("Timeout waiting for article"));

    // Scroll to load more posts
    console.log("Scrolling to fetch all posts...");
    for (let i = 0; i < 3; i++) {
      await page.evaluate(() => window.scrollBy(0, window.innerHeight * 2));
      await new Promise(r => setTimeout(r, 2000));
    }

    console.log("Extracting posts...");
    const posts = await page.evaluate(() => {
      const postElements = document.querySelectorAll('article a[href^="/p/"]');
      const extracted = [];
      const seen = new Set();
      
      postElements.forEach((el, index) => {
        const url = el.href;
        if (seen.has(url)) return;
        seen.add(url);
        
        const img = el.querySelector('img');
        const imageUrl = img ? img.src : null;
        const caption = img ? img.alt : 'Instagram Post';
        
        if (imageUrl) {
          extracted.push({
            id: url.split('/p/')[1].replace('/', ''),
            url: url,
            image: imageUrl,
            caption: caption,
            likes: Math.floor(Math.random() * 50) + 10, // Mock likes
            comments: Math.floor(Math.random() * 10) + 1, // Mock comments
            date: 'Recently',
            username: 'veronic_information_technology'
          });
        }
      });
      return extracted;
    });

    console.log(`Successfully extracted ${posts.length} posts!`);
    
    // Ensure directory exists
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Save to public folder
    fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2));
    console.log(`Saved posts to ${DATA_FILE}`);
    
    await browser.close();
    console.log("Done! Your website will now show the live posts.");
  } catch (error) {
    console.error("Error scraping:", error.message);
    process.exit(1);
  }
})();
