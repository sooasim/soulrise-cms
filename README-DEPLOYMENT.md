# SoulRise 프로젝트 배포 가이드

이 저장소에는 두 개의 프로젝트가 포함되어 있습니다:

## 📁 프로젝트 구조

```
soulrise-cms/
├── strapi-backend/          # Strapi CMS (백엔드)
│   ├── config/             # Strapi 설정 파일
│   ├── src/                # API 및 컨텐츠 타입
│   └── package.json        # Strapi 의존성
├── app/                    # Next.js 웹사이트 (프론트엔드)
├── lib/                    # API 유틸리티
└── package.json            # Next.js 의존성
```

## 🚀 Railway 배포 방법

### 1. Strapi CMS (백엔드) 배포

1. Railway → **New Project** → **Deploy from GitHub**
2. `soulrise-cms` 저장소 선택
3. **Root Directory**를 `strapi-backend`로 설정
4. PostgreSQL 데이터베이스 추가
5. 환경변수 설정:
   ```
   NODE_ENV=production
   APP_KEYS=245b1c440040599c6027f8ebd33e1c3de1749b77a8d0339176964aa4b24d30c40ade47cf6d58ce5f644760889f842f92217454bbe6d702a3eff5687f62d618c5
   ADMIN_JWT_SECRET=245b1c440040599c6027f8ebd33e1c3de1749b77a8d0339176964aa4b24d30c40ade47cf6d58ce5f644760889f842f92217454bbe6d702a3eff5687f62d618c5
   API_TOKEN_SALT=b7a8854c3b7c5378d517d4554e60cd9c97322927cf5d009136b4a616ae5a99f8abb96fa311d69e4d0a4021fb23a8e33cf26a8aae31ac1ffd70c74569f850f427
   ```

### 2. Next.js 웹사이트 (프론트엔드) 배포

1. Railway → **New Project** → **Deploy from GitHub**
2. `soulrise-cms` 저장소 선택
3. **Root Directory**를 `/` (루트)로 설정
4. 환경변수 설정:
   ```
   NEXT_PUBLIC_CMS_URL=https://your-strapi-url.up.railway.app
   NEXT_PUBLIC_CMS_ADMIN_URL=https://your-strapi-url.up.railway.app/admin
   SITE_URL=https://your-web-url.up.railway.app
   ```

## 🔧 로컬 개발

### Strapi CMS 실행
```bash
cd strapi-backend
npm install
npm run develop
```

### Next.js 웹사이트 실행
```bash
npm install
npm run dev
```

## 📝 API 엔드포인트

- **Posts**: `/api/posts`
- **Pages**: `/api/pages`
- **Admin**: `/admin`
