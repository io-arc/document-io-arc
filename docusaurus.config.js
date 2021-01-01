module.exports = {
  title: 'io arc Documents',
  tagline: "It's so easy! build in 5 minutes! WEB/PWA/SPA boilerplate CLI.",
  url: 'https://io-arc.docs.arc-one.jp',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'io-arc', // Usually your GitHub org/user name.
  projectName: 'io-arc', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    navbar: {
      title: 'io arc',
      logo: {
        alt: 'io arc',
        src: 'img/logo.svg'
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left'
        // },
        {
          href: 'https://github.com/io-arc/io-arc',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Using Guide',
        //       to: '/'
        //     }
        //   ]
        // }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} io arc project.`
    },
    image: 'img/ogp.png'
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js')
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
