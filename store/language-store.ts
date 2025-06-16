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
              '저는 <span className="font-medium">독학으로 개발을 공부한 소프트웨어 엔지니어</span> - <span className="font-medium">김다희입니다.</span>',
            intro2:
              '<p><b className="font-medium">호기심과 명확함, 그리고 따뜻한 마음</b>을 중요하게 생각하는 개발자입니다.</p><p><b className="font-medium">컴퓨터가 어떻게 작동하는지</b> 근본부터 궁금해하고, 그 뒤에 숨겨진 논리를 탐구하는 걸 좋아해요.</p><p>논리를 생각하는 게 항상 쉽지만은 않지만, 의미 있는 무언가를 발견했을 때 느끼는 설렘은 정말 짜릿하답니다! 🤩😄</p><p>제 삶의 주된 목표는 <b className="font-medium">개발자이자 작가</b>가 되는 거예요. 그 과정에서 배운 것들을 나누고, 다른 사람들에게 도움이 되고 싶거든요.</p><p>그래서 이 블로그를 시작하게 되었어요.</p><p>제 쓴 글들이 여러분께 조금이나마 도움이 되기를 바랍니다🔮</p><p>그럼 방문해 주셔서 감사드리고🙏🏻 재미있게 읽어주세요!😊</p>',
            intro3: '오늘도 멋진 하루 보내세요',
            typedbios:
              '<li>제가 처음 코딩을 시작한 언어는 <b className="font-medium">C</b>예요.</li><li>저는 스트레스를 <b className="font-medium">수영, 줌바댄스, 모델 수업</b>으로 풀어요!</li><li>고양이를 사랑하지만, 고양이 알러지가 있어요😿.</li><li>책을 좋아해 독서모임📚 활동을 한지 꽤 오래되었어요!</li>',
            links1: '나의 작품들',
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
          },
          navbar: {
            more: '더 보기',
          },
          footer: {
            intro:
              '이곳은 개발을 배우며 겪은 시행착오와 배움을 담은 기록장입니다. 다른 개발자들에게 도움이 될 팁과 인사이트도 함께 공유하는 장소예요.',
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
              '저와 소프트웨어 개발의 세계를 함께 탐험해요! 😄<br />제가 공유하는 글은 다음과 같은 주제들이 담겨 있어요:<br />자주 발생하는 오류 해결법🐞, 핵심 프로그래밍 개념✅, 최신 기술 뉴스📫, 실용적인 튜토리얼과 사용법🔦, 툴 리뷰 및 추천⚒️, 학습 자료 소개✒️<br />🔍제목, 내용, 태그로 검색하거나 아래 목차를 둘러보며 원하는 정보를 찾아보세요.',
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
          },
          snippets: {
            title: '스니펫 모음',
            description:
              '<p>이곳은 제가 자주 사용하는, 간편하고 효율적인 코드 스니펫들을 모아놓은 공간입니다. 필요한 건 마음껏 가져가서, 여러분의 스타일에 맞게 수정하고 활용해보세요.</p><p className="mt-3 italic">이 코드들은 제 개인 프로젝트 경험과 오픈소스 커뮤니티의 멋진 협업 정신으로 만들어졌습니다.</p>',
          },
          projects: {
            title: '프로젝트',
            description:
              '제가 직접 개발한 풀스택 / 프론트엔드 웹 애플리케이션들을 소개합니다. 각 프로젝트는 실제로 배포되어 있거나, 미리보기와 소스 코드가 함께 제공됩니다.',
            portfolio: '포트폴리오 둘러보기',
            work: '직장',
            sideProjects: '사이드 프로젝트',
            thinkstormTitle: 'ThinkStorm (작업 진행 중)',
            thinkstormDescription:
              '글로벌 개발자들이 팀을 이루고 실제 프로젝트를 진행하며 실력을 키울 수 있도록 돕는 풀스택 협업 플랫폼입니다.',
            natoursTitle: 'Natours',
            natoursDescription:
              '결제 기능, 지도 기반 탐색, 여행 예약 대시보드, 트랜잭션 이메일 등을 갖춘 친환경 여행 예약 시스템입니다.',
            weddingyouTitle: 'Wedding You',
            weddingyouDescription:
              '고객과 플래너 매칭, 안전한 결제, 실시간 업데이트, 클라우드 호스팅을 지원하는 웨딩 플래닝 플랫폼입니다.',
            netflixTitle: 'Netflix And Chill',
            netflixDescription:
              'Netflix에서 영감을 받은 스트리밍 플랫폼으로, 역할 기반 인증, 관리자 대시보드, docker 기반 백엔드, 영화 탐색 기능을 갖추고 있습니다.',
            wetubeTitle: 'Wetube',
            wetubeDescription:
              'GitHub OAuth 로그인, 실시간 댓글, AWS S3 기반의 영상 업로드 및 재생 기능을 제공하는 YouTube 스타일의 영상 공유 사이트입니다.',
            forkifyTitle: 'Forkify',
            forkifyDescription:
              '실시간 검색, 즐겨찾기, 인분 조절 기능이 있는 미니멀한 프론트엔드 레시피 검색 애플리케이션입니다.',
            learnMore: '더 알아보기',
            builtWith: '기술 스택',
          },
          about: {
            title: '소개',
            description:
              '안녕하세요! 이곳은 제가 누구인지, 평소엔 무슨 일을 하며 지내는지, 그리고 왜 갑자기 블로그에 이런 글들을 쓰기 시작했는지를 살짝 풀어본 공간입니다. 그냥 “이 글들 뒤에 이런 사람이 있구나~” 하고 가볍게 인사하는 느낌으로 봐주세요!',
            greeting1: '안녕하세요',
            greeting2: '제 이름은 김다희입니다.',
            intro1:
              '저는 독학으로 개발을 공부한 소프트웨어 엔지니어예요. 프론트엔드랑 백엔드 개발 둘 다 정말 좋아하고, 저의 전공분야인 언어에도 관심이 많아요. 요즘에 인공지능이 매우 빠르게 발전하고 있는데, 예전에는 사람만 할 수 있다고 여겨졌던 언어 분야와 컴퓨터를 어떻게 인공지능이 연결짓는지 지켜보는 것이 흥미롭습니다.',
            intro2:
              '제가 어떻게 개발자가 되었는지 간단하게 소개해볼게요! 저는 코딩공부를 2017년에 대학교에 들어가면서 시작했어요. 여기에 개발자로의 커리어를 시작하게 된 여러가지 계기를 모두 말하기는 어렵지만, 어느 순간 컴퓨터가 어떻게 돌아가는지 정말 궁금해져서 전공과 함께 컴퓨터공학도 공부하게 됐어요. 그리고 코딩에 대한 꾸준한 관심으로 열심히 공부한 덕에 2023년에 저의 첫 직장으로 풀스택 개발자 자리를 얻게 됐답니다!',
            intro3:
              '요즘은 ThinkStorm 프로젝트를 하면서 Next.js, Nest.js, DevOps, 시스템 설계 쪽 공부도 하고 있어요.',
            intro4:
              '이 블로그는 제가 개발을 배우고, 코드를 만들어내고, 또 가끔은 만들어낸 것들을 망가뜨리는 과정 하나 하나를 기록하는 저만의 작은 실험실이에요. 글을 쓰면 생각도 정리되고 문제도 더 잘 풀리고, 무엇보다도 저처럼 궁금한 점이 많은 개발자분들이랑도 소통도 할 수 있을 것 같아 블로그를 시작하게 되었습니다.',
            intro5: '제 글에 대한 댓글이나 의견은 언제나 환영입니다!',
            mycareer: '경력',
            resume: '이력서',
            thinkstormCareerOrg: 'Thinkstorm',
            thinkstormCareerStart: '3월 2024',
            thinkstormCareerEnd: '현재',
            thinkstormCareerTitle: '풀스택 개발자',
            thinkstormCareerDetail:
              '<li><strong>Redis 기반</strong>의 요청 제한 및 캐싱 시스템을 설계 및 구현하여 보안과 성능 향상</li><li><strong>Jest 테스트</strong>를 통합한 <strong>CI/CD 파이프라인 구성</strong>으로 배포 자동화</li><li><strong>JWT 인증 시스템 구축</strong>을 통해 API 보안 강화</li><li><strong>개발자 온보딩 주도</strong>, 신입 팀원 멘토링</li><li><strong>새로운 기술 스택을 빠르게 학습 및 적용</strong>하여 프로젝트 요구사항 충족</li>',
            sherpasoftCareerOrg: '셀파 소프트',
            sherpasoftCareerStart: '7월 2023',
            sherpasoftCareerEnd: '3월 2024',
            sherpasoftCareerTitle: '풀스택 개발자',
            sherpasoftCareerDetail:
              '<li><strong>내부 시스템 개선을 주도하여 회의 시간을 </strong>주간 4시간 → 1시간으로 단축. <strong>월 210 인력시간</strong> 절감</li><li>대규모 데이터 처리를 위한 <strong>Kafka 및 ActiveMQ 리서치 및 발표</strong>, 결과적으로 <strong>ActiveMQ</strong> 도입</li><li>다양한 팀과 협업하여 <strong>상충되는 요구사항 조율</strong> 및 솔루션 도출</li><li>대기업 고객사를 대상으로 하여 <strong>Java, Spring Boot, JSP</strong>를 활용한 데이터베이스 모니터링 시스템 개발</li><li><strong>PostgreSQL, Oracle, MySQL, MongoDB, MariaDB, SAP HANA</strong>등 다양한 DB 사용</li><li><strong>리눅스 서버 환경 관리</strong> 및 성능 최적화</li>',
            allraFinTechCareerOrg: '올라 핀테크',
            allraFinTechCareerStart: '6월 2023',
            allraFinTechCareerEnd: '7월 2024',
            allraFinTechCareerTitle: '풀스택 개발자 인턴',
            allraFinTechCareerDetail:
              '<li>핀테크 결제 시스템을<strong> 1달만에</strong> 시뮬레이션하여 시연</li><li><strong>JUnit 5를 활용한 행동 주도 개발(BDD) </strong>테스트 실습</li><li><strong>시니어 개발자의 피드백을 수용 </strong> 및 코드 품질 향상 및 성장</li><li><strong>JSP, JavaScript, HTML/CSS (프론트엔드)</strong>와 <strong> Java, Spring Data JPA, MariaDB (백엔드)</strong> 사용</li><li>온라인 판매업체의 <strong>현금 흐름 문제 해결을 위한 금융 솔루션</strong> 이해</li><li>입사 후 <strong>한 달 내 기술 스택과 워크플로우에 빠르게 적응</strong></li>',
            multiCampusCareerOrg: '멀티캠퍼스 - 풀스택 개발자 부트캠프',
            multiCampusCareerStart: '1월 2023',
            multiCampusCareerEnd: '6월 2023',
            multiCampusCareerTitle: '학생',
            multiCampusCareerDetail:
              '<li>넷플릭스 클론 앱인 <a target="_blank" href="https://net-flix-clone-dahee-kim.netlify.app/"><strong>Netflix And Chill</strong> 개발</a>(Full-Stack Developer)</li><li>웨딩 플래너 웹앱 <a target="_blank" href="https://weddingyou-dahee-kim.netlify.app/"><strong>Wedding You</strong> 개발</a>(Full-Stack Developer)</li><li>최신 기술을 적용하여 <strong> 애플리케이션 리팩토링</strong> (최근).</li><li><strong>두 개의 팀 프로젝트 리더</strong>로서 일정 관리 및 협업 주도</li><li><strong>React, Java, and Spring</strong>에 대한 멘토링 제공으로 팀 역량 향상</li>',
            samsungSDSCareerOrg: '삼성 SDS',
            samsungSDSCareerStart: '3월 2022',
            samsungSDSCareerEnd: '4월 2022',
            samsungSDSCareerTitle: '글로벌 소프트웨어 무역 인턴',
            samsungSDSCareerDetail:
              '<li>호주의 <strong>IT 기반 물류 및 이커머스 트렌드 리서치 및 분석</strong></li><li><strong>AI 및 물류 솔루션</strong> 에 대한 조사</li><li>삼성 SDS의 <strong>물류 관리 시스템</strong>에 대한 이해</li><li><strong>소비자 행동, 온라인 플랫폼, 풀필먼트 서비스</strong> 에 대한 데이터 분석</li><li><strong>무역 자동화 및 실시간 추적 시스템 </strong>연구</li>',
            incheonNationalUniversityCareerOrg: '인천 대학교',
            incheonNationalUniversityCareerStart: '3월 2017',
            incheonNationalUniversityCareerEnd: '2월 2023',
            incheonNationalUniversityCareerTitle:
              '인천대학교 학생 (영어 영문학 & 전자 공학 & 컴퓨터 공학)',
            incheonNationalUniversityCareerDetail:
              '<li>영문학 <strong>GPA 4.2/4.5</strong> 로 졸업</li><li>KH Coder를 활용한 <strong>코퍼스 데이터 분석 조교</strong> 로 활동</li><li>컴퓨터공학 심화과정 이수, <strong>복수전공 수준의 이론 습득</strong></li><li><strong>APYE (아시아태평양청년교류)  대회 우승, </strong> 다문화 아동을 위한 문화 교류 앱 </strong>개발</li>',
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
              '<p>책 읽기를 좋아해서 매일 독서 습관을 유지하고 있습니다. 저는 매주 열리는 독서 모임의 활동적인 멤버이기도 해요📚. <br/><br/>예전에는 주로 소설을 읽었지만, 요즘은 다양한 장르를 즐기고 있으며 특히 논픽션, 기술, 과학, 자기 계발, 철학, 심리학, 역사, 예술 분야에 큰 흥미를 느끼고 있습니다.<br /><br/>이 공간에서는 저의 독서 기록과 앞으로 읽고 싶은 책 목록을 확인하실 수 있어요.</p>',
            description2: '*자료 출처 ',
            description3: 'Goodreads Bookshelf',
            readingTime: '분',
          },
          movies: {
            title: '영화 목록',
            description1:
              '<p>이곳은 제가 지금까지 본 영화와 시리즈를 기록하는 공간입니다. 저는 크리스토퍼 놀란과 짐 캐리를 정말 좋아해서, 두 사람의 작품이 자주 제 목록 상위에 올라 있어요! <br/>10점 만점을 준 작품은 제가 명작이라고 생각하는 것들이에요. 아마 여러 번 본 영화거나 진심으로 아끼는 작품일 거예요. (강력 추천입니다!)<br/><br/>제가 좋아하는 장르는 판타지, 어드벤처, 추리물이고, SF도 좋아해요. (공포물은 좋아하지 않아요!) 쉴 때는 즉흥적으로 영화관에 가는 게 제 힐링 방법이에요. <br/><br/>한 번 구경해 보세요. 여러분의 다음 인생 영화가 이 안에 있을지도 몰라요! 🤩🎞️🍿</p>',
            description2: '*자료 출처 ',
            description3: 'IMDB ratings list',
            description4: ', 세부 자료 출처 ',
            description5: 'OMDB API',
          },
          tags: {
            title: '태그 목록',
            description:
              '여기서 모든 태그들을 찾아보실 수 있어요! 😄<br/>🔍태그를 검색하여 원하는 정보를 찾아보세요.',
            searchTags: '태그 찾기...',
            blogs: '게시글',
            snippets: '스니펫',
            notagsFound: '검색 결과 없음.',
            searchDescription: '관련 검색 결과 ',
          },
        },
        en: {
          greeting: 'Hey, Everyone!',
          home: {
            intro1:
              'I\'m <span className="font-medium">Dahee Kim</span> - a self-taught Software Engineer <span className="hidden font-medium">South Korea</span>',
            intro2:
              '<p>Developer who values <b className="font-medium">curiosity, clarity, and compassion</b>.</p><p>Always curious about <b className="font-medium">how computers work</b> from the ground up and enjoy exploring the logic behind the scenes.</p><p>Thinking about logic isn\'t always easy, but the excitement you feel when you discover something meaningful is truly rewarding! 🤩😄</p><p>My main goal is to be a <b className="font-medium">developer & writer</b>, so I can share what I\'ve learned along the way and help others.</p><p>That\'s the main reason I created this blog.</p><p>I hope you find something helpful here!🔮</p><p>Thanks for visiting 🙏🏻 & Enjoy reading 😊</p>',
            intro3: 'Happy Reading',
            typedbios:
              '<li>I started to write my first code in <b className="font-medium">C</b>.</li><li>I relieve stress by <b className="font-medium">swimming, Zumba, and modeling classes</b>.</li><li>I love cats, but I have cat allergies😿.</li><li>I\'ve been in book club📚 for many years now!</li>',
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
          },
          snippets: {
            title: 'Snippets',
            description:
              '<p>This is where I keep my favorite, easy-to-use code snippets. They\'re all about efficiency and reusability. Go ahead and take what you need, customize it, and put it to work.</p><p className="mt-3 italic">Credit goes to both my own coding sessions and the collaborative spirit of the internet\'s open-source contributors.</p>',
          },
          projects: {
            title: 'Projects',
            description:
              'This is a showcase of full-stack / frontend web applications I built. Each project is either fully deployed or presented with a preview and source code.',
            portfolio: 'View Full Portfolio',
            work: 'Work',
            sideProjects: 'Side Projects',
            thinkstormTitle: 'ThinkStorm (Work In Progress)',
            thinkstormDescription:
              'Full-stack collaboration platform empowering global developers to team up, build real projects, and grow skills.',
            natoursTitle: 'Natours',
            natoursDescription:
              'Eco-tour booking system with payments, map-based exploration, admin dashboard, and transactional email support.',
            weddingyouTitle: 'Wedding You',
            weddingyouDescription:
              'Wedding planning platform with client-planner matching, secure payments, real-time updates, and cloud hosting.',
            netflixTitle: 'Netflix And Chill',
            netflixDescription:
              'Netflix-inspired streaming platform with role-based auth, admin dashboard, dockerized backend, and movie discovery.',
            wetubeTitle: 'Wetube',
            wetubeDescription:
              'YouTube-style video sharing site with video upload/playback, GitHub OAuth login, real-time commenting, and AWS S3 storage.',
            forkifyTitle: 'Forkify',
            forkifyDescription:
              'Minimalist frontend recipe finder with real-time search, bookmarks, and dynamic serving adjustments.',
            learnMore: 'Learn More',
            builtWith: 'Stack',
          },
          about: {
            title: 'About',
            description:
              "Hey there! This is just a little bit about who I am, what I\'m usually up to, and why I decided to start rambling on this blog. Think of it as a quick \'hi\' from the person behind all these posts. 😄",
            greeting1: 'Hey, Everyone!',
            greeting2: "I'm Dahee Kim",
            intro1:
              "A self-taught software engineer based in <strong>Incheon, South Korea</strong>. I'm deeply passionate about both <strong>frontend</strong> and <strong>backend</strong> development, and I also have a growing fascination with how artificial intelligence bridges the gap between human language and computers.",
            intro2:
              'I began coding in 2017, the year I started college. Through an unexpected turn of events(which can be very long to explain here 😅), I found myself curious about how computers work <em>from the ground up</em>. So I decided to pursue Computer Science alongside my main field of study. In 2023, I landed my first job as a Full-Stack Developer!',
            intro3:
              "I'm currently working on the <strong>ThinkStorm Project</strong> while diving deeper into <strong>Next.js</strong>, <strong>Nest.js</strong>, <strong>DevOps</strong>, and <strong>System Design</strong>.",
            intro4:
              'This blog is my digital lab where I document things I learn, build, and break. Writing helps me think clearly, solve problems better, and connect with other curious developers like you. 😊',
            intro5: 'I would greatly appreciate any comments and thoughts on my posts',
            mycareer: 'My Career',
            resume: 'Resume',
            thinkstormCareerOrg: 'Thinkstorm',
            thinkstormCareerStart: 'Mar 2024',
            thinkstormCareerEnd: 'Present',
            thinkstormCareerTitle: 'Full-Stack Developer',
            thinkstormCareerDetail:
              '<li>Designed and implemented <strong>Redis-based rate-limiting and caching systems</strong>, enhancing application security and performance.</li><li>Configured <strong>CI/CD pipelines</strong> incorporating <strong>Jest testing</strong> for streamlined deployment processes.</li><li>Built <strong>JWT authentication systems</strong> to secure application endpoints.</li><li><strong>Led developer onboarding</strong> processes and mentored new team members.</li><li><strong>Rapidly learned and implemented unfamiliar technologies</strong> to meet project requirements.</li>',
            sherpasoftCareerOrg: 'Sherpasoft',
            sherpasoftCareerStart: 'Jul 2023',
            sherpasoftCareerEnd: 'Mar 2024',
            sherpasoftCareerTitle: 'Full-Stack Developer',
            sherpasoftCareerDetail:
              '<li><strong>Spearheaded internal system improvements</strong>, reducing weekly meeting time from 4 to 1 hour and saving <strong>210 person-hours monthly</strong>.</li><li>Researched and presented <strong>Kafka and Active MQ implementation</strong> for large scale dataprocessing, resulting in adoption of <strong>ActiveMQ</strong>.</li><li>Collaborated with cross-functional teams to resolve <strong>conflicting requirements</strong> and facilitate consensus based solutions.</li><li>Developed <strong>database monitoring systems</strong> using <strong>Java, Spring Boot, and JSP</strong> for enterprise clients.</li><li>Worked with <strong>PostgreSQL, Oracle, MySQL, MongoDB, MariaDB, SAP HANA</strong>.</li><li>Managed <strong>Linux server environments</strong> for database monitoring andperformance optimization.</li>',
            allraFinTechCareerOrg: 'Allra Fin-Tech',
            allraFinTechCareerStart: 'Jun 2023',
            allraFinTechCareerEnd: 'Jul 2024',
            allraFinTechCareerTitle: 'Full-Stack Developer Intern',
            allraFinTechCareerDetail:
              "<li>Contributed to <strong>fintech payment processing systems</strong> within a professional development environment.</li><li>Practiced <strong>behavior-driven development</strong> using <strong>JUnit 5</strong>.</li><li><strong>Incorporated feedback from senior developers</strong> to improve code quality and grow professional practices.</li><li><strong>Quickly adapted</strong> to the company's tech stack and development workflows within one month.</li><li>Worked with <strong>JSP, JavaScript, HTML/CSS</strong> (frontend) and <strong>Java, Spring Data JPA, MariaDB</strong> (backend).</li><li>Observed how <strong>financial solutions</strong> help online retailers solve <strong>cash flow challenges</strong>.</li>",
            multiCampusCareerOrg: 'MultiCampus - Full Stack Developer Bootcamp',
            multiCampusCareerStart: 'Jan 2023',
            multiCampusCareerEnd: 'Jun 2023',
            multiCampusCareerTitle: 'Student at Multicampus',
            multiCampusCareerDetail:
              '<li>Built <a target="_blank" href="https://net-flix-clone-dahee-kim.netlify.app/"><strong>Netflix And Chill</strong></a>(Full-Stack Developer)</li><li>Built <a target="_blank" href="https://weddingyou-dahee-kim.netlify.app/"><strong>Wedding You</strong></a>(Full-Stack Developer)</li><li>Refactored both applications by <strong>integrating newly gained knowledge</strong> and <strong>applying best practices</strong> (Recent).</li><li><strong>Led two team projects</strong> as team leader, ensuring timely delivery and collaboration.</li><li><strong>Mentored team members</strong> in <strong>React, Java, and Spring</strong>, boosting team performance.</li>',
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
              '<li>Graduated with a <strong>GPA of 4.2/4.5</strong> in <strong>English Literature</strong></li><li>Worked as a <strong>Corpus Professor Assistant</strong> using KH Coder for <strong>data analysis</strong>.</li><li>Completed <strong>extensive coursework in Computer Engineering</strong>, effectively equivalent to a double major.</li><li>Won the <strong>APYE (Asia Pacific Youth Exchange)</strong> competition; developed a <strong>cultural exchange app</strong> to help multicultural children in Korea.</li>',
            techstack: 'Tech Stack',
            techstackDetail:
              '<p>This blog is hosted on <a href="https://vercel.com/" target="_blank">Vercel</a>, built with <a href="https://nextjs.org/" target="_blank">Next.js</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> using <strong>Tailwind Nextjs Starter Blog</strong>.</p><p>See my <a href="https://github.com/kimdahee0815/kimdahee0815.github.io" target="_blank">Github repository</a> for this blog.</p>',
            assets: 'Assets',
            assetsDetail1:
              'Most of the images in my blog are from <a href="https://unsplash.com/" target="_blank"> Unsplash</a>, gifs from <a href="https://giphy.com/" target="_blank">GIPHY</a>, and illustrations are from <a href="https://storyset.com/" target="_blank">Storyset</a>.',
            assetsDetail2: 'Thanks for the free resources ',
            contact: 'Contact',
            contactDetail:
              'Reach out to me at <a href={`mailto:$kimdahee0815@gmail.com`}>kimdahee0815@gmail.com</a> or find me on social media:',
          },
          books: {
            title: 'Books',
            description1:
              '<p>A lifelong love for books drives my daily reading habit. I\'m also a long-time member of a weekly book club 📚. <br/><br/>While novels were once my main focus, I now appreciate a wide array of genres, with a particular fondness for non-fiction, technology, science, productivity, philosophy, psychology, history, art these days.<br /><br/>Here, you\'ll find my reading log and my ever-growing "to-read" list.</p>',
            description2: '*Data pulled from my ',
            description3: 'Goodreads Bookshelf',
            readingTime: 'mins read',
          },
          movies: {
            title: 'Movies',
            description1:
              "<p>This is where I log of all the films and series I've seen. Being a big fan of Christopher Nolan and Jim Carrey, their work often tops my list! <br/>A 10-star rating means I consider it an absolute masterpiece, something I've probably seen many times or truly love (consider it a strong recommendation!).<br/><br/>My favorite genres lean towards fantasy, adventure, and detective stories, and I'm always up for sci-fi (but definitely no horror!). When I need to unwind, my go-to is usually a spontaneous trip to the cinema. <br/><br/>Take a look, maybe you'll find your next favorite film! 🤩🎞️🍿</p>",
            description2: '*Data is exported from my ',
            description3: 'IMDB ratings list',
            description4: ', with extra details pulled in from the ',
            description5: 'OMDB API',
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
        },
      },
    }),
    {
      name: 'language-storage',
    }
  )
)
