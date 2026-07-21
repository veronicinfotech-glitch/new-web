const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const USERNAME = 'veronic_infotech';
const DATA_FILE = path.join(__dirname, 'public', 'instagram', 'data.json');
const PROFILE_FILE = path.join(__dirname, 'public', 'instagram', 'profile.json');

try {
  console.log(`Fetching latest posts for @${USERNAME} using curl...`);
  
  // Use curl since it bypasses some basic Node.js blocks
  const cmd = `curl -s "https://www.instagram.com/api/v1/users/web_profile_info/?username=${USERNAME}" -H "x-ig-app-id: 936619743392459" -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"`;
  
  const stdout = execSync(cmd, { encoding: 'utf8', maxBuffer: 1024 * 1024 * 10 });
  const data = JSON.parse(stdout);
  
  const user = data.data.user;
  const edges = user.edge_owner_to_timeline_media.edges;
  
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Save profile stats
  const profileStats = {
    followers: user.edge_followed_by?.count || 0,
    following: user.edge_follow?.count || 0,
    posts: user.edge_owner_to_timeline_media?.count || 0,
    full_name: user.full_name || 'Veronic Infotech',
    profile_pic: user.profile_pic_url_hd || user.profile_pic_url
  };
  fs.writeFileSync(PROFILE_FILE, JSON.stringify(profileStats, null, 2));
  console.log(`Saved profile stats: ${profileStats.followers} followers, ${profileStats.posts} posts.`);

  const posts = edges
    .map(edge => {
      const node = edge.node;
      const shortcode = node.shortcode;
      const imgUrl = node.display_url;
      const localImgPath = path.join(dir, `${shortcode}.jpg`);
      
      // Download image
      try {
        console.log(`Downloading image for ${shortcode}...`);
        const imgCmd = `curl -s "${imgUrl}" -o "${localImgPath}" -H "User-Agent: Mozilla/5.0"`;
        execSync(imgCmd);
      } catch(e) {
        console.log(`Failed to download ${shortcode}: ${e.message}`);
      }

      return {
        id: shortcode,
        url: `https://www.instagram.com/p/${shortcode}/`,
        image: `/instagram/${shortcode}.jpg`,
        caption: node.edge_media_to_caption.edges[0]?.node?.text || 'Instagram Post',
        likes: node.edge_media_preview_like?.count || 0,
        comments: node.edge_media_to_comment?.count || 0,
        date: new Date(node.taken_at_timestamp * 1000).toISOString(),
        username: USERNAME,
        aspect: 'square',
        media_type: node.is_video ? 'VIDEO' : 'IMAGE'
      };
    })
    .filter((post, index, self) => self.findIndex(item => item.id === post.id) === index)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  
  fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2));
  console.log(`Successfully extracted ${posts.length} live posts!`);
  console.log(`Saved to ${DATA_FILE}`);
} catch (error) {
  console.error("Error scraping:", error.message);
  console.log("Please run this again or ensure curl is working.");
}
