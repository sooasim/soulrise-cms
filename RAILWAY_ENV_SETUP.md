# 🚀 Railway 환경변수 설정 가이드

## 📋 **Railway에서 설정해야 할 환경변수**

### **1. soulrise-web 프로젝트 (Next.js 웹사이트)**

Railway 대시보드 → soulrise-web 프로젝트 → Variables 탭에서 다음 환경변수를 추가하세요:

```bash
# 필수 환경변수
NEXT_PUBLIC_CMS_URL=https://soulrise-cms-production.up.railway.app
SITE_URL=https://soulrise-web-production.up.railway.app

# 선택사항 (관리자 리다이렉트용)
NEXT_PUBLIC_CMS_ADMIN_URL=https://soulrise-cms-production.up.railway.app/admin
```

### **2. soulrise-cms 프로젝트 (Strapi CMS)**

Railway 대시보드 → soulrise-cms 프로젝트 → Variables 탭에서 다음 환경변수를 추가하세요:

```bash
# 필수 환경변수 (이미 설정되어 있을 수 있음)
ADMIN_JWT_SECRET=245b1c440040599c6027f8ebd33e1c3de1749b77a8d0339176964aa4b24d30c40ade47cf6d58ce5f644760889f842f92217454bbe6d702a3eff5687f62d618c5
API_TOKEN_SALT=b7a8854c3b7c5378d517d4554e60cd9c97322927cf5d009136b4a616ae5a99f8abb96fa311d69e4d0a4021fb23a8e33cf26a8aae31ac1ffd70c74569f850f427
TRANSFER_TOKEN_SALT=33691fc733e0a4f5f27d116a98c0dbe37a3699b2297db83c51683037f09f2f0bc3782e9db24e4ddb74e5dbc2d201f7d9e090f2e179881175328a6d6c78d15d49
APP_KEYS=245b1c440040599c6027f8ebd33e1c3de1749b77a8d0339176964aa4b24d30c40ade47cf6d58ce5f644760889f842f92217454bbe6d702a3eff5687f62d618c5
PUBLIC_URL=https://soulrise-cms-production.up.railway.app

# 데이터베이스 (PostgreSQL 권장)
DATABASE_URL=postgresql://username:password@host:port/database

# CORS 설정 (필요시)
ALLOWED_ORIGINS=https://soulrise-web-production.up.railway.app
```

## 🔧 **설정 순서**

### **1단계: CMS 주소 확인**
1. Railway 대시보드 → soulrise-cms 프로젝트 클릭
2. 오른쪽 위 "Open" 버튼 클릭
3. 주소 복사 (예: `https://soulrise-cms-production.up.railway.app`)

### **2단계: 웹 환경변수 설정**
1. Railway 대시보드 → soulrise-web 프로젝트 클릭
2. Variables 탭 클릭
3. 위의 환경변수들 추가/수정
4. "Deploy" 버튼 클릭하여 재배포

### **3단계: CMS Public 권한 설정**
1. CMS 관리자 접속: `https://soulrise-cms-production.up.railway.app/admin`
2. Settings → Roles → Public 클릭
3. Post와 Page의 `find`, `findOne` 권한 체크
4. Save

### **4단계: 테스트 콘텐츠 생성**
1. Content Manager → Post → Create new entry
2. 제목과 내용 입력 후 Publish
3. Content Manager → Page → Create new entry (about, contact, ir 등)

## 🧪 **연결 테스트**

### **API 테스트**
브라우저에서 다음 URL들이 JSON을 반환하는지 확인:
- `https://soulrise-cms-production.up.railway.app/api/posts?populate=*`
- `https://soulrise-cms-production.up.railway.app/api/pages?populate=*`

### **웹사이트 테스트**
- `https://soulrise-web-production.up.railway.app/` → 홈페이지
- `https://soulrise-web-production.up.railway.app/blog` → 블로그
- `https://soulrise-web-production.up.railway.app/page/about` → 회사 소개
- `https://soulrise-web-production.up.railway.app/admin` → CMS 관리자 리다이렉트

## 🚨 **문제 해결**

### **CORS 오류가 발생하면:**
1. CMS 관리자 → Settings → API Tokens
2. Allowed Origins에 웹 주소 추가: `https://soulrise-web-production.up.railway.app`
3. Save 후 재배포

### **블로그가 비어있으면:**
1. CMS에 Post가 Publish되어 있는지 확인
2. Public 권한이 설정되어 있는지 확인
3. 웹 환경변수 `NEXT_PUBLIC_CMS_URL`이 정확한지 확인

### **Page 페이지가 안 보이면:**
1. CMS에 Page 타입이 생성되어 있는지 확인
2. Content-Type Builder → Page → 필드 설정 확인
3. Content Manager에서 Page를 Publish했는지 확인
