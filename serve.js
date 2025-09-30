const { spawn } = require('child_process');
const path = require('path');

const PORT = process.env.PORT || 3000;

console.log(`🚀 Starting SoulRise server on port ${PORT}`);
console.log(`📁 Serving files from: ${path.join(__dirname, 'out')}`);

const serve = spawn('npx', ['serve@latest', 'out', '-l', PORT.toString(), '-s'], {
  stdio: 'inherit',
  shell: true
});

serve.on('error', (err) => {
  console.error('❌ Failed to start serve:', err);
  process.exit(1);
});

serve.on('exit', (code) => {
  console.log(`🛑 Serve process exited with code ${code}`);
  process.exit(code);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received, shutting down gracefully');
  serve.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received, shutting down gracefully');
  serve.kill('SIGINT');
});
