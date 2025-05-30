export const SITE_METADATA = {
  title: "Let's Hack The Moon",
  author: 'DAHEE KIM',
  headerTitle: `Let's Hack The Moon`,
  description:
    'A personal space on the cloud where I document my programming journey, sharing lessons, insights, and resources for fellow developers.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://letshackthemoon.com',
  analyticsURL: 'https://cloud.umami.is/share/UQkiuQnS5MhhzuMz/letshackthemoon.com',
  siteRepo: 'https://github.com/kimdahee0815/blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.svg`,
  avatar: `${process.env.BASE_PATH || ''}/static/images/avatar.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,
  email: 'kimdahee0815@gmail.com',
  github: 'https://github.com/kimdahee0815',
  linkedin: 'https://www.linkedin.com/in/dahee-kim-6aaa5b267/',
  x: 'https://x.com/dianakim815',
  locale: 'en-US',
  stickyNav: true,
  goodreadsBookshelfUrl: 'https://www.goodreads.com/review/list/190809482-daheekim',
  goodreadsFeedUrl: 'https://www.goodreads.com/review/list_rss/190809482',
  imdbRatingsList: 'https://www.imdb.com/user/ur203182499/ratings/?view=grid',
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: 'https://cloud.umami.is/share/UQkiuQnS5MhhzuMz/letshackthemoon.com',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'dark_protanopia',
      darkTheme: 'catppuccin_latte',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
  support: {
    // buyMeACoffee: 'https://www.buymeacoffee.com/leohuynh.dev',
    // paypal: 'https://paypal.me/hta218?country.x=VN&locale.x=en_US',
    // kofi: 'https://ko-fi.com/hta218',
  },
}
