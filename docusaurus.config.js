module.exports = {
  title: 'io arc documents',
  tagline: "It's so easy! build in 5 minutes! WEB/PWA/SPA boilerplate CLI.",
  url: 'https://io-arc.tech',
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
          className: 'nav-github',
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
    image: 'img/ogp.png',
    algolia: {
      // Refs: https://autocomplete-experimental.netlify.app/docs/docsearchmodal/#reference
      apiKey: '5df5e67f90d772363bf237f1e7b27f9e',
      indexName: 'io-arc',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      // searchParameters: {}

      //... other Algolia params
      // inputSelector: '.DocSelector',
      algoliaOptions: {
        facetFilters: [
          'type:content',
          'version:current',
          'language:en',
          'docusaurus_tag:docs-default-current'
        ]
      },
      debug: false // Set debug to true if you want to inspect the dropdown
    }
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
