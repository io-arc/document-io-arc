const path = require('path')

module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'io-arc', // Usually your GitHub org/user name.
  projectName: 'io-arc', // Usually your repo name.
  themeConfig: {
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
    }
  },
  plugins: [],
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
