const http = require('http');
const https = require('https');
const server = http.createServer((req, res) => {
  const options = {
    hostname: 'www.instagram.com',
    port: 443,
    path: req.url,
    method: 'GET',
    headers: {
      'x-ig-app-id': '936619743392459',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
  };
  const proxyReq = https.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });
  proxyReq.end();
});
server.listen(3001, () => console.log('Proxy on 3001'));
