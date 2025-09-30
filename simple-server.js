const express = require('express');
const path = require('path');

const app = express();
const PORT = parseInt(process.env.PORT, 10) || 3000;

// 정적 파일 서빙
app.use(express.static(path.join(__dirname, 'out')));

// 루트 경로
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

// /admin 경로 (Railway 헬스체크)
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'health.html'));
});

// /health.html 경로
app.get('/health.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'health.html'));
});

// /blog 경로
app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'blog', 'index.html'));
});

// 404 처리
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'out', '404.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 SoulRise server is running on port ${PORT}`);
  console.log(`📁 Serving files from: ${path.join(__dirname, 'out')}`);
  console.log(`🌐 Health check available at: http://localhost:${PORT}/admin`);
  console.log(`🔧 Environment: PORT=${process.env.PORT}, NODE_ENV=${process.env.NODE_ENV}`);
  console.log(`📊 Parsed PORT: ${PORT} (type: ${typeof PORT})`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received, shutting down gracefully');
  process.exit(0);
});
