import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Language = 'ko' | 'en'

interface TranslationTree {
  [key: string]: string | TranslationTree
}

interface LanguageStore {
  language: Language
  setLanguage: (lang: Language) => void
  fontFamily: string
  translations: {
    [key in Language]: TranslationTree
  }
}

export function getTranslation(obj: TranslationTree, path: string): string {
  const keys = path.split('.')
  let current: any = obj

  for (const key of keys) {
    if (typeof current !== 'object' || current === null || !(key in current)) {
      return ''
    }
    current = current[key]
  }

  return typeof current === 'string' ? current : ''
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: 'en',
      fontFamily: 'en',
      setLanguage: (lang) =>
        set({
          language: lang,
          fontFamily: lang === 'ko' ? 'ko' : 'en',
        }),
      translations: {
        ko: {
          greeting: '안녕하세요!',
          home: {
            intro1:
              '<p><span className="font-medium">세상 어디에서든 좋아하는 일을 하며 살아가는 것.</span></p><p>그 목표를 향해 배우고, 만들고, 기록하는 것을 좋아하는 개발자 - <span className="font-medium">김다희</span>입니다.</p>',
            intro2:
              '<p>저는 <b className="font-medium">좋은 개발자는 결국 좋은 문제 해결사</b>라고 생각합니다.</p><p>그래서 새로운 기술뿐 아니라 <b className="font-medium">사람, 경험, 생각</b>을 배우는 일도 중요하게 여기고 있습니다.</p><p>이 블로그는 제가 배우고, 만들고, 실패하고, 또다시 배우며 얻은 기록들을 차곡차곡 남기는 공간입니다.</p><p>제가 남긴 기록들이 누군가의 다음 시작에 작은 영감이 된다면 그것만으로도 제게는 충분히 의미가 있을 것 같습니다. ✨</p><p>그럼 천천히 둘러보시고, 편하게 읽어주세요! 😊</p>',
            intro3: '오늘도 멋진 하루 보내세요',
            typedbios:
              '<li>제가 처음 코딩을 시작한 언어는 <b className="font-medium">C</b>예요.</li><li>저는 스트레스를 <b className="font-medium">수영, 모델수업, 댄스, 여행</b>으로 풀어요!</li><li>고양이를 사랑하지만, 고양이 알러지가 있어요😿.</li><li>책을 좋아해 독서모임📚 활동을 한지 꽤 오래되었어요!</li>',
            links1: '나의 프로젝트들',
            links2: '내가 쓴 게시글들',
            links3: '코드 스니펫 모음',
            links4: '작가 및 블로그 소개',
            links5: '방문자 통계 및 인사이트',
            popularTags: '자주 찾는 주제',
            popularTagsIntro: '많은 관심을 받은 주제들을 아래에서 확인할 수 있어요 🤠',
            latestPosts: '최근 ',
            latestPosts2: '게시글',
            latestPosts3: '코드 스니펫',
            latestPosts4: '모든 ',
            noPostsFound: '아직 작성된 게시글이 없어요.',
            noSnippetsFound: '아직 작성된 코드 스니펫이 없어요.',
          },
          navbar: {
            more: '더 보기',
          },
          footer: {
            intro:
              '배우고, 만들고, 실패하고, 또다시 배우는 과정을 기록합니다. 이곳의 기록이 누군가에게 작은 도움이 되었으면 좋겠습니다.',
            location: '인천, 대한민국',
            sitemap: '사이트 맵',
            sitemap1: '블로그',
            sitemap2: '코드 스니펫',
            sitemap3: '프로젝트',
            sitemap4: '태그 목록',
            sitemap5: 'RSS 피드',
            personal: '개인 콘텐츠',
            personal1: '자기소개',
            personal2: '이력서 보기',
            personal3: '읽은 책',
            personal4: '본 영화',
            personal5: '사이트 통계',
          },
          blog: {
            title: '전체 게시글 목록',
            detail:
              '저와 개발의 세계를 함께 탐험해요! 😄<br />제가 공유하는 글은 다음과 같은 주제들이 담겨 있어요:<br />자주 발생하는 오류 해결법🐞, 핵심 프로그래밍 개념✅, 최신 기술 뉴스📫, 실용적인 튜토리얼과 사용법🔦, 툴 리뷰 및 추천⚒️, 학습 자료 소개✒️<br />🔍제목, 내용, 태그로 검색하거나 아래 목차를 둘러보며 원하는 정보를 찾아보세요.',
            searchArticles: '게시글 찾기...',
            previous: '이전',
            next: '다음',
            categories: '목차',
            categoriesClearAll: '모두 선택 취소',
            categories1: '프로그래밍 언어',
            categories2: '프론트엔드',
            categories3: '백엔드',
            categories4: '데이터베이스',
            categories5: 'DevOps & 인프라',
            categories6: '테스트',
            categories7: '컴퓨터 과학 & 기초 지식',
            categories8: '도구 & 개발 환경',
            categories9: '기술 뉴스 & 트렌드',
            categories10: 'AI',
          },
          snippets: {
            title: '스니펫 모음',
            description:
              '<p>이곳은 제가 자주 사용하는, 간편하고 효율적인 코드 스니펫들을 모아놓은 공간입니다. 필요한 건 마음껏 가져가서, 여러분의 스타일에 맞게 수정하고 활용해보세요.</p>',
          },
          projects: {
            title: '프로젝트',
            description:
              '제가 직접 개발한 풀스택 웹 애플리케이션들을 소개합니다. 각 프로젝트는 실제로 배포되어 있거나, 미리보기와 소스 코드가 함께 제공됩니다.',
            portfolio: '포트폴리오 둘러보기',
            work: '직장',
            sideProjects: '사이드 프로젝트',
            thinkstormTitle: 'ThinkStorm (작업 진행 중)',
            thinkstormDescription:
              '글로벌 개발자들이 팀을 이루고 실제 프로젝트를 진행하며 실력을 키울 수 있도록 돕는 풀스택 협업 플랫폼입니다. 저는 풀스택 개발자로 참여해, 백엔드에서는 Redis 기반 캐싱/요청 제한 시스템과 JWT 인증, CI/CD 파이프라인을 설계·구축했고, 프론트엔드에서는 React/Next.js 기반 SPA를 구축하며 Redux, TanStack Query, Zustand로 상태 관리 아키텍처를 설계했습니다.',
            natoursTitle: 'Natours',
            natoursDescription:
              '결제 기능, 지도 기반 탐색, 여행 예약 대시보드, 트랜잭션 이메일 등을 갖춘 친환경 여행 예약 시스템입니다. 프론트엔드부터 백엔드까지 전체를 혼자 설계하고 구현한 개인 프로젝트입니다.',
            weddingyouTitle: 'Wedding You',
            weddingyouDescription:
              '고객과 플래너 매칭, 안전한 결제, 실시간 업데이트, 클라우드 호스팅을 지원하는 웨딩 플래닝 플랫폼입니다. 팀 프로젝트 리더이자 풀스택 개발자로 참여해 기획부터 배포까지 전 과정을 이끌었습니다.',
            netflixTitle: 'Netflix And Chill',
            netflixDescription:
              'Netflix에서 영감을 받은 스트리밍 플랫폼으로, 역할 기반 인증, 관리자 대시보드, docker 기반 백엔드, 영화 탐색 기능을 갖추고 있습니다. 팀 프로젝트 리더이자 풀스택 개발자로 참여해 프론트엔드와 백엔드 전반을 직접 개발했습니다.',
            wetubeTitle: 'Wetube',
            wetubeDescription:
              'GitHub OAuth 로그인, 실시간 댓글, AWS S3 기반의 영상 업로드 및 재생 기능을 제공하는 YouTube 스타일의 영상 공유 사이트입니다. 프론트엔드와 백엔드를 모두 혼자 구현한 개인 프로젝트입니다.',
            forkifyTitle: 'Forkify',
            forkifyDescription:
              '실시간 검색, 즐겨찾기, 인분 조절 기능이 있는 미니멀한 프론트엔드 레시피 검색 애플리케이션입니다. 바닐라 자바스크립트로 UI와 상태 관리 로직을 직접 설계한 개인 프로젝트입니다.',
            learnMore: '더 알아보기',
            builtWith: '기술 스택',
          },
          about: {
            title: '소개',
            description:
              '안녕하세요! 이곳은 제가 어떤 사람인지, 어떤 생각을 하며 개발을 하고 있는지, 그리고 이 블로그를 시작하게 된 이야기를 담은 공간입니다. 편하게 둘러보시면서 "이런 사람이 이런 글을 쓰고 있구나." 정도로 가볍게 읽어주시면 좋겠습니다.',
            greeting1: '안녕하세요',
            greeting2: '제 이름은 김다희입니다.',
            intro1:
              '저는 <b className="font-medium">사용자에게 더 좋은 경험을 만드는 일</b>을 좋아하는 소프트웨어 엔지니어입니다. <b className="font-medium">프론트엔드와 백엔드</b> 모두 즐겨 개발하며, 새로운 기술을 배우고 직접 만들어보는 과정을 가장 재미있게 생각합니다. 특히 <b className="font-medium">AI가 사람의 언어를 이해하고 컴퓨터와 연결하는 방식</b>에 큰 흥미를 가지고 있습니다.',
            intro2:
              '제가 개발을 시작한 계기는 조금 특별합니다. 원래 <b className="font-medium">영문학을 전공</b>하면서 언어를 배우면 세상을 바라보는 시야가 넓어지고, 더 많은 사람들과 소통할 수 있다는 점에 큰 매력을 느꼈습니다. 그러다 자연스럽게 "<b className="font-medium">언어의 장벽을 기술로 줄일 수 없을까?</b>"라는 궁금증이 생겼고, 언어와 컴퓨터를 연결하는 프로그램을 직접 만들어 보고 싶다는 생각으로 코딩을 시작하게 되었습니다. 그렇게 <b className="font-medium">2017년부터 개발을 공부</b>하기 시작했고, 지금은 사람들에게 도움이 되는 서비스를 만드는 개발자로 성장해가고 있습니다.',
            intro3:
              '최근에는 <b className="font-medium">퓨렌스에서 LG U+ 녹취 시스템 백엔드 개발</b>에 참여하며 실무 경험을 쌓았고, <b className="font-medium">MCP를 활용한 AI 서비스 개발자 양성과정</b>에서 팀 리더와 백엔드·MCP 서버 개발을 맡아 프로젝트를 진행했습니다. AI와 웹 기술을 함께 활용하는 개발에 관심이 많으며, 지금도 <b className="font-medium">Next.js, Nest.js, DevOps, 시스템 설계</b> 등을 꾸준히 공부하며 더 나은 서비스를 만드는 방법을 고민하고 있습니다.',
            intro4:
              '이 블로그는 제가 <b className="font-medium">배우고, 만들고, 고민하고, 때로는 실패하면서</b> 얻은 경험들을 기록하는 공간입니다. 글을 쓰는 과정에서 생각을 정리하고 배운 내용을 오래 기억할 수 있었고, <b className="font-medium">같은 고민을 하는 개발자들에게도 작은 도움</b>이 되었으면 하는 마음으로 하나씩 기록을 남기고 있습니다.',
            intro5:
              '혹시 글을 읽으며 궁금한 점이나 함께 이야기하고 싶은 주제가 있다면 언제든 편하게 댓글을 남겨주세요. 😊',
            mycareer: '경력',
            resume: '이력서',
            aiProgramCareerOrg: '디엠씨코넷',
            aiProgramCareerStart: '4월 2026',
            aiProgramCareerEnd: '7월 2026',
            aiProgramCareerTitle: 'MCP를 활용한 AI 서비스 개발자 양성과정',
            aiProgramCareerDetail:
              '<li><strong>프롬프트 엔지니어링</strong> 학습</li><li><strong>LangChain 기반 LLM 애플리케이션</strong> 개발</li><li><strong>RAG 기반 문서 검색 챗봇</strong> 구현</li><li><strong>FastAPI 기반 AI 백엔드</strong> 개발</li>',
            furenceCareerOrg: '퓨렌스',
            furenceCareerStart: '11월 2025',
            furenceCareerEnd: '1월 2026',
            furenceCareerTitle: '백엔드 개발자',
            furenceCareerDetail:
              '<li><strong>백엔드 아키텍처 및 보안</strong>: LG U+ 녹취 시스템 대상 백엔드 아키텍처 설계 및 사용자/권한 검증 로직 구현으로 시스템 보안성 강화</li><li><strong>대용량 파일 처리 파이프라인</strong>: TUS 기반 대용량 오디오 업로드 및 파일 처리 파이프라인 구축으로 안정적인 파일 처리 환경 구현</li><li><strong>REST API 개발 및 신뢰성 향상</strong>: 녹취 이력 관리 REST API 설계 및 메타데이터 검증 로직 구현, 예외 처리 구조 개선을 통한 시스템 안정성 향상</li><li><strong>AI 컨택센터 및 STT 연동</strong>: STT 기반 콜 처리 워크플로우 및 AI 컨택센터 기능 개발 지원, 제품팀 협업을 통한 보안 및 규정 준수 대응</li>',
            thinkstormCareerOrg: 'Thinkstorm',
            thinkstormCareerStart: '3월 2024',
            thinkstormCareerEnd: '10월 2025',
            thinkstormCareerTitle: '풀스택 개발자',
            thinkstormCareerDetail:
              '<li><strong>백엔드 아키텍처 설계</strong>: Nest.js 기반 백엔드 구조 설계 및 REST API 아키텍처 구현, 유지보수성과 확장성을 고려한 서버 구조 설계</li><li><strong>API 최적화 및 Rate Limiting</strong>: Redis 캐싱 및 Rate Limiting 구조 적용을 통한 API 응답 성능 개선 및 트래픽 안정성 강화</li><li><strong>인증 및 보안 강화</strong>: JWT 기반 인증/인가 시스템 구축 및 GitHub Actions/Docker 환경 기반 보안 관리 체계 구성</li><li><strong>DevOps 및 배포 자동화</strong>: Jest 테스트 환경 및 CI/CD 파이프라인 설계를 통한 배포 자동화 및 운영 안정성 개선</li><li><strong>프론트엔드 아키텍처 설계</strong>: React/Next.js 기반 SPA 구축 및 Redux, TanStack Query, Zustand 기반 상태 관리 구조 설계</li><li><strong>협업 프로세스 개선</strong>: 신규 개발자 온보딩 및 협업 프로세스 개선을 통한 프로젝트 적응 속도 향상</li>',
            sherpasoftCareerOrg: '셀파 소프트',
            sherpasoftCareerStart: '7월 2023',
            sherpasoftCareerEnd: '3월 2024',
            sherpasoftCareerTitle: '풀스택 개발자',
            sherpasoftCareerDetail:
              '<li><strong>내부 시스템 개선을 주도하여 회의 시간을 </strong>주간 4시간 → 1시간으로 단축. <strong>월 210 인력시간</strong> 절감</li><li>대규모 데이터 처리를 위한 <strong>Kafka 및 ActiveMQ 리서치 및 발표</strong>, 결과적으로 <strong>ActiveMQ</strong> 도입</li><li>다양한 팀과 협업하여 <strong>상충되는 요구사항 조율</strong> 및 솔루션 도출</li><li>대기업 고객사를 대상으로 하여 <strong>Java, Spring Boot, JSP</strong>를 활용한 데이터베이스 모니터링 시스템 개발</li><li><strong>PostgreSQL, Oracle, MySQL, MongoDB, MariaDB, SAP HANA</strong> 등 다양한 DB 사용</li><li><strong>리눅스 서버 환경 관리</strong> 및 성능 최적화</li>',
            allraFinTechCareerOrg: '올라 핀테크',
            allraFinTechCareerStart: '6월 2023',
            allraFinTechCareerEnd: '7월 2023',
            allraFinTechCareerTitle: '풀스택 개발자 인턴',
            allraFinTechCareerDetail:
              '<li><strong>결제 시스템 기능 개발</strong>: JSP 및 Spring Data JPA 기반 결제 시스템 기능 개발 및 유지보수 경험</li><li><strong>애자일 개발 경험</strong>: 1개월 단위 스프린트 환경에서 기능 개발 및 협업 경험 수행</li><li><strong>엔터프라이즈 아키텍처 학습</strong>: 시니어 개발자 코드 리뷰 및 피드백 기반 실무 아키텍처 패턴 학습</li>',
            multiCampusCareerOrg: '멀티캠퍼스 - 풀스택 개발자 부트캠프',
            multiCampusCareerStart: '1월 2023',
            multiCampusCareerEnd: '6월 2023',
            multiCampusCareerTitle: '학생',
            multiCampusCareerDetail:
              '<li>넷플릭스 클론 앱인 <a target="_blank" href="https://net-flix-clone-dahee-kim.netlify.app/"><strong>Netflix And Chill</strong> 개발</a>(Full-Stack Developer)</li><li>웨딩 플래너 웹앱 <a target="_blank" href="https://weddingyou-dahee-kim.netlify.app/"><strong>Wedding You</strong> 개발</a>(Full-Stack Developer)</li><li>최신 기술을 적용하여 <strong>애플리케이션 리팩토링</strong> (최근)</li><li><strong>두 개의 팀 프로젝트 리더</strong>로서 일정 관리 및 협업 주도</li><li><strong>React, Java, and Spring</strong>에 대한 멘토링 제공으로 팀 역량 향상</li>',
            samsungSDSCareerOrg: '삼성 SDS',
            samsungSDSCareerStart: '3월 2022',
            samsungSDSCareerEnd: '4월 2022',
            samsungSDSCareerTitle: '글로벌 소프트웨어 무역 인턴',
            samsungSDSCareerDetail:
              '<li>호주의 <strong>IT 기반 물류 및 이커머스 트렌드 리서치 및 분석</strong></li><li><strong>AI 및 물류 솔루션</strong>에 대한 조사</li><li>삼성 SDS의 <strong>물류 관리 시스템</strong>에 대한 이해</li><li><strong>소비자 행동, 온라인 플랫폼, 풀필먼트 서비스</strong>에 대한 데이터 분석</li><li><strong>무역 자동화 및 실시간 추적 시스템</strong> 연구</li>',
            incheonNationalUniversityCareerOrg: '인천 대학교',
            incheonNationalUniversityCareerStart: '3월 2017',
            incheonNationalUniversityCareerEnd: '2월 2023',
            incheonNationalUniversityCareerTitle:
              '인천대학교 학생 (영문학 & 전자공학 & 컴퓨터공학)',
            incheonNationalUniversityCareerDetail:
              '<li><strong>영문학과 수석 졸업</strong>, 인문학 학장상 수상 (GPA 4.2/4.5)</li><li>KH Coder를 활용한 <strong>코퍼스 데이터 분석 조교</strong>로 활동</li><li>컴퓨터공학 심화과정 이수, <strong>복수전공 수준의 이론 습득</strong></li><li><strong>APYE(아시아태평양청년교류) 대회 우승</strong>, 다문화 아동을 위한 <strong>문화 교류 앱</strong> 개발</li>',
            techstack: '기술 스택',
            techstackDetail:
              '<p>이 블로그는 <a href="https://vercel.com/" target="_blank">Vercel</a>에 호스팅되어 있으며, <a href="https://nextjs.org/" target="_blank">Next.js</a>와 <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>로 제작되었고, <strong>Tailwind Nextjs Starter Blog</strong>를 기반으로 개발되었습니다.</p><p>이 블로그의 <a href="https://github.com/kimdahee0815/kimdahee0815.github.io" target="_blank">Github 저장소</a>도 확인해 보세요.</p>',
            assets: '출처',
            assetsDetail1:
              '블로그에 사용된 대부분의 이미지는 <a href="https://unsplash.com/" target="_blank">Unsplash</a>에서 가져왔고, gif는 <a href="https://giphy.com/" target="_blank">GIPHY</a>, 일러스트는 <a href="https://storyset.com/" target="_blank">Storyset</a>에서 가져왔습니다.',
            assetsDetail2: '무료 리소스들을 사용할 수 있게 해주셔서 감사드립니다',
            contact: '연락처',
            contactDetail:
              '저에게 연락하고 싶으시다면 <a href="mailto:kimdahee0815@gmail.com">kimdahee0815@gmail.com</a>로 메일을 보내주시거나, 아래 SNS로 연락 주세요:',
          },
          books: {
            title: '책 목록',
            description1:
              '<p>책 읽기를 좋아해서 매일 독서 습관을 유지하고 있습니다. 저는 매주 열리는 독서 모임의 활동적인 멤버이기도 해요📚. <br/><br/>예전에는 주로 소설을 읽었지만, 요즘은 특히 논픽션, 기술, 철학 분야에 큰 흥미를 느끼고 있습니다.<br /><br/>이 공간에서는 저의 독서 기록과 앞으로 읽고 싶은 책 목록을 확인하실 수 있어요.</p>',
            description2: '*자료 출처 ',
            description3: 'Goodreads Bookshelf',
            readingTime: '분',
            shelf1: '모든 책들',
            shelf2: '읽는 중...',
            shelf3: '완료',
            shelf4: '그만둔 책',
          },
          movies: {
            title: '영화 목록',
            description1:
              '<p>이곳은 제가 지금까지 본 영화와 시리즈를 기록하는 공간입니다. 저는 크리스토퍼 놀란과 짐 캐리를 정말 좋아해서, 두 사람의 작품이 자주 제 목록 상위에 올라 있어요! <br/>10점 만점을 준 작품은 제가 명작이라고 생각하는 것들이에요. 아마 여러 번 본 영화거나 진심으로 아끼는 작품일 거예요. (강력 추천입니다!)<br/><br/>제가 좋아하는 장르는 판타지, 어드벤처, 추리물이고, SF도 좋아해요. (공포물은 좋아하지 않아요!) 쉴 때는 즉흥적으로 영화관에 가는 게 제 힐링 방법이에요. <br/><br/>한 번 구경해 보세요. 여러분의 다음 인생 영화가 이 안에 있을지도 몰라요! 🤩🎞️🍿</p>',
            description2: '*자료 출처 ',
            description3: 'IMDB ratings list',
            description4: ', 세부 자료 출처 ',
            description5: 'OMDB API',
            rates1: '강력하게 추천해요',
            rates2: '추천해요',
            rates3: '좋아요',
            rates4: '괜찮아요 / 나쁘지 않아요',
            rates5: '별로예요',
            types1: '모든 타입',
            types2: '영화',
            types3: 'TV 시리즈',
          },
          tags: {
            title: '태그 목록',
            description:
              '여기서 모든 태그들을 찾아보실 수 있어요! 😄<br/>🔍태그를 검색하여 원하는 정보를 찾아보세요.',
            searchTags: '태그 찾기...',
            blogs: '게시글',
            snippets: '스니펫',
            notagsFound: '아직 작성된 태그가 없어요.',
            searchDescription: '관련 검색 결과 ',
          },
          notFound: {
            message1: '음... 길을 잃으신 것 같아요.',
            message2: '하지만 걱정 마세요. 제 홈페이지엔 다른 흥미로운 것들이 가득해요!',
            message3: '홈페이지로 돌아가기',
          },
          profile: {
            name: '김다희',
            intro: '스스로 길을 찾는 개발자 | 배움이 일상인 사람 | 호기심 많은 크리에이터',
            title: '풀스택 개발자',
            company: '',
            location: '인천, 대한민국',
          },
        },
        en: {
          greeting: 'Hey, Everyone!',
          home: {
            intro1:
              '<p><span className="font-medium">Living life doing what I love, anywhere in the world.</span></p><p>I\'m <span className="font-medium">Dahee Kim</span>, a developer who loves learning, building, and documenting in pursuit of that goal.</p>',
            intro2:
              '<p>I believe <b className="font-medium">great developers are ultimately great problem solvers.</b></p><p>That\'s why I care not only about learning new technologies, but also about understanding <b className="font-medium">people, experiences, and ideas.</b></p><p>This blog is where I document what I learn, build, break, and discover along the way.</p><p>If something here gives you a new idea or helps you solve a problem, that would make me genuinely happy. ✨</p><p>Thanks for stopping by, and enjoy exploring. 😊</p>',
            intro3: 'Enjoy exploring',
            typedbios:
              '<li>I wrote my first lines of code in <b className="font-medium">C</b>.</li><li>I recharge through <b className="font-medium">swimming, model classes, dancing, and traveling.</b></li><li>I\'m a cat lover with the unfortunate bonus of cat allergies. 😿</li><li>I\'ve been a regular member of a <b className="font-medium">book club</b> for years! 📚</li>',
            links1: 'What have I built?',
            links2: 'My writings',
            links3: 'Snippets collection',
            links4: 'About me & this blog',
            links5: 'Traffic and insights',
            popularTags: 'Popular Tags',
            popularTagsIntro: 'Popular tags feature the most widely favored topics 🤠',
            latestPosts: 'Latest',
            latestPosts2: 'Posts',
            latestPosts3: 'Snippets',
            latestPosts4: 'View all ',
            noPostsFound: 'No Posts Found.',
            noSnippetsFound: 'No Snippets Found.',
          },
          navbar: {
            more: 'More',
          },
          footer: {
            intro:
              'My online notebook documenting the ups and downs of learning to code, with tips and discoveries for other developers.',
            location: 'Incheon, South Korea',
            sitemap: 'Sitemap',
            sitemap1: 'Blog',
            sitemap2: 'Snippets',
            sitemap3: 'Projects',
            sitemap4: 'Tags',
            sitemap5: 'RSS Feed',
            personal: 'Personal Stuff',
            personal1: 'About',
            personal2: 'Resume',
            personal3: 'Books',
            personal4: 'Movies',
            personal5: 'Analytics',
          },
          blog: {
            title: 'All Posts',
            detail:
              'Join me as I explore the world of software development! 😄<br />I share posts on:<br />fixing common errors🐞, core programming concepts✅, latest tech news📫, practical tutorials and how-tos🔦, tool reviews and recommendations⚒️, learning resources✒️.<br />🔍Search by title, content, or tags, or browse categories below to find what you need.',
            searchArticles: 'Search Articles...',
            previous: 'Previous',
            next: 'Next',
            categories: 'Categories',
            categoriesClearAll: 'Clear All',
            categories1: 'Programming Language',
            categories2: 'Frontend',
            categories3: 'Backend',
            categories4: 'Database',
            categories5: 'DevOps & Infra',
            categories6: 'Testing',
            categories7: 'CS & Fundamentals',
            categories8: 'Tools & Env',
            categories9: 'Tech News & Trends',
            categories10: 'AI',
          },
          snippets: {
            title: 'Snippets',
            description:
              '<p>This is where I keep my favorite, easy-to-use code snippets. They\'re all about efficiency and reusability. Go ahead and take what you need, customize it, and put it to work.</p><p className="mt-3 italic">Credit goes to both my own coding sessions and the collaborative spirit of the internet\'s open-source contributors.</p>',
          },
          projects: {
            title: 'Projects',
            description:
              'This is a showcase of full-stack web applications I built. Each project is either fully deployed or presented with a preview and source code.',
            portfolio: 'View Full Portfolio',
            work: 'Work',
            sideProjects: 'Side Projects',
            thinkstormTitle: 'ThinkStorm (Work In Progress)',
            thinkstormDescription:
              'Full-stack collaboration platform empowering global developers to team up, build real projects, and grow skills. I worked as a full-stack developer. On the backend, I designed and built Redis-based caching/rate-limiting, JWT authentication, and CI/CD pipelines; on the frontend, I built SPAs with React/Next.js and designed the state management architecture using Redux, TanStack Query, and Zustand.',
            natoursTitle: 'Natours',
            natoursDescription:
              'Eco-tour booking system with payments, map-based exploration, admin dashboard, and transactional email support. A solo project where I designed and built the entire stack, frontend to backend.',
            weddingyouTitle: 'Wedding You',
            weddingyouDescription:
              'Wedding planning platform with client-planner matching, secure payments, real-time updates, and cloud hosting. I led this as team lead and full-stack developer, from planning through deployment.',
            netflixTitle: 'Netflix And Chill',
            netflixDescription:
              'Netflix-inspired streaming platform with role-based auth, admin dashboard, dockerized backend, and movie discovery. I led this as team lead and full-stack developer, building out both the frontend and backend.',
            wetubeTitle: 'Wetube',
            wetubeDescription:
              'YouTube-style video sharing site with video upload/playback, GitHub OAuth login, real-time commenting, and AWS S3 storage. A solo project where I built both the frontend and backend myself.',
            forkifyTitle: 'Forkify',
            forkifyDescription:
              'Minimalist frontend recipe finder with real-time search, bookmarks, and dynamic serving adjustments, built solo with vanilla JavaScript, including all UI and state management logic.',
            learnMore: 'Learn More',
            builtWith: 'Stack',
          },
          about: {
            title: 'About',
            description:
              "Hey there! This is a space where I share who I am, how I think about development, and the story behind why I started this blog. Feel free to look around, and I'd love for you to walk away thinking, 'huh, so this is the person behind these posts.' 😄",
            greeting1: 'Hey, Everyone!',
            greeting2: "I'm Dahee Kim",
            intro1:
              'I\'m a software engineer who loves <b className="font-medium">creating better experiences for users</b>. I enjoy working on both <b className="font-medium">frontend and backend development</b>, and what excites me most is learning new technologies and building things with them. I\'m especially fascinated by <b className="font-medium">how AI understands human language and connects it with computers</b>.',
            intro2:
              'The reason I got into development is a bit unusual. I originally <b className="font-medium">majored in English Literature</b>, drawn to how learning a language broadens your view of the world and lets you connect with more people. From there, I naturally started wondering, "<b className="font-medium">Could technology help close the gap between languages?</b>" That curiosity led me to want to build programs that connect language and computers myself, so I started coding. I <b className="font-medium">began studying development in 2017</b>, and I\'ve been growing ever since into a developer who builds services that genuinely help people.',
            intro3:
              'Most recently, I gained hands-on experience at <b className="font-medium">Furence, working on backend development for LG U+\'s call recording system</b>, and led a team as both team lead and backend·MCP server developer in an <b className="font-medium">AI Service Developer Program with MCP</b>. I\'m especially interested in combining AI with web development, and I\'m continuing to study <strong>Next.js</strong>, <strong>Nest.js</strong>, <strong>DevOps</strong>, and <strong>System Design</strong> as I think about how to build better services.',
            intro4:
              'This blog is where I record what I\'ve <b className="font-medium">learned, built, wrestled with, and sometimes failed at</b> along the way. Writing has helped me organize my thoughts and remember what I\'ve learned for longer, and I hope these posts can be <b className="font-medium">a small help to other developers</b> working through similar questions.',
            intro5:
              "If anything you read here sparks a question or something you'd like to chat about, feel free to leave a comment anytime. 😊",
            mycareer: 'My Career',
            resume: 'Resume',
            aiProgramCareerOrg: 'DMC Conet',
            aiProgramCareerStart: 'Apr 2026',
            aiProgramCareerEnd: 'Jul 2026',
            aiProgramCareerTitle: 'AI Service Developer Program with MCP',
            aiProgramCareerDetail:
              '<li><strong>Prompt engineering</strong></li><li>Building <strong>LLM applications with LangChain</strong></li><li>Implementing a <strong>RAG-based document search chatbot</strong></li><li><strong>AI backend development with FastAPI</strong></li>',
            furenceCareerOrg: 'Furence',
            furenceCareerStart: 'Nov 2025',
            furenceCareerEnd: 'Jan 2026',
            furenceCareerTitle: 'Backend Developer',
            furenceCareerDetail:
              "<li><strong>Backend Architecture & Security:</strong> Designed backend architecture for LG U+'s call recording system and implemented user/permission verification logic, strengthening system security.</li><li><strong>Large-File Processing Pipeline:</strong> Built a large-scale audio upload and processing pipeline based on TUS, enabling stable file handling at scale.</li><li><strong>REST API Development & Reliability:</strong> Designed REST APIs for call recording history management, implemented metadata validation logic, and improved exception handling to strengthen system stability.</li><li><strong>AI Contact Center & STT Integration:</strong> Supported AI contact center features built on an STT-based call processing workflow, collaborating with the product team on security and compliance requirements.</li>",
            thinkstormCareerOrg: 'Thinkstorm',
            thinkstormCareerStart: 'Mar 2024',
            thinkstormCareerEnd: 'Oct 2025',
            thinkstormCareerTitle: 'Full-Stack Developer',
            thinkstormCareerDetail:
              '<li><strong>Backend Architecture Design:</strong> Designed backend structure and REST API architecture on Nest.js, prioritizing maintainability and scalability.</li><li><strong>API Optimization & Rate Limiting:</strong> Applied Redis caching and rate limiting to improve API response performance and strengthen traffic stability.</li><li><strong>Authentication & Security:</strong> Built a JWT-based authentication/authorization system and established a security management process using GitHub Actions and Docker.</li><li><strong>DevOps & Deployment Automation:</strong> Designed a Jest-based testing environment and CI/CD pipeline to automate deployments and improve operational stability.</li><li><strong>Frontend Architecture Design:</strong> Built SPAs with React/Next.js and designed state management architecture using Redux, TanStack Query, and Zustand.</li><li><strong>Collaboration Process Improvement:</strong> Improved onboarding and collaboration processes for new developers, accelerating their ramp-up on the project.</li>',
            sherpasoftCareerOrg: 'Sherpasoft',
            sherpasoftCareerStart: 'Jul 2023',
            sherpasoftCareerEnd: 'Mar 2024',
            sherpasoftCareerTitle: 'Full-Stack Developer',
            sherpasoftCareerDetail:
              '<li><strong>Spearheaded internal system improvements</strong>, reducing weekly meeting time from 4 to 1 hour and saving <strong>210 person-hours monthly</strong>.</li><li>Researched and presented <strong>Kafka and Active MQ implementation</strong> for large scale data processing, resulting in adoption of <strong>ActiveMQ</strong>.</li><li>Collaborated with cross-functional teams to resolve <strong>conflicting requirements</strong> and facilitate consensus based solutions.</li><li>Developed <strong>database monitoring systems</strong> using <strong>Java, Spring Boot, and JSP</strong> for enterprise clients.</li><li>Worked with <strong>PostgreSQL, Oracle, MySQL, MongoDB, MariaDB, SAP HANA</strong>.</li><li>Managed <strong>Linux server environments</strong> for database monitoring and performance optimization.</li>',
            allraFinTechCareerOrg: 'Allra Fin-Tech',
            allraFinTechCareerStart: 'Jun 2023',
            allraFinTechCareerEnd: 'Jul 2023',
            allraFinTechCareerTitle: 'Full-Stack Developer Intern',
            allraFinTechCareerDetail:
              '<li><strong>Payment System Development:</strong> Developed and maintained payment system features using JSP and Spring Data JPA.</li><li><strong>Agile Development Experience:</strong> Developed features and collaborated with the team in a one-month sprint cycle.</li><li><strong>Enterprise Architecture Learning:</strong> Learned practical architecture patterns through senior developer code reviews and feedback.</li>',
            multiCampusCareerOrg: 'MultiCampus - Full Stack Developer Bootcamp',
            multiCampusCareerStart: 'Jan 2023',
            multiCampusCareerEnd: 'Jun 2023',
            multiCampusCareerTitle: 'Student at Multicampus',
            multiCampusCareerDetail:
              '<li>Built <a target="_blank" href="https://net-flix-and-chill.netlify.app/"><strong>Netflix And Chill</strong></a> (Full-Stack Developer)</li><li>Built <a target="_blank" href="https://weddingyou-dahee-kim.netlify.app/"><strong>Wedding You</strong></a> (Full-Stack Developer)</li><li>Refactored both applications by <strong>integrating newly gained knowledge</strong> and <strong>applying best practices</strong> (Recent).</li><li><strong>Led two team projects</strong> as team leader, ensuring timely delivery and collaboration.</li><li><strong>Mentored team members</strong> in <strong>React, Java, and Spring</strong>, boosting team performance.</li>',
            samsungSDSCareerOrg: 'Samsung SDS',
            samsungSDSCareerStart: 'Mar 2022',
            samsungSDSCareerEnd: 'Apr 2022',
            samsungSDSCareerTitle: 'Global Software Logistics Intern',
            samsungSDSCareerDetail:
              '<li>Researched and analyzed <strong>IT-driven logistics and e-commerce trends</strong> in Australia.</li><li>Explored <strong>AI and logistics solutions</strong> for supply chain optimization.</li><li>Developed insights on <strong>warehouse management systems</strong> at Samsung SDS.</li><li>Analyzed data on <strong>consumer behavior</strong>, online platforms, and fulfillment services.</li><li>Studied <strong>automation in warehouse management</strong> and real-time tracking systems.</li>',
            incheonNationalUniversityCareerOrg: 'Incheon National University',
            incheonNationalUniversityCareerStart: 'Mar 2017',
            incheonNationalUniversityCareerEnd: 'Feb 2023',
            incheonNationalUniversityCareerTitle:
              'Student at INU (English Literature & Electronics Engineering & Computer Engineering)',
            incheonNationalUniversityCareerDetail:
              "<li>Graduated <strong>at the top of the department</strong> and received the <strong>Dean's Award for the College of Humanities</strong> (GPA 4.2/4.5)</li><li>Worked as a <strong>Corpus Professor Assistant</strong> using KH Coder for <strong>data analysis</strong>.</li><li>Completed <strong>extensive coursework in Computer Engineering</strong>, effectively equivalent to a double major.</li><li>Won the <strong>APYE (Asia Pacific Youth Exchange)</strong> competition; developed a <strong>cultural exchange app</strong> to help multicultural children in Korea.</li>",
            techstack: 'Tech Stack',
            techstackDetail:
              '<p>This blog is hosted on <a href="https://vercel.com/" target="_blank">Vercel</a>, built with <a href="https://nextjs.org/" target="_blank">Next.js</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> using <strong>Tailwind Nextjs Starter Blog</strong>.</p><p>See my <a href="https://github.com/kimdahee0815/kimdahee0815.github.io" target="_blank">Github repository</a> for this blog.</p>',
            assets: 'Assets',
            assetsDetail1:
              'Most of the images in my blog are from <a href="https://unsplash.com/" target="_blank"> Unsplash</a>, gifs from <a href="https://giphy.com/" target="_blank">GIPHY</a>, and illustrations are from <a href="https://storyset.com/" target="_blank">Storyset</a>.',
            assetsDetail2: 'Thanks for the free resources ',
            contact: 'Contact',
            contactDetail:
              'Reach out to me at <a href="mailto:kimdahee0815@gmail.com">kimdahee0815@gmail.com</a> or find me on social media:',
          },
          books: {
            title: 'Books',
            description1:
              "<p>A lifelong love for books drives my daily reading habit. I'm also a long-time member of a weekly book club 📚. <br/><br/>While novels were once my main focus, these days I'm especially drawn to non-fiction, technology, and philosophy.<br /><br/>Here, you'll find my reading log and my ever-growing \"to-read\" list.</p>",
            description2: '*Data pulled from my ',
            description3: 'Goodreads Bookshelf',
            readingTime: 'mins read',
            shelf1: 'All the Books',
            shelf2: 'Reading...',
            shelf3: 'Complete',
            shelf4: 'Abandoned',
          },
          movies: {
            title: 'Movies',
            description1:
              "<p>This is where I log all the films and series I've seen. Being a big fan of Christopher Nolan and Jim Carrey, their work often tops my list! <br/>A 10-star rating means I consider it an absolute masterpiece, something I've probably seen many times or truly love (consider it a strong recommendation!).<br/><br/>My favorite genres lean towards fantasy, adventure, and detective stories, and I'm always up for sci-fi (but definitely no horror!). When I need to unwind, my go-to is usually a spontaneous trip to the cinema. <br/><br/>Take a look, maybe you'll find your next favorite film! 🤩🎞️🍿</p>",
            description2: '*Data is exported from my ',
            description3: 'IMDB ratings list',
            description4: ', with extra details pulled in from the ',
            description5: 'OMDB API',
            rates1: 'Must Watch',
            rates2: 'Recommended',
            rates3: 'Good',
            rates4: 'Okay / Not Bad',
            rates5: 'Not for Me',
            types1: 'All',
            types2: 'Movie',
            types3: 'TV Series',
          },
          tags: {
            title: 'Tags',
            description:
              'You can find all the tags here! 😄<br/>🔍Use the search below to filter by tags.',
            searchTags: 'Search Tags...',
            blogs: 'Blogs',
            snippets: 'Snippets',
            notagsFound: 'No Tags Found.',
            searchDescription: "Things I've written about ",
          },
          notFound: {
            message1: "Hmm... it looks like you're lost.",
            message2: "But don't worry, you can find plenty of other things on my homepage.",
            message3: 'Back to homepage',
          },
          profile: {
            name: 'Dahee Kim',
            intro: 'Self-Taught Developer | Learner | Creator',
            title: 'Full-Stack Developer',
            company: '',
            location: 'Incheon, South Korea',
          },
        },
      },
    }),
    {
      name: 'language-storage',
    }
  )
)
