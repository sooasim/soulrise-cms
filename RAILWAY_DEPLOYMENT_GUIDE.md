# 🚀 Railway 배포 가이드

## 현재 문제 해결 방법

### 1. Strapi CMS (백엔드) 배포

1. **Railway 대시보드** → **New Project** → **Deploy from GitHub
2. **Repository**: `soulrise-cms` 선택
3. **Root Directory**: `strapi-backend` 설정
4. **PostgreSQL 데이터베이스 추가**:
   - 프로젝트 → **Add** → **Database** → **PostgreSQL**
5. **환경변수 설정** (Variables 탭):
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
   PUBLIC_URL=https://your-cms-url.up.railway.app
   ```
6. **Deploy** 버튼 클릭

### 2. Next.js 웹사이트 (프론트엔드) 배포

1. **Railway 대시보드** → **New Project** → **Deploy from GitHub
2. **Repository**: `soulrise-cms` 선택
3. **Root Directory**: `/` (루트) 설정
4. **환경변수 설정** (Variables 탭):
   ```
   NEXT_PUBLIC_CMS_URL=https://your-strapi-url.up.railway.app
   NEXT_PUBLIC_CMS_ADMIN_URL=https://your-strapi-url.up.railway.app/admin
   SITE_URL=https://your-web-url.up.railway.app
   ```
5. **Deploy** 버튼 클릭

### 3. CMS 관리자 설정

1. **Strapi CMS URL** → `/admin` 접속
2. **관리자 계정 생성** (첫 배포 시)
3. **권한 설정**:
   - **Settings** → **Roles** → **Public**
   - **Post**: `find`, `findOne` 체크
   - **Page**: `find`, `findOne` 체크
   - **Save** 버튼

### 4. 테스트 콘텐츠 생성

1. **Content Manager** → **Post**
2. **Create new entry**:
   - Title: "첫 번째 글"
   - Slug: "first-post"
   - Excerpt: "테스트 글입니다"
   - Content: "이것은 테스트 콘텐츠입니다."
3. **Publish** 버튼

## 중요 사항

- **PUBLIC_URL**은 Railway가 자동으로 생성하는 URL을 사용
- **DATABASE_URL**은 Railway PostgreSQL이 자동으로 설정
- 배포 후 최소 2-3분 대기 후 접속 시도
- 첫 접속 시 관리자 계정 생성 필요
