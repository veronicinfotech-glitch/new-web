const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Set a realistic user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    
    console.log("Navigating to Instagram...");
    await page.goto('https://www.instagram.com/veronic_information_technology/', { waitUntil: 'networkidle2' });
    
    // Scroll down a bit to load more posts
    console.log("Scrolling...");
    for (let i = 0; i < 5; i++) {
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await new Promise(r => setTimeout(r, 1000));
    }
    
    console.log("Extracting links...");
    const links = await page.evaluate(() => {
      const anchors = Array.from(document.querySelectorAll('a[href^="/p/"]'));
      return anchors.map(a => a.href);
    });
    
    // Deduplicate
    const uniqueLinks = [...new Set(links)];
    
    console.log(JSON.stringify(uniqueLinks, null, 2));
    
    await browser.close();
  } catch (error) {
    console.error("Error scraping:", error);
    process.exit(1);
  }
})();
