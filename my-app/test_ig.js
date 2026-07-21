const https = require('https');

const options = {
  hostname: 'www.instagram.com',
  path: '/api/v1/users/web_profile_info/?username=veronic_infotech',
  headers: {
    'x-ig-app-id': '936619743392459',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log('Status:', res.statusCode, 'Body length:', data.length));
}).on('error', console.error);
