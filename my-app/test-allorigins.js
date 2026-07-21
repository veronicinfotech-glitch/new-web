const https = require('https');

const USERNAME = 'veronic_infotech';
const url = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://www.instagram.com/api/v1/users/web_profile_info/?username=${USERNAME}`)}`;

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      if (parsed.contents) {
        const igData = JSON.parse(parsed.contents);
        console.log("SUCCESS! Followers:", igData.data.user.edge_followed_by.count);
      } else {
        console.log("No contents");
      }
    } catch (e) {
      console.error("Error:", e.message);
      console.log(data.substring(0, 500));
    }
  });
});
