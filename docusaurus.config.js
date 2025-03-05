// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '一般社団法人SRE NEXT 規程・ガイドライン集',
  tagline: 'srenext',
  favicon: 'img/favicon.svg',

  url: 'https://regulations.sre-next.org',
  baseUrl: '/',

  organizationName: 'sre-next',
  projectName: 'corporate-regulations',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
    localeConfigs: {
      ja: {
        label: '日本語',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
              'https://github.com/sre-next/corporate-regulations/edit/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // 検索プラグインを追加
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["ja"],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/'
      }
    ]
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    image: 'img/social-card.jpg',
    navbar: {
      title: '一般社団法人SRE NEXT 規程・ガイドライン集',
      logo: {
        alt: 'SRE NEXT Logo',
        src: 'img/srenext_white.svg',
      },
      items: [
        {
          to: '/',
          position: 'left',
          label: 'Home',
        },
        {
          to: 'Basic/aoa',
          position: 'left',
          label: '定款',
        },
        {
          to: 'Basic/governing_documents_management',
          position: 'left',
          label: '規程管理規程',
        },
        {
          to: 'Others/develop_regulations_web_site',
          position: 'left',
          label: '更新ガイドライン',
        },
        {
          href: 'https://github.com/sre-next/corporate-regulations',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: '定款',
              to: 'Basic/aoa',
            },
            {
              label: '規程管理規程',
              to: 'Basic/governing_documents_management',
            },
            {
              label: '更新ガイドライン',
              to: 'Others/develop_regulations_web_site',
            },
          ],
        },
        {
          title: 'Event',
          items: [
            {
              label: 'SRE NEXT',
              href: 'https://sre-next.dev',
            },
            {
              label: 'SRE Lounge',
              href: 'https://sre-lounge.connpass.com',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Corporate Site',
              href: 'https://sre-next.org',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sre-next/corporate-regulations',
            },
          ],
        },
      ],
      copyright: `CC0 1.0 Universal | SRE NEXT Assoc. | Built with Docusaurus.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  }),
};

module.exports = config;
