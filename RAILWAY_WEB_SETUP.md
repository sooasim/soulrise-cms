# Railway 웹사이트 배포 설정 가이드

## 환경 변수 설정 (웹 서비스용)

Railway 웹 서비스 Variables 탭에서 다음 환경 변수들을 설정해야 합니다:

### 필수 환경 변수
```
NODE_ENV=production
NEXT_PUBLIC_CMS_URL=https://soulrise-cms-production.up.railway.app
SITE_URL=https://soulrise-web-production.up.railway.app
```

### 선택적 환경 변수
```
HOST=0.0.0.0
PORT=3000
```

## Railway에서 설정하는 방법

1. **웹 서비스 Variables 탭**에서 환경 변수 추가
2. **CMS URL 확인**: Strapi CMS가 먼저 배포되어 있어야 함
3. **재배포**: 환경 변수 설정 후 자동 재배포

## 문제 해결 체크리스트

### 1. CMS 먼저 배포 확인
- [ ] Strapi CMS가 Railway에 배포되어 있는가?
- [ ] `https://soulrise-cms-production.up.railway.app/admin` 접속 가능한가?

### 2. Strapi CMS 권한 설정
- [ ] Strapi Admin → Settings → Users & Permissions Plugin → Roles → Public
- [ ] Post 컨텐츠 타입에서 `find`와 `findOne` 권한 허용

### 3. CMS에 실제 콘텐츠 추가
- [ ] Strapi Admin에서 Post 타입의 글을 생성
- [ ] 글을 "Publish" 상태로 변경

### 4. 환경 변수 확인
- [ ] `NEXT_PUBLIC_CMS_URL`이 정확한 CMS URL인가?
- [ ] `SITE_URL`이 정확한 웹사이트 URL인가?

### 5. API 엔드포인트 테스트
직접 브라우저에서 다음 URL들을 확인:
- `https://soulrise-cms-production.up.railway.app/api/posts` → JSON 응답 확인
- `https://soulrise-cms-production.up.railway.app/api/posts?populate=*` → 상세 JSON 확인

## 자주 보이는 에러와 해결법

### "ENV MISSING: NEXT_PUBLIC_CMS_URL"
→ Variables에 CMS URL이 비어있거나 오타

### "getaddrinfo ENOTFOUND"
→ CMS URL의 도메인이 틀림

### "403/401 Forbidden"
→ Strapi에서 Public 권한(find/findOne) 미허용

### "ECONNREFUSED"
→ CMS가 아직 배포 안 됐거나 일시 장애

### "Unexpected token < ... HTML ..."
→ API가 JSON 대신 HTML(에러 페이지) 반환 → 권한/URL 문제

## 안전한 에러 처리

이 웹사이트는 다음과 같은 안전장치가 포함되어 있습니다:

- ✅ **API 호출 실패 시**: 빈 상태로 표시, 에러 로그만 출력
- ✅ **CMS 연결 실패 시**: "글이 아직 없거나 서버에서 글을 불러오지 못했어요" 메시지
- ✅ **개별 글 없음**: "글을 찾을 수 없어요" 메시지
- ✅ **타임아웃 설정**: 10초 후 자동 타임아웃

## 로컬 테스트 방법

```bash
# 의존성 설치
npm install

# 빌드 테스트
npm run build

# 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:3000/blog` 접속하여 안전하게 표시되는지 확인
