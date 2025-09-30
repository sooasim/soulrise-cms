# 🚀 Railway 배포 완전 가이드

## 📋 현재 문제 해결

### 문제 1: 관리자 페이지 404 오류
- URL: `https://soulrise-cms-production.up.railway.app/adminAPP_KEYS=...`
- 원인: 환경변수가 URL에 노출됨

### 문제 2: Git 병합 충돌
- `package.json`에 병합 충돌 마커가 남아있음
- ✅ **해결됨**: 병합 충돌 제거 완료

## 🚀 Railway 배포 단계

### 1단계: Strapi CMS (백엔드) 배포

1. **Railway 대시보드** → **New Project** → **Deploy from GitHub**
2. **Repository**: `soulrise-cms` 선택
3. **Root Directory**: `strapi-backend` 설정
4. **PostgreSQL 데이터베이스 추가**:
   - 프로젝트 → **Add** → **Database** → **PostgreSQL**

### 2단계: 환경변수 설정 (중요!)

Railway 프로젝트 → **Variables** 탭에서 다음 환경변수를 **정확히** 설정:

```
NODE_ENV=production
HOST=0.0.0.0
PORT=1337
APP_KEYS=245b1c440040599c6027f8ebd33e1c3de1749b77a8d0339176964aa4b24d30c40ade47cf6d58ce5f644760889f842f92217454bbe6d702a3eff5687f62d618c5
ADMIN_JWT_SECRET=245b1c440040599c6027f8ebd33e1c3de1749b77a8d0339176964aa4b24d30c40ade47cf6d58ce5f644760889f842f92217454bbe6d702a3eff5687f62d618c5
API_TOKEN_SALT=b7a8854c3b7c5378d517d4554e60cd9c97322927cf5d009136b4a616ae5a99f8abb96fa311d69e4d0a4021fb23a8e33cf26a8aae31ac1ffd70c74569f850f427
TRANSFER_TOKEN_SALT=33691fc733e0a4f5f27d116a98c0dbe37a3699b2297db83c51683037f09f2f0bc3782e9db24e4ddb74e5dbc2d201f7d9e090f2e179881175328a6d6c78d15d49
ENCRYPTION_KEY=a7f96ec7a64534585e650fbdf4314375cc87bbf8157c3ec3d3e836aa534e6e2baba6f978bd37e20a5268b115dbec72dbc17f59e315b02c45fab3ee3af59c189d
IS_PROXIED=true
CRON_ENABLED=false
DATABASE_CLIENT=postgres
```

### 3단계: 배포 시작
- **Deploy** 버튼 클릭
- 배포 완료까지 대기 (약 3-5분)

### 4단계: Next.js 웹사이트 (프론트엔드) 배포

1. **Railway 대시보드** → **New Project** → **Deploy from GitHub**
2. **Repository**: `soulrise-cms` 선택
3. **Root Directory**: `/` (루트) 설정
4. **환경변수 설정**:
   ```
   NEXT_PUBLIC_CMS_URL=https://your-strapi-url.up.railway.app
   NEXT_PUBLIC_CMS_ADMIN_URL=https://your-strapi-url.up.railway.app/admin
   SITE_URL=https://your-web-url.up.railway.app
   ```

## 🔧 문제 해결 체크리스트

### ✅ Git 병합 충돌 해결
- `package.json` 파일 정리 완료

### 🔄 Railway 환경변수 재설정 필요
- 기존 Railway 프로젝트에서 모든 환경변수 삭제
- 위의 환경변수 목록을 다시 설정
- 프로젝트 재시작

### 🔄 관리자 계정 생성
- 첫 배포 후 `/admin` 접속하여 관리자 계정 생성

### 🔄 Public 권한 설정
- Settings → Roles → Public
- Post: find, findOne 체크
- Page: find, findOne 체크

## 🎯 예상 결과

배포 완료 후:
- ✅ `https://your-cms-url.up.railway.app/admin` - 관리자 페이지 정상 접속
- ✅ `https://your-cms-url.up.railway.app/api/posts` - API 정상 작동
- ✅ `https://your-web-url.up.railway.app/` - 웹사이트 정상 표시
