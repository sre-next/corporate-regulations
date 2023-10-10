// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '一般社団法人SRE NEXT 規程・ガイドライン集',
  tagline: 'srenext',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://regulations.sre-next.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sre-next', // Usually your GitHub org/user name.
  projectName: 'corporate-regulations', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sre-next/corporate-regulations',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
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
            label: 'About',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
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
                label: 'About',
                to: '/',
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
                to: 'https://sre-next.org',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
