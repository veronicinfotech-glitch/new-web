const https = require('https');

module.exports = function(app) {
  app.get('/api/instagram/live', (req, res) => {
    const options = {
      hostname: 'www.instagram.com',
      path: '/api/v1/users/web_profile_info/?username=veronic_infotech',
      headers: {
        'x-ig-app-id': '936619743392459',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'Accept': '*/*'
      }
    };

    https.get(options, (igRes) => {
      let data = '';
      igRes.on('data', chunk => {
        data += chunk;
      });
      igRes.on('end', () => {
        try {
          // Parse and forward the JSON data directly to the frontend
          res.status(igRes.statusCode).json(JSON.parse(data));
        } catch(e) {
          res.status(500).json({ error: "Failed to parse Instagram data" });
        }
      });
    }).on('error', (e) => {
      res.status(500).json({ error: e.message });
    });
  });
};
