# 사주로또 - 사주팔자와 로또번호 추천

사주팔자를 보고 로또번호를 추천받는 웹사이트입니다.

## 기능

- **사주팔자 분석**: 성별, 생년월일시분을 입력받아 사주팔자 분석
- **종합/건강/재물/이성/학업/일** 카테고리별 사주 해석
- **로또번호 추천**: 사주팔자와 현재 날짜를 기반으로 한 로또번호 5세트 추천

## 기술 스택

- **Frontend**: React 18, Next.js 14
- **Styling**: SCSS
- **Language**: TypeScript
- **Deployment**: Vercel (GitHub 연동)

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 배포

이 프로젝트는 Vercel을 통해 자동 배포됩니다.

1. GitHub에 코드 푸시
2. Vercel에서 GitHub 저장소 연결
3. 자동 배포 완료

## 프로젝트 구조

```
├── app/
│   ├── globals.scss      # 전역 스타일
│   ├── layout.tsx        # 루트 레이아웃
│   └── page.tsx          # 메인 페이지
├── components/           # React 컴포넌트
├── utils/               # 유틸리티 함수
└── types/               # TypeScript 타입 정의
```

## 라이선스

MIT License
