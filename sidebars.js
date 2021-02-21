module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro'
    },
    {
      type: 'doc',
      id: 'select-languages-and-frameworks'
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
      collapsed: true
    },
    {
      type: 'category',
      label: 'Build',
      items: ['build/overview', 'build/html', 'build/css', 'build/js'],
      collapsed: true
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
            'plugins/tasks/webp-converter',
            'plugins/tasks/webpack-babel',
            'plugins/tasks/webpack-css',
            'plugins/tasks/webpack-html',
            'plugins/tasks/webpack-pug',
            'plugins/tasks/webpack-sass',
            'plugins/tasks/webpack-stylus',
            'plugins/tasks/webpack-typescript',
            'plugins/tasks/webpack-vue',
            'plugins/tasks/webpack-vue-typescript',
            'plugins/tasks/yaml2json'
          ],
          collapsed: false
        },
        {
          type: 'category',
          label: 'Modules',
          items: [
            {
              type: 'category',
              label: 'env',
              items: [
                'plugins/modules/env/env-index',
                {
                  type: 'category',
                  label: 'Constants',
                  items: [
                    'plugins/modules/env/env-common',
                    'plugins/modules/env/env-site',
                    'plugins/modules/env/env-html',
                    'plugins/modules/env/env-css',
                    'plugins/modules/env/env-js',
                    'plugins/modules/env/env-images',
                    'plugins/modules/env/env-static',
                    'plugins/modules/env/env-yaml2json'
                  ],
                  collapsed: false
                }
              ]
            },
            'plugins/modules/file-list',
            'plugins/modules/logger',
            'plugins/modules/output-dir-diff',
            'plugins/modules/path-build',
            'plugins/modules/read-yaml',
            'plugins/modules/types',
            'plugins/modules/utils',
            'plugins/modules/webp-converter',
            'plugins/modules/webpack-loaders-image',
            'plugins/modules/webpack-loaders-js',
            'plugins/modules/webpack-loaders-pug-linter',
            'plugins/modules/webpack-plugins-task-message',
            'plugins/modules/webpack-settings',
            'plugins/modules/yaml2json'
          ],
          collapsed: true
        }
      ],
      collapsed: true
    }

    // root example
    // {
    //   type: 'doc',
    //   id: 'addTag'
    // },
    // {
    //   type: 'ref',
    //   id: 'doc1'
    // },
    // {
    //   type: 'ref',
    //   id: 'mdx'
    // }
  ]
}
