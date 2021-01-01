module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro', 'select-languages-and-frameworks'],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/overview',
        'configuration/site',
        'configuration/build',
        'configuration/webpack'
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Build',
      items: ['build/overview', 'build/html', 'build/css', 'build/js'],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Plugins',
      items: ['plugins/overview'],
      collapsed: false
    },

    // TODO: 以下最終的にはリンクから外す
    {
      type: 'ref',
      id: 'addTag'
    },
    {
      type: 'ref',
      id: 'doc1'
    },
    {
      type: 'ref',
      id: 'mdx'
    }
  ]
}
