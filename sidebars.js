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
      items: [
        'plugins/overview',
        {
          type: 'category',
          label: 'Tasks',
          items: [
            'plugins/tasks/browser-sync',
            'plugins/tasks/clean',
            'plugins/tasks/copy',
            'plugins/tasks/manifest',
            'plugins/tasks/service-worker',
            'plugins/tasks/yaml2json'
          ],
          collapsed: false
        }
      ],
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
