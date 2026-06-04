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
          Web Developer · 3yr exp · Hanyang Univ.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
사람들에게 필요한 데이터를 모아서 가치 있는 정보로 만드는 일에 관심이 있습니다.</p>
      </section>

      {/* Work */}
      <section className="mb-12">
        <SectionTitle>경력</SectionTitle>

        <div className="border-t border-neutral-200 dark:border-neutral-800">
          <WorkItem
            period="2020.07 — 2023.06"
            company="와치텍 소프트웨어연구소"
            role="사원 · 웹개발 · 3년"
            desc="통합 관제 솔루션(애플망고, 와치올) 유지보수, 성능 모듈 개선 및 리포트 가공 시스템 고도화"
            projects={[
              {
                name: "와치올 모니터링 화면 구조 통합",
                period: "2023.01 — 2023.06",
                result: "화면 이동 3회 → 1회 (67% 감소)",
                points: [
                  "장비 성능 / 이벤트 / 장애 이력을 단일 화면으로 통합하여 UI 재구성",
                  "단일 조회 구조로 조인 쿼리를 재설계하여 API 호출 3회 → 1회 감소",
                  "화면 표시 기준에 맞게 API 응답 구조 및 이벤트 상태 값 재설계",
                ],
                tech: ["Vue.js", "JavaScript", "Spring", "Java", "MySQL", "Elasticsearch"],
              },
              {
                name: "OZ Report 보고서 자동화",
                period: "2021.09 — 2022.02",
                result: "고객사 커스텀 보고서 개발 기간 7일 → 3일 단축 (57% 감소)",
                points: [
                  "Cron 기반 스케줄러로 보고서 생성 배치 자동 실행 및 이메일 발송 자동화",
                  "다중 테이블 JOIN 및 집계 쿼리로 보고서용 공통 데이터 조회 로직 구성",
                  "20~40개 고객사별 커스텀 보고서 데이터 가공 로직 표준화",
                ],
                tech: ["Vue.js", "JavaScript", "Spring", "Java", "MySQL", "OZ Report"],
              },
              {
                name: "애플망고 다국어 처리 (i18n)",
                period: "2022",
                result: "글로벌 엔터프라이즈사 납품 일정 지연 없이 공급",
                points: [
                  "핵심 서버 관제 4개 모듈 및 리포트 영역 i18n 표준 규격 검토 및 적용",
                  "실시간 동적 언어 전환 기능 구현을 통한 글로벌 확장성 확보",
                ],
                tech: ["Vue.js", "JavaScript", "i18n"],
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
            period="2026.04 — 2026.05"
            name="제조 자동화 AI 챗봇"
            desc="제조 현장 특화 생성형 AI 자동화 에이전트 챗봇"
            points={[
              "Streamlit 기반 챗봇 UI 구현 및 LangChain Agent 연동",
              "n8n Webhook 활용 조건 분기 및 외부 API 연동 자동 워크플로우 설계",
              "Google Sheets를 RAG 원천 데이터로 활용 (라인 이상 감지 → 이메일 발송 → 보고서 생성 → 자동 저장)",
              "Ubuntu 기반 Docker로 n8n self-hosted 구축 및 Python 가상환경 운영",
            ]}
            tech={["LangChain", "GPT-4o", "n8n", "MCP", "Google Sheets API", "Docker", "Linux", "Python"]}
          />
          <ProjectItem
            period="2026.04 — 2026.05"
            name="집중력 향상 IoT 기기 × n8n"
            desc="공부 집중력 향상 IoT 기기 데이터 AI 연동 파이프라인 구축"
            points={[
              "ESP32 보드를 활용한 명상용 IoT 기기 자체 설계 및 하드웨어 프로토타입 제작",
              "n8n Webhook 노드로 기기 실시간 데이터 수신 환경 구축",
              "MCP 연동을 통한 기기 데이터의 LLM 컨텍스트 참조 및 분석 환경 구축",
              "집중 완료 및 상태 데이터의 외부 데이터베이스 적재 자동화",
            ]}
            tech={["n8n", "MCP", "Webhook", "ESP32", "REST API"]}
          />
          <ProjectItem
            period="2026.03 — 2026.04"
            name="Tenth"
            desc="AI 기반 Task 분해 서비스 — 목표를 10단계로 구조화해주는 앱"
            points={[
              "OpenAI API JSON 모드 연동으로 사용자 입력 태스크의 10단계 실행 구조화 프롬프트 설계",
              "Progress Score 연산 로직 및 게이미피케이션 구조 구현",
              "완료 작업 캘린더 자동 저장 기능 및 i18n 영문 환경 지원",
            ]}
            tech={["React Native", "TypeScript", "OpenAI", "Supabase", "n8n"]}
          />
          <ProjectItem
            period="2026.01 — 2026.03"
            name="독해독"
            desc="OCR 기반 영어 지문 분석 서비스 — AI 환각 제어로 추출 정확도 87% 달성"
            points={[
              "Google Vision API 활용 OCR 텍스트 추출 및 전처리 로직 구현",
              "SpaCy 기반 토큰화 및 품사 분석 활용 주절·종속절 분리 알고리즘 구현",
              "프롬프트 XML 태그 구조화 + 가드레일로 재진술 추출 정확도 40% → 87% 개선",
              "n8n 검증 자동화 워크플로우로 프롬프트 변경에 따른 정확도 정량 추적",
            ]}
            tech={["React Native", "TypeScript", "Python", "SpaCy", "OpenAI", "DeepL", "n8n"]}
          />
          <ProjectItem
            period="2025.12 — 2026.01"
            name="애디의버스"
            desc="ADHD 사용자용 버스 알림 서비스"
            points={[
              "공공데이터 API 연동을 통한 버스 실시간 위치 및 경로 조회 기능 구현",
              "KakaoMap 도보 시간 기반 버스 승차 알림 기능 구현",
              "기상청 API 기반 날씨 연동 준비물 알림 기능 구현",
            ]}
            tech={["React Native", "TypeScript", "Python", "KakaoMap API", "공공데이터 API"]}
          />
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <SectionTitle>기술</SectionTitle>
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4 space-y-3">
          <SkillRow label="Language" items={["Python", "Java", "JavaScript", "TypeScript"]} />
          <SkillRow label="Frontend" items={["React", "React Native", "Vue.js", "Next.js"]} />
          <SkillRow label="Backend" items={["Node.js", "Spring Framework"]} />
          <SkillRow label="DB" items={["MySQL", "PostgreSQL", "Elasticsearch", "Supabase"]} />
          <SkillRow label="AI / Infra" items={["OpenAI API", "LangChain", "n8n", "MCP", "Docker"]} />
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-12">
        <SectionTitle>자격 / 어학</SectionTitle>
        <div className="border-t border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-100 dark:divide-neutral-800/60 font-mono text-xs">
          <CertRow date="2025.09" name="데이터분석준전문가 (ADsP)" org="한국데이터산업진흥원" />
          <CertRow date="2022.04" name="SQL개발자 (SQLD)" org="한국데이터산업진흥원" />
          <CertRow date="2026.03" name="TOEIC 760" org="" />
          <CertRow date="2024.07" name="TOEIC Speaking 130 (Intermediate Mid 3)" org="" />
        </div>
      </section>

      {/* Education */}
      <section>
        <SectionTitle>학력</SectionTitle>
        <div className="border-t border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-100 dark:divide-neutral-800/60 font-mono text-xs">
          <CertRow date="2024.03 — 2026.02" name="한양대학교(서울) 정보시스템학과" org="학점 3.44 / 4.5" />
          <CertRow date="2019.07 — 2020.01" name="쌍용교육센터 Java 기반 웹 SW 개발자 양성과정" org="880시간" />
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

      <div className="ml-0 sm:ml-[140px] space-y-5">
        {projects.map((p) => (
          <div key={p.name}>
            <div className="flex flex-wrap items-baseline gap-2 mb-1">
              <span className="font-semibold dark:text-gray-200">{p.name}</span>
              <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">{p.period}</span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">→ {p.result}</p>
            <ul className="space-y-1 mb-2">
              {p.points.map((pt) => (
                <li key={pt} className="text-neutral-600 dark:text-neutral-400 flex gap-2">
                  <span className="shrink-0 text-neutral-300 dark:text-neutral-600">·</span>
                  {pt}
                </li>
              ))}
            </ul>
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
  desc,
  points,
  tech,
}: {
  period: string;
  name: string;
  desc: string;
  points: string[];
  tech: string[];
}) {
  return (
    <div className="py-5">
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
        <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 shrink-0 sm:w-[120px]">
          {period}
        </span>
        <div className="flex-1">
          <span className="font-semibold dark:text-gray-100">{name}</span>
          <p className="text-neutral-500 dark:text-neutral-400 mt-0.5">{desc}</p>
        </div>
      </div>
      <div className="sm:ml-[136px]">
        <ul className="space-y-1 mb-3">
          {points.map((pt) => (
            <li key={pt} className="text-neutral-600 dark:text-neutral-400 flex gap-2">
              <span className="shrink-0 text-neutral-300 dark:text-neutral-600">·</span>
              {pt}
            </li>
          ))}
        </ul>
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
