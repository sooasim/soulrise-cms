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