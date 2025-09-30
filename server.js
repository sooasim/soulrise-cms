const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 정적 파일 서빙
app.use(express.static(path.join(__dirname, 'out')));

// SPA 라우팅을 위한 fallback
app.get('*', (req, res) => {
  // 파일 확장자가 있는 요청은 404 처리
  if (path.extname(req.path)) {
    return res.status(404).send('File not found');
  }
  
  // HTML 파일로 응답
  res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
