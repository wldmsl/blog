import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "portfolio — ojen",
  description: "오지은의 포트폴리오",
};

export default function PortfolioPage() {
  return (
    <main className="max-w-2xl m-auto mb-16 text-sm">
      {/* Intro */}
      <section className="mb-12">
        <h1 className="text-2xl font-bold dark:text-gray-100 mb-1">오지은</h1>
        <p className="text-neutral-500 dark:text-neutral-400 font-mono text-xs mb-6">
          Frontend Developer · 3yr · Hanyang Univ.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          사람들에게 필요한 데이터를 모아서 가치 있는 정보로 만드는 일에 관심이 있습니다.
        </p>
      </section>

      {/* Work */}
      <section className="mb-12">
        <SectionTitle>경력</SectionTitle>
        <div className="border-t border-neutral-200 dark:border-neutral-800">
          <WorkItem
            period="2020.07 — 2023.06"
            company="와치텍 소프트웨어연구소"
            role="사원 · 3년"
            desc="통합 관제 솔루션(애플망고 · 와치올) 프론트엔드 개발 및 유지보수"
            projects={[
              {
                name: "와치올 모니터링 화면 구조 통합",
                period: "2023.01 — 2023.06",
                problem: "장애 대응 시 화면을 3번 이동해야 해서 운영팀 판단이 늦어진다는 피드백을 받았습니다. 탭으로 묶는 방식은 전환 비용이 그대로 남는다고 판단해, 장비 상태·이벤트·장애 이력을 하나의 레이아웃 안에 수직 배치하는 완전 통합 구조로 방향을 잡았습니다.",
                points: [
                  "세 영역을 한 화면에 수직 배치해 스크롤 없이 핵심 정보를 동시에 확인할 수 있도록 레이아웃 설계",
                  "화면마다 다르게 정의돼 있던 이벤트 상태 값을 단일 enum으로 통일 — 표시 불일치로 인한 운영자 혼란 제거",
                  "Vuex로 장비 선택 상태를 전역 관리해 컴포넌트 간 상태 동기화, 동일 장비 재조회 시 캐시로 중복 요청 차단",
                ],
                result: "화면 이동 3회 → 1회 (67% 감소)",
                tech: ["Vue.js", "Vuex", "JavaScript", "REST API"],
              },
              {
                name: "OZ Report 보고서 컴포넌트 재설계",
                period: "2021.09 — 2022.02",
                problem: "고객사마다 독립 컴포넌트를 추가하던 방식이라 수정 하나가 생기면 전체 파일을 다 고쳐야 했습니다. 고객사 간 공통 출력 기준을 먼저 분석하고, 변하는 것과 변하지 않는 것을 분리하는 구조로 전면 재설계했습니다.",
                points: [
                  "20~40개 고객사 보고서를 5개 출력 유형으로 추상화, 유형별 공통 컴포넌트 템플릿 설계",
                  "필드 표시 여부·집계 기준 등 고객사별 차이를 설정 파일로 분리 — 컴포넌트 코드 수정 없이 고객사 대응 가능",
                ],
                result: "개발 기간 7일 → 3일 (57% 단축)",
                tech: ["Vue.js", "JavaScript", "OZ Report"],
              },
              {
                name: "통합관제 대시보드 고도화",
                period: "2022.04 — 2022.09",
                problem: "운영자들이 차트 빈 구간을 장비 장애로 오인하는 문제가 반복됐습니다. 실제 원인은 Elasticsearch 수집 실패였고, 서버 문제와 수집 문제를 화면에서 구분해줘야 한다고 판단했습니다.",
                points: [
                  "차트 컴포넌트에 데이터 상태 레이어 추가 — 정상·누락·복구를 시각적으로 구분 (회색 점선·주황색·hover 툴팁), 운영자가 빈 구간의 원인을 화면에서 바로 판단할 수 있도록 설계",
                  "수천 개 OID 계층 트리 렌더링 지연 → 가상 스크롤 적용으로 초기 DOM 노드 수 최소화",
                ],
                result: "데이터 누락으로 인한 운영자 오판 케이스 제거",
                tech: ["Vue.js", "JavaScript", "REST API"],
              },
            ]}
          />
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <SectionTitle>프로젝트</SectionTitle>
        <div className="border-t border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-100 dark:divide-neutral-800/60">
          <ProjectItem
            period="2026.02 — 2026.04"
            name="제조 자동화 AI 챗봇"
            problem="제조 현장 담당자가 이상 감지 후 보고까지 수작업으로 처리하는 비효율을 자동화하는 서비스"
            points={[
              "LangChain Agent + Streamlit으로 자연어 기반 챗봇 UI 구현",
              "n8n Webhook으로 라인 이상 감지 → 이메일 발송 → 보고서 생성 → Google Sheets 저장 파이프라인 설계",
              "MCP 연동으로 외부 툴 호출 에이전트 구조 구현",
            ]}
            result="이상 감지 → 보고 프로세스 자동화"
            tech={["LangChain", "GPT-4o", "n8n", "MCP", "Streamlit"]}
          />
          <ProjectItem
            period="2025.06 — 2025.09"
            name="Tenth"
            problem="할 일이 너무 크게 느껴져 시작조차 못하는 사람들을 위해 AI가 목표를 10단계 실행 구조로 쪼개주는 앱"
            points={[
              "OpenAI API JSON 모드 응답 스키마를 단계별 카드 UI와 1:1 매핑해 렌더링 레이어 단순화",
              "Animated API 기반 Progress Bar · 단계 완료 체크 애니메이션으로 게이미피케이션 구현",
              "Supabase 연동 완료 태스크 캘린더 자동 저장, i18n 영문 전환 지원",
            ]}
            result="목표 → 10단계 실행 구조 자동 분해"
            tech={["React Native", "TypeScript", "OpenAI API", "Supabase", "n8n"]}
          />
          <ProjectItem
            period="2025.12 — 2026.03"
            name="독해독"
            problem="영어 지문 AI 추출 정확도가 40%에 머물렀습니다. 비결정론적 출력이 원인이었고, 전체 서비스가 아닌 해당 기능만 분리해 오류 패턴을 분석했습니다."
            points={[
              "부정 지시 표현이 편향을 심화시킨다는 원인을 파악 → XML 태그 기반 프롬프트 구조화로 LLM attention을 특정 패턴에 집중, 가드레일로 벗어난 응답 차단",
              "n8n 검증 자동화 워크플로우로 프롬프트 변경마다 정확도를 정량 추적해 3단계 개선 과정 관리",
              "React Native WebView로 분석 결과 화면 구현, JS Bridge로 RN ↔ WebView 간 OCR 데이터 전달",
            ]}
            result="AI 추출 정확도 40% → 87%"
            tech={["React Native", "TypeScript", "WebView", "OpenAI API", "DeepL API", "n8n"]}
          />
          <ProjectItem
            period="2025.03 — 2025.06"
            name="애디의버스"
            problem="ADHD 사용자는 버스 도착 시각을 알아도 지금 나가야 하는지 판단이 어렵습니다. 도착 시각이 아닌 출발 시점 기준으로 알림을 주는 앱을 만들었습니다."
            points={[
              "KakaoMap 도보 경로 API로 이동 시간을 역산해 출발 시각을 계산, 해당 시점에 로컬 Push 알림 스케줄링 — 버스 도착 알림이 아닌 '지금 나가세요' 알림",
              "주기적 polling으로 백그라운드에서도 배터리 15% 이상 소모 발생 → AppState API로 앱 상태를 감지해 백그라운드 진입 시 polling 중단, 포그라운드 복귀 시 재개",
              "기상청 API로 우천 감지 시 우산 등 날씨 대응 정보를 출발 알림에 포함해 단일 Push로 통합",
            ]}
            result="출발 시점 기준 로컬 Push 알림 구현, 배터리 소모 정상화"
            tech={["React Native", "TypeScript", "KakaoMap API"]}
          />
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <SectionTitle>기술</SectionTitle>
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4 space-y-3">
          <SkillRow label="Language" items={["TypeScript", "JavaScript"]} />
          <SkillRow label="Frontend" items={["React", "React Native", "Vue.js", "Next.js"]} />
          <SkillRow label="Library" items={["TanStack Query", "vanilla-extract", "i18n"]} />
          <SkillRow label="AI / 자동화" items={["OpenAI API", "LangChain", "n8n", "MCP", "Google Vision API", "DeepL API"]} />
          <SkillRow label="도구" items={["Vite", "Node.js", "Git", "Jenkins", "Docker", "Figma"]} />
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <SectionTitle>학력</SectionTitle>
        <div className="border-t border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-100 dark:divide-neutral-800/60 font-mono text-xs">
          <CertRow date="2024.03 — 2026.02" name="한양대학교 정보시스템학과" org="" />
        </div>
      </section>

      {/* Certifications */}
      <section>
        <SectionTitle>자격 / 어학</SectionTitle>
        <div className="border-t border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-100 dark:divide-neutral-800/60 font-mono text-xs">
          <CertRow date="2025.09" name="데이터분석준전문가 (ADsP)" org="한국데이터산업진흥원" />
          <CertRow date="2022.04" name="SQL개발자 (SQLD)" org="한국데이터산업진흥원" />
          <CertRow date="2026.03" name="TOEIC 760" org="" />
          <CertRow date="2024.07" name="TOEIC Speaking 130 (IM3)" org="" />
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">
      {children}
    </h2>
  );
}

function WorkItem({
  period,
  company,
  role,
  desc,
  projects,
}: {
  period: string;
  company: string;
  role: string;
  desc: string;
  projects: {
    name: string;
    period: string;
    problem: string;
    result: string;
    points: string[];
    tech: string[];
  }[];
}) {
  return (
    <div className="py-6">
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
        <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 shrink-0">{period}</span>
        <div>
          <span className="font-bold dark:text-gray-100">{company}</span>
          <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-400">{role}</span>
        </div>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 mb-5 ml-0 sm:ml-[140px]">{desc}</p>

      <div className="ml-0 sm:ml-[140px] space-y-6">
        {projects.map((p) => (
          <div key={p.name}>
            <div className="flex flex-wrap items-baseline gap-2 mb-2">
              <span className="font-semibold dark:text-gray-200">{p.name}</span>
              <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">{p.period}</span>
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 italic mb-3 text-xs leading-relaxed">{p.problem}</p>
            <ul className="space-y-1 mb-2">
              {p.points.map((pt) => (
                <li key={pt} className="text-neutral-600 dark:text-neutral-400 flex gap-2">
                  <span className="shrink-0 text-neutral-300 dark:text-neutral-600">·</span>
                  {pt}
                </li>
              ))}
            </ul>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 mb-2">→ {p.result}</p>
            <TechStack items={p.tech} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectItem({
  period,
  name,
  problem,
  points,
  result,
  tech,
}: {
  period: string;
  name: string;
  problem: string;
  points: string[];
  result: string;
  tech: string[];
}) {
  return (
    <div className="py-5">
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
        <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 shrink-0 sm:w-[120px]">
          {period}
        </span>
        <span className="font-semibold dark:text-gray-100">{name}</span>
      </div>
      <div className="sm:ml-[136px]">
        <p className="text-neutral-500 dark:text-neutral-400 italic mb-3 text-xs leading-relaxed">{problem}</p>
        <ul className="space-y-1 mb-2">
          {points.map((pt) => (
            <li key={pt} className="text-neutral-600 dark:text-neutral-400 flex gap-2">
              <span className="shrink-0 text-neutral-300 dark:text-neutral-600">·</span>
              {pt}
            </li>
          ))}
        </ul>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 mb-3">→ {result}</p>
        <TechStack items={tech} />
      </div>
    </div>
  );
}

function TechStack({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <span
          key={t}
          className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function SkillRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex gap-4">
      <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 w-20 shrink-0 pt-0.5">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {items.map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function CertRow({ date, name, org }: { date: string; name: string; org: string }) {
  return (
    <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
      <span className="text-neutral-400 dark:text-neutral-500 shrink-0 w-[120px]">{date}</span>
      <div>
        <span className="text-neutral-700 dark:text-neutral-300">{name}</span>
        {org && <span className="ml-2 text-neutral-400 dark:text-neutral-500">{org}</span>}
      </div>
    </div>
  );
}
