const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Railway 환경 변수 처리
const PORT = parseInt(process.env.PORT, 10) || 3000;
const PUBLIC_DIR = path.join(__dirname, 'out');

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

function serveFile(req, res, filePath) {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // 404 - File not found
                const notFoundPath = path.join(PUBLIC_DIR, '404.html');
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
}

const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;

    // Handle root path
    if (pathname === '/') {
        pathname = '/index.html';
    }

    // Handle /admin path (Railway healthcheck fallback)
    if (pathname === '/admin') {
        pathname = '/health.html';
    }

    // Handle .html extension for directories
    if (pathname.endsWith('/')) {
        pathname += 'index.html';
    } else if (!path.extname(pathname)) {
        pathname += '.html';
    }

    const filePath = path.join(PUBLIC_DIR, pathname);

    // Security check - ensure file is within public directory
    if (!filePath.startsWith(PUBLIC_DIR)) {
        res.writeHead(403);
        res.end('403 Forbidden');
        return;
    }

    serveFile(req, res, filePath);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 SoulRise server is running on port ${PORT}`);
  console.log(`📁 Serving files from: ${PUBLIC_DIR}`);
  console.log(`🌐 Health check available at: http://localhost:${PORT}/health.html`);
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
