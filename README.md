# 단어학습 랜딩페이지

선생님과 AI가 함께하는 스마트 단어학습 서비스를 소개하는 원페이지 사이트입니다.

- React 19 + TypeScript + Vite
- Tailwind CSS 기반 스타일링
- 단일 페이지 라우팅 (react-router-dom)

## 로컬에서 실행하기

```bash
npm install
npm run dev
```

기본 주소는 http://localhost:3000 입니다.

## 빌드

```bash
npm run build
```

빌드 결과물은 `out/` 폴더에 생성됩니다. (`dist`가 아닙니다)

```bash
npm run preview
```

## Vercel로 배포하기

이 저장소에는 `vercel.json`이 포함되어 있어서 별도 설정 없이 바로 배포됩니다.

1. https://vercel.com 에서 **Add New → Project**
2. 이 GitHub 저장소를 **Import**
3. Framework Preset은 **Vite** 로 자동 인식됩니다
4. Build Command `npm run build`, Output Directory `out` (자동 적용됨)
5. **Deploy** 클릭

이후 `main` 브랜치에 push할 때마다 자동으로 다시 배포됩니다.

> 커스텀 도메인을 연결하려면 Vercel 프로젝트 → Settings → Domains 에서 추가하면 됩니다.

## GitHub Pages로 배포하기

`.github/workflows/deploy.yml` 워크플로가 포함되어 있어서 자동 배포됩니다.

1. GitHub 저장소 → **Settings → Pages**
2. **Build and deployment → Source** 를 `GitHub Actions` 로 선택
3. `main` 브랜치에 push하면 자동으로 빌드 및 배포가 실행됩니다

배포 주소는 `.github.io` 저장소가 아닌 경우 `https://아이디.github.io/저장소이름/` 형태가 됩니다.
워크플로가 저장소 이름을 읽어서 경로(base path)를 자동으로 맞춰주기 때문에, 저장소 이름을 그대로 쓰면 됩니다.

> `아이디.github.io` 라는 이름의 저장소를 만들면 `https://아이디.github.io/` 루트로 배포됩니다.

## 프로젝트 구조

```
src/
  flash/          페이지 콘텐츠와 섹션 렌더링
    site.json     사이트 전체 카피/이미지/설정 데이터
    sections.tsx  섹션 컴포넌트
    theme.ts      색상 및 타이포그래피 테마
    seo.ts        메타태그 및 구조화 데이터(JSON-LD)
  router/         라우팅 설정
  i18n/           다국어 설정
  pages/          라우트 단위 페이지
public/           (있다면) 정적 파일
index.html        HTML 엔트리
vite.config.ts    빌드 설정 (base path, alias 등)
```

## 문구 수정하기

화면에 보이는 대부분의 텍스트는 `src/flash/site.json`에 모여 있습니다.
문구를 바꾸고 싶다면 해당 파일에서 원하는 문장을 찾아 수정하면 됩니다.

## 참고

- 빌드 결과물(`out/`)과 `node_modules/`는 `.gitignore`에 등록되어 있어 저장소에 올라가지 않습니다.
- 폰트와 아이콘은 CDN으로 불러오기 때문에 별도 설치가 필요 없습니다.