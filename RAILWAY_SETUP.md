# Railway 배포 설정 가이드

## 환경 변수 설정

Railway 대시보드에서 다음 환경 변수들을 설정해야 합니다:

### 필수 환경 변수
```
NODE_ENV=production
DATABASE_URL=<Railway PostgreSQL URL>
ADMIN_JWT_SECRET=245b1c440040599c6027f8ebd33e1c3de1749b77a8d0339176964aa4b24d30c40ade47cf6d58ce5f644760889f842f92217454bbe6d702a3eff5687f62d618c5
JWT_SECRET=a7f96ec7a64534585e650fbdf4314375cc87bbf8157c3ec3d3e836aa534e6e2baba6f978bd37e20a5268b115dbec72dbc17f59e315b02c45fab3ee3af59c189d
API_TOKEN_SALT=b7a8854c3b7c5378d517d4554e60cd9c97322927cf5d009136b4a616ae5a99f8abb96fa311d69e4d0a4021fb23a8e33cf26a8aae31ac1ffd70c74569f850f427
TRANSFER_TOKEN_SALT=33691fc733e0a4f5f27d116a98c0dbe37a3699b2297db83c51683037f09f2f0bc3782e9db24e4ddb74e5dbc2d201f7d9e090f2e179881175328a6d6c78d15d49
APP_KEYS=245b1c440040599c6027f8ebd33e1c3de1749b77a8d0339176964aa4b24d30c40ade47cf6d58ce5f644760889f842f92217454bbe6d702a3eff5687f62d618c5
```

### 선택적 환경 변수
```
HOST=0.0.0.0
PORT=1337
DATABASE_CLIENT=postgres
```

## Railway에서 설정하는 방법

1. Railway 프로젝트 대시보드 접속
2. 프로젝트 선택
3. Variables 탭 클릭
4. 위의 환경 변수들을 하나씩 추가
5. DATABASE_URL은 Railway PostgreSQL 서비스에서 자동 생성된 URL 사용

## PostgreSQL 데이터베이스 추가

1. Railway 프로젝트에서 "New Service" 클릭
2. "Database" 선택
3. "PostgreSQL" 선택
4. 생성된 DATABASE_URL을 환경 변수에 추가

## 문제 해결

- 서버 오류가 계속 발생하면 Railway 로그를 확인
- 데이터베이스 연결 오류 시 DATABASE_URL 확인
- 빌드 오류 시 package.json 의존성 확인
