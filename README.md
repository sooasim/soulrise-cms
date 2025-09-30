<<<<<<< HEAD
# SoulRise 웹사이트

SoulRise 공식 웹사이트입니다.

## 기술 스택

- **Next.js 14**: React 프레임워크
- **TypeScript**: 타입 안전성
- **Tailwind CSS**: 스타일링 (선택사항)

## 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 정적 파일 서빙
npm start
```

## 배포

이 프로젝트는 Railway에서 자동으로 배포됩니다.

### 환경 변수

- `NEXT_PUBLIC_CMS_URL`: Strapi CMS URL

## 구조

```
├── app/                 # Next.js App Router
├── components/          # React 컴포넌트
├── lib/                 # 유틸리티 함수
├── public/              # 정적 파일
└── out/                 # 빌드된 정적 파일
```
=======
# SoulRise Strapi CMS

SoulRise 웹사이트의 콘텐츠 관리 시스템입니다.

## 시작하기

### 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run develop
```

### 프로덕션

```bash
# 빌드
npm run build

# 프로덕션 서버 시작
npm start
```

## API 엔드포인트

- **Posts**: `/api/posts`
- **Pages**: `/api/pages`

## 관리자 패널

개발 모드: `http://localhost:1337/admin`
프로덕션: `https://soulrise-cms-production.up.railway.app/admin`
>>>>>>> 076bcb64ff9107675c3d089cb2acfa842b19a738
