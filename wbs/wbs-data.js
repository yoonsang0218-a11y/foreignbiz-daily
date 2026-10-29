/* PlugNX 외국인 신사업 WBS — 단일 정본 데이터.
 * 프로젝트 목표 = MVP 가동(GA). PoC는 목표가 아니라 MVP를 실사용으로 검증하는 수단(G5)이다.
 *   ('26.8.13 사용자 지시로 PoC 중심 6단계 구조 → MVP 중심 대과제 6개 구조로 재편)
 * 계층: phases = 대과제(G1~G6) · tasks = 소과제. 대시보드·CSV·XLSX 모두 이 2단을 그대로 쓴다.
 * 진행률·가중치·근거는 여기서만 수정한다. index.html은 렌더 전용(수치 하드코딩 0).
 * status: 0 | 25 | 40 | 50 | 75 | 100 (%).
 * label: "1차"(산출물 실존 확인) | "추정"(산출물 대조 기반 추정 — 사용자 정정 대상) | "목표·가정"(미착수 계획)
 * 소과제에 start/end가 있으면 그 값을, 없으면 대과제 기간을 쓴다.
 * 구버전: output/wbs/plugnx-mvp-poc-wbs.md·csv (2026-08-12, PoC 목표 3단 구조) — 폐기, 참조 금지.
 * 정정 시 이 파일의 status만 고치고 사유를 주석으로 남긴다.
 */
window.WBS = {
  meta: {
    title: "외국인 신사업 WBS 진행 대시보드",
    projectName: "Foreign Biz", // WBS Pro 프로젝트명 (CSV/XLSX 내보내기용)
    pm: "조윤상",
    asOf: "2026-08-20",
    goal: "MVP 가동(GA) — VisaDesk·BackWon·ForeignID L1을 실데이터로 돌려 고객이 실제로 쓰는 상태",
    gateDate: "2026-11-27",
    gateName: "MVP 릴리스 마감선 (외국인 병렬 트랙)",
    focus:
      "8/20 — 하반기 인력 무게는 전자등기 · 감정평가 기획에 두고, 외국인 트랙은 병렬로 굴린다. " +
      "11월 말 MVP 릴리스 → 12~2월 PoC 3개월 → '27.3 go/no-go. " +
      "라이선스(금소법 §12①)는 연환산 1,500건이 보이면 조건부 착수한다 (경영진 발표본 v3.31 로드맵)",
    products: ["공통", "VisaDesk", "BackWon", "ForeignID"],
  },
  /* 대과제 가중치: 전체 진행률 = Σ(대과제% × weight) / Σweight (합 100) */
  phases: [
    {
      id: "G1", name: "기획·검증·MVP 범위 동결", period: "2026-04-01 ~ 08-21",
      start: "2026-04-01", end: "2026-08-21", weight: 18,
      note: "데스크리서치→현장검증→제로베이스 재검증까지 완료. 남은 것은 범위 동결서와 8/17 MVP 착수 게이트.",
      tasks: [
        { name: "아이템 스캔·진입 후보 2종 선별(VisaDesk·BackWon)", product: "공통", status: 100, weight: 1, label: "1차", start: "2026-04-01", end: "2026-06-25", evidence: "output/screening.html" },
        { name: "경쟁구도 전수조사·포지셔닝(25개 기능 MECE 지도)", product: "공통", status: 100, weight: 1, label: "1차", start: "2026-04-01", end: "2026-06-25", evidence: "output/backwon-research/20-foreigner-market-full-mece-competitor-map.md" },
        { name: "시장 모수·세그먼트·추진배경 정리", product: "공통", status: 100, weight: 1, label: "1차", start: "2026-04-01", end: "2026-06-25", evidence: "output/background-market-summary.html" },
        { name: "5축 타당성 1차 판정(조건부 GO)·정책 3년 워치 반영(E-9 축소·E-7-4 점수제)", product: "공통", status: 100, weight: 2, label: "1차", start: "2026-04-01", end: "2026-06-25", evidence: "output/feasibility-gate.html · output/policy-watch.html · handoff/policy-watch-3yr.md" },
        { name: "IR 1페이저·타당성 보고서·GTM readout·6/25 경영진 보고", product: "공통", status: 100, weight: 1, label: "1차", start: "2026-04-01", end: "2026-06-25", evidence: "output/ir-onepager.html · output/gtm.html · WEEKLY.md 기완료 절" },
        { name: "제로베이스 재검증(환급 실과금전환 3~9%·금융 데이터 레이어로 재정의)", product: "공통", status: 100, weight: 2, label: "1차", start: "2026-06-29", end: "2026-07-31", evidence: "output/backwon-research/backwon-zero-base-report.html" },
        { name: "수요·페인 현장검증 인터뷰(기업·행정사·근로자)", product: "공통", status: 75, weight: 2, label: "추정", start: "2026-07-06", end: "2026-08-21", evidence: "WEEKLY.md 7/6주 — 인터뷰 결과 산출물 미확인" },
        { name: "지불의사(WTP) 실증 → 가격 전면 재설계 3.9/7.9/14.9만원", product: "VisaDesk", status: 100, weight: 2, label: "1차", start: "2026-07-13", end: "2026-08-07", evidence: "output/backwon-research/34-visadesk-erp-bridge-low-price-service-replan.md" },
        { name: "규제·운영 레드라인 조문 실측·대외 표현 대체표", product: "공통", status: 100, weight: 1, label: "1차", start: "2026-07-27", end: "2026-08-07", evidence: "output/backwon-research/22-edge-services-regulatory-review.md" },
        { name: "금융연계 수익모델·필요 고객수 역산(대출 매출 모델 v0.06)", product: "BackWon", status: 100, weight: 1, label: "1차", start: "2026-07-20", end: "2026-08-10", evidence: "output/backwon-research/외국인대출_매출매트릭스 v0.06 · 41/42 시뮬레이션" },
        { name: "MVP 범위 동결서 v1(화면 목록·데이터 사전·동의 항목·제외 범위표)", product: "공통", status: 75, weight: 3, label: "추정", start: "2026-07-20", end: "2026-08-21", evidence: "output/backwon-research/16-backwon-user-flow-refund-finance-functional-spec.md — 동결 선언 문서 미확인" },
        { name: "MVP 착수 게이트: 5축 점수표 갱신·GO 판정·30/60/90일 실행계획", product: "공통", status: 0, weight: 3, label: "목표·가정", start: "2026-08-17", end: "2026-08-21", evidence: "예정 — output/feasibility-gate.html 갱신 + GO/NO-GO 메모" },
      ],
    },
    {
      /* 기간 [목표·가정]: 8/17 게이트 통과 전제 */
      /* '26.8.20 재배치: 하반기 주력이 전자등기·감정평가라 외국인 MVP 는 병렬 트랙으로 9~11월에 굴린다.
         릴리스 마감선 11월 말 → 12~2월 PoC → '27.3 go/no-go (경영진 발표본 v3.31 로드맵) */
      id: "G2", name: "VisaDesk MVP (B2B 준법관리)", period: "2026-09-01 ~ 11-20",
      start: "2026-09-01", end: "2026-11-20", weight: 20,
      note: "데모(약 20화면) → 실데이터 MVP 승격. 범위: 원장·예외관리·알림·월간 리포트. 스택 Next.js+Supabase+Tailwind.",
      tasks: [
        { name: "랜딩·셀프 체크·대시보드 데모(약 20화면) 라이브", product: "VisaDesk", status: 75, weight: 2, label: "1차", start: "2026-06-01", end: "2026-08-13", evidence: "https://plugnx-visaops.netlify.app — 샘플 데이터 기반 데모 수준" },
        { name: "앱 기반 구성: Supabase 스키마·인증·역할권한·스테이징 배포", product: "VisaDesk", status: 25, weight: 3, label: "추정", start: "2026-09-01", end: "2026-09-21", evidence: "webapp 저장소 존재 — MVP용 DB·인증 구현 미확인" },
        { name: "기업 계정·사업장 정보·담당자 온보딩", product: "VisaDesk", status: 25, weight: 2, label: "추정", start: "2026-09-12", end: "2026-10-04", evidence: "데모 화면만 존재 — 실데이터 저장 미구현" },
        { name: "근로자 원장 + 표준 Excel/CSV 이관(무료 이관 정책)", product: "VisaDesk", status: 25, weight: 3, label: "추정", start: "2026-09-12", end: "2026-10-20", evidence: "이관 정책 확정(PROJECT.md) — 업로드·매핑 구현 미착수" },
        { name: "준법 예외 룰 v1(체류·여권·계약·서류 만료/누락) + 알림 센터", product: "VisaDesk", status: 25, weight: 3, label: "추정", start: "2026-09-28", end: "2026-11-04", evidence: "룰 정의 문서 존재 — 룰 엔진·알림 발송 미구현" },
        { name: "월간 리스크 리포트 생성·공유 + 전문가 확인 티켓·운영자 화면", product: "VisaDesk", status: 0, weight: 2, label: "목표·가정", start: "2026-10-13", end: "2026-11-13", evidence: "예정" },
        { name: "QA: 핵심 여정·권한·테넌트 데이터 격리 테스트 → MVP 릴리스", product: "VisaDesk", status: 0, weight: 2, label: "목표·가정", start: "2026-11-04", end: "2026-11-20", evidence: "예정 — 헤드리스 브라우저 실행 확인 포함" },
      ],
    },
    {
      id: "G3", name: "BackWon MVP (B2C 환급·급여 셀프체크)", period: "2026-09-01 ~ 11-27",
      start: "2026-09-01", end: "2026-11-27", weight: 16,
      note: "환급·급여 셀프체크는 동의·데이터 획득 입구. 대행 수수료 0원, 근로자에게 받는 돈 없음.",
      tasks: [
        { name: "리브랜딩 소스(moneeback→BackWon) 스테이징 재배포", product: "BackWon", status: 25, weight: 1, label: "추정", start: "2026-09-01", end: "2026-09-19", evidence: "소스 개명 완료('26.7.31) — 라이브 재배포 미실행" },
        { name: "VisaDesk 근로자 초대 링크·다국어 온보딩(1차 3개 언어)·동의 화면", product: "BackWon", status: 25, weight: 2, label: "추정", start: "2026-09-11", end: "2026-10-16", evidence: "기존 프로토타입 다국어 일부 — 초대 퍼널 미구현" },
        { name: "환급 셀프 체크(연금 반환일시금·퇴직금·출국만기·귀국비용) 추정 로직", product: "BackWon", status: 40, weight: 3, label: "추정", start: "2026-09-01", end: "2026-10-24", evidence: "moneeback 프로토타입 계산 로직 존재 — 4항목 통합·최신 요율 반영 남음" },
        { name: "출국정산 체크리스트·준비서류·공식기관(공단·고용센터) 링크", product: "BackWon", status: 25, weight: 2, label: "추정", start: "2026-09-25", end: "2026-10-30", evidence: "backwon-refund skill 지식 존재 — 화면 미구현" },
        { name: "급여 적정성 셀프 체크(계약·공제 입력 기반 차이 안내)", product: "BackWon", status: 0, weight: 2, label: "목표·가정", start: "2026-10-09", end: "2026-11-13", evidence: "예정" },
        { name: "금융 준비도·목적별 동의 흐름(동의 증적 저장)", product: "BackWon", status: 0, weight: 2, label: "목표·가정", start: "2026-10-24", end: "2026-11-21", evidence: "예정 — 신용점수 자체 산출 금지 경계 준수" },
        { name: "VisaDesk 연계 전환 이벤트(초대→가입→체크) 계측·집계 대시보드", product: "BackWon", status: 0, weight: 1, label: "목표·가정", start: "2026-10-24", end: "2026-11-21", evidence: "예정" },
        { name: "QA: 다국어·모바일·금지표현 점검 → MVP 릴리스", product: "BackWon", status: 0, weight: 2, label: "목표·가정", start: "2026-11-13", end: "2026-11-27", evidence: "예정 — 22-edge-services-regulatory-review.md 표현 대체표 전수 점검" },
      ],
    },
    {
      id: "G4", name: "ForeignID L1·공통 데이터·보안", period: "2026-09-08 ~ 11-27",
      start: "2026-09-08", end: "2026-11-27", weight: 13,
      note: "MVP 범위는 L1(여권+셀카)+운영자 확인까지. L2·L3, 금융거래 인증은 MVP 제외.",
      tasks: [
        { name: "L1 여권·셀카 업로드 + OCR 기본 필드 추출", product: "ForeignID", status: 25, weight: 3, label: "추정", start: "2026-09-08", end: "2026-10-23", evidence: "설계 문서만 존재(.claude/skills/foreignid-auth) — 구현 미착수" },
        { name: "운영자 확인·재요청·상태 이력(수동 검수 큐)", product: "ForeignID", status: 0, weight: 2, label: "목표·가정", start: "2026-10-09", end: "2026-11-13", evidence: "예정" },
        { name: "공통 데이터 모델·데이터 사전(기업·근로자·서류·체류·체크결과)", product: "공통", status: 25, weight: 3, label: "추정", start: "2026-09-08", end: "2026-10-15", evidence: "설계 산출물 존재 — DB 스키마 구현 미확인" },
        { name: "동의센터: 목적·기관·필드·기간별 동의와 철회 이력", product: "공통", status: 0, weight: 2, label: "목표·가정", start: "2026-10-09", end: "2026-11-13", evidence: "예정" },
        { name: "개인정보·보안 통제(최소수집·마스킹·암호화·역할별 접근·감사로그·파기)", product: "공통", status: 0, weight: 2, label: "목표·가정", start: "2026-10-23", end: "2026-11-27", evidence: "예정 — 보안 체크리스트·권한표·보관/파기 정책" },
        { name: "리드 API·전환 퍼널 이벤트(Slack·Resend)", product: "공통", status: 75, weight: 1, label: "1차", start: "2026-07-01", end: "2026-08-13", evidence: "/api/lead 라이브 — 이벤트 3종 가동" },
        { name: "공통 ID 연동(VisaDesk↔BackWon 초대·동의 상태) + 장애 대응 런북", product: "공통", status: 0, weight: 2, label: "목표·가정", start: "2026-10-23", end: "2026-11-27", evidence: "예정" },
      ],
    },
    {
      /* '26.8.20 재정의: 파일럿 8주 → PoC 3개월('26.12~'27.2). 목적은 「인당 수익 > CAC」를 실측으로 보이게 하는 것. */
      id: "G5", name: "PoC 3개월 — CAC 실측과 은행 텀시트", period: "2026-12-01 ~ 2027-02-26",
      start: "2026-12-01", end: "2027-02-26", weight: 15,
      note: "MVP 릴리스(11월 말) 직후 석 달. 게이트는 ① 혼합 CAC 실측 ② 은행 정액 텀시트 1건. 둘 다 '27.3 go/no-go 의 입력값이다.",
      tasks: [
        { name: "채널 태깅 계측 — 동의 완료 이벤트에 channel_source 부착", product: "공통", status: 0, weight: 3, label: "목표·가정", start: "2026-12-01", end: "2026-12-18", evidence: "예정 — 채널별 CAC 실측의 전제. 지금 계수는 전부 실측 0" },
        { name: "저단가 3채널 가동(BackWon B2C·고용주 무료 배포·공공 벌크)", product: "공통", status: 0, weight: 3, label: "목표·가정", start: "2026-12-01", end: "2027-02-12", evidence: "예정 — 목표 믹스 4,415원의 성립 조건 ①②③" },
        { name: "공공·대학 계약 2건(계약 1건당 480~800명)", product: "공통", status: 0, weight: 2, label: "목표·가정", start: "2026-12-01", end: "2027-02-12", evidence: "예정 — 조달 담당 1명 배치가 선행" },
        { name: "은행 백테스트 표본 협의 → 8주 백테스트 착수", product: "BackWon", status: 0, weight: 3, label: "목표·가정", start: "2026-12-01", end: "2027-02-19", evidence: "예정 — output/pptx/PlugNX_은행제안_외국인신용신호_v0.2 제안서 기준" },
        { name: "정액 텀시트 1건 수령(조회·검증 건수·계정·기간 기준)", product: "공통", status: 0, weight: 3, label: "목표·가정", start: "2027-01-05", end: "2027-02-26", evidence: "예정 — 실행 연동 항목은 등록 전까지 계약에 넣지 않는다" },
        { name: "혼합 CAC·전환율 집계 리포트(주 단위)", product: "공통", status: 0, weight: 2, label: "목표·가정", start: "2026-12-14", end: "2027-02-26", evidence: "예정 — go/no-go 판정의 1차 자료" },
      ],
    },

    {
      /* '26.8.20 재정의: 정식 가동은 go 판정 이후로 미룬다. no-go 면 신호 사업만 남기고 대출 트랙을 접는다. */
      id: "G6", name: "go / no-go 판정과 정식 가동", period: "2027-03-02 ~ 2027-03-31",
      start: "2027-03-02", end: "2027-03-31", weight: 8,
      note: "판정 기준은 「인당 수익 > CAC 가 실측으로 보이는가」 하나. go 면 요금제·도메인·운영체계로, no-go 면 신호 사업만 남긴다.",
      tasks: [
        { name: "PoC 결과 종합 — 인당 수익 대 CAC 실측 대조표", product: "공통", status: 0, weight: 3, label: "목표·가정", start: "2027-03-02", end: "2027-03-12", evidence: "예정 — 기준선: 목표 믹스 CAC 4,415원 · 대출 밖 출구 포함 인당 수익" },
        { name: "go / no-go 결정 회의(대표 판정)", product: "공통", status: 0, weight: 3, label: "목표·가정", start: "2027-03-16", end: "2027-03-20", evidence: "예정 — no-go 시 대출 트랙 종료·신호 사업 존치" },
        { name: "go 경로: 요금제 3.9/7.9/14.9만원 구독·결제 가동", product: "VisaDesk", status: 0, weight: 2, label: "목표·가정", start: "2027-03-23", end: "2027-03-31", evidence: "예정" },
        { name: "go 경로: BackWon 도메인 전환·정식 배포·운영체계", product: "BackWon", status: 0, weight: 2, label: "목표·가정", start: "2027-03-23", end: "2027-03-31", evidence: "예정 — moneeback → BackWon" },
      ],
    },
    {
      /* '26.8.20 신설: bp 수취 조건인 금소법 §12① 등록과, 모수를 확정할 자료 확보 트랙. */
      id: "G7", name: "라이선스 · 규제 · 데이터 확정", period: "2026-09-01 ~ 2027-03-31",
      start: "2026-09-01", end: "2027-03-31", weight: 10,
      note: "등록은 조건부(연환산 1,500건)로 착수한다. 등록 전에는 실행과 무관한 기준(조회·검증 건수·계정·기간)으로만 과금한다.",
      tasks: [
        { name: "신용정보원 정보공개청구(명/건 구분·신용/담보·업권별·연도별)", product: "공통", status: 0, weight: 2, label: "목표·가정", start: "2026-09-01", end: "2026-09-15", evidence: "예정 — 침투율 8.1%·은행권 신용 1.0조의 [추정] 라벨을 [1차]로 올리는 경로" },
        { name: "'20.6 원 보고서 PDF 확보(웹 목록 404 — 유선)", product: "공통", status: 0, weight: 1, label: "목표·가정", start: "2026-08-24", end: "2026-08-31", evidence: "예정" },
        { name: "유권해석 4문항 접수(외고법 §27④·행정사법·직안법 §23①·전자금융보조업자)", product: "공통", status: 0, weight: 2, label: "목표·가정", start: "2026-09-01", end: "2026-09-30", evidence: "예정 — 회신 전에는 어느 문서에도 「규제 안전」을 단정하지 않는다" },
        { name: "금소법 §12① 등록 요건 정비(보증금·인력 2인·교육 24~48h·고정사업장)", product: "공통", status: 0, weight: 2, label: "목표·가정", start: "2026-09-01", end: "2026-10-30", evidence: "예정 — 연 유지비 1.62억 [추정]" },
        { name: "등록 신청 → 심사 [조건부 — 연환산 1,500건 관측 시 착수]", product: "공통", status: 0, weight: 2, label: "목표·가정", start: "2026-11-02", end: "2027-03-31", evidence: "예정 — 소요 5~9개월 [추정]. 텀시트는 등록 완료를 정지조건으로 서명" },
        { name: "정액 과금 산정 기준 문서화(실행 건수·금액 미사용·사후 정산 금지)", product: "공통", status: 0, weight: 1, label: "목표·가정", start: "2026-09-01", end: "2026-10-16", evidence: "예정 — output/pitch-ideas/03-fee-registration-path.md" },
      ],
    },
  ],
};
