const http = require('http');
const target = { host: '127.0.0.1', port: 3001 };

const server = http.createServer((req, res) => {
  const opts = { hostname: target.host, port: target.port, path: req.url, method: req.method, headers: req.headers };
  const p = http.request(opts, r => { res.writeHead(r.statusCode, r.headers); r.pipe(res); });
  p.on('error', e => { res.statusCode = 502; res.end('Bad Gateway: ' + e.message); });
  req.pipe(p);
});

server.listen(3000, '127.0.0.1', () => console.log('Proxy listening on 3000 → 3001'));
