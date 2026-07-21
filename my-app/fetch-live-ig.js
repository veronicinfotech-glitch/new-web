const Instagram = require('instagram-web-api');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const USERNAME = 'veronic_infotech';
const PASSWORD = 'Codehunters'; // User's provided password for perfect authenticated connection

const DATA_FILE = path.join(__dirname, 'public', 'instagram', 'data.json');
const PROFILE_FILE = path.join(__dirname, 'public', 'instagram', 'profile.json');
const IMG_DIR = path.join(__dirname, 'public', 'instagram');

const client = new Instagram({ username: USERNAME, password: PASSWORD });

(async () => {
  try {
    console.log(`🔒 Authenticating into Instagram as @${USERNAME}...`);
    
    // Login to get session cookies
    await client.login();
    console.log("✅ Authenticated successfully! Fetching live profile & posts...");
    
    // Fetch profile and timeline with authenticated session
    const profile = await client.getUserByUsername({ username: USERNAME });
    const user = profile.user;
    
    if (!fs.existsSync(IMG_DIR)) {
      fs.mkdirSync(IMG_DIR, { recursive: true });
    }

    // 1. Save accurate live profile stats
    const profileStats = {
      followers: user.edge_followed_by?.count || 0,
      following: user.edge_follow?.count || 0,
      posts: user.edge_owner_to_timeline_media?.count || 0,
      full_name: user.full_name || 'Veronic Infotech',
      profile_pic: user.profile_pic_url_hd || user.profile_pic_url
    };
    fs.writeFileSync(PROFILE_FILE, JSON.stringify(profileStats, null, 2));
    console.log(`✅ Saved live stats: ${profileStats.followers} followers, ${profileStats.posts} posts.`);

    // 2. Extract and format posts
    const edges = user.edge_owner_to_timeline_media.edges;
    const posts = edges.map(edge => {
      const node = edge.node;
      const shortcode = node.shortcode;
      const imgUrl = node.display_url;
      const localImgPath = path.join(IMG_DIR, `${shortcode}.jpg`);
      
      // Download image so it never expires (Instagram CDN URLs expire after 24h)
      try {
        const imgCmd = `curl -s "${imgUrl}" -o "${localImgPath}" -H "User-Agent: Mozilla/5.0"`;
        execSync(imgCmd);
      } catch(e) {
        console.log(`⚠️ Could not download image for ${shortcode}`);
      }

      return {
        id: shortcode,
        url: `https://www.instagram.com/p/${shortcode}/`,
        image: `/instagram/${shortcode}.jpg`,
        caption: node.edge_media_to_caption?.edges[0]?.node?.text || 'Instagram Post',
        likes: node.edge_media_preview_like?.count || 0,
        comments: node.edge_media_to_comment?.count || 0,
        date: new Date(node.taken_at_timestamp * 1000).toISOString(),
        username: USERNAME,
        aspect: 'square',
        media_type: node.is_video ? 'VIDEO' : 'IMAGE'
      };
    });
    
    // Remove duplicates and sort by newest
    const uniquePosts = posts
      .filter((post, index, self) => self.findIndex(item => item.id === post.id) === index)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
      
    fs.writeFileSync(DATA_FILE, JSON.stringify(uniquePosts, null, 2));
    console.log(`✅ Successfully extracted and saved ${uniquePosts.length} posts!`);
    
  } catch (error) {
    console.error("❌ Authentication or Scraping Error:", error.message);
    
    // Fallback to unauthenticated curl method if login fails
    console.log("⚠️ Attempting unauthenticated fallback...");
    try {
      execSync('node update-instagram.js', { stdio: 'inherit' });
    } catch (fallbackError) {
      console.log("❌ Fallback also failed.");
    }
  }
})();
