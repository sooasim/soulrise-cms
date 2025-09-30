const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.env.PORT, 10) || 3000;

// MIME 타입 정의
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain'
};

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return mimeTypes[ext] || 'application/octet-stream';
}

const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  let filePath = path.join(__dirname, 'out', req.url === '/' ? 'index.html' : req.url);
  
  // /admin 경로를 /health.html로 리다이렉트
  if (req.url === '/admin') {
    filePath = path.join(__dirname, 'out', 'health.html');
  }
  
  // .html 확장자 추가 (디렉토리인 경우)
  if (req.url.endsWith('/')) {
    filePath = path.join(filePath, 'index.html');
  } else if (!path.extname(filePath) && !fs.existsSync(filePath)) {
    filePath += '.html';
  }
  
  // 보안 검사
  if (!filePath.startsWith(path.join(__dirname, 'out'))) {
    res.writeHead(403);
    res.end('403 Forbidden');
    return;
  }
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // 404 처리
        const notFoundPath = path.join(__dirname, 'out', '404.html');
        fs.readFile(notFoundPath, (err, content) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
          } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content);
          }
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': getContentType(filePath) });
      res.end(content);
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 SoulRise server is running on port ${PORT}`);
  console.log(`📁 Serving files from: ${path.join(__dirname, 'out')}`);
  console.log(`🌐 Health check available at: http://localhost:${PORT}/admin`);
  console.log(`🔧 Environment: PORT=${process.env.PORT}, NODE_ENV=${process.env.NODE_ENV}`);
  console.log(`📊 Parsed PORT: ${PORT} (type: ${typeof PORT})`);
});

server.on('error', (err) => {
  console.error('❌ Server error:', err);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
});
