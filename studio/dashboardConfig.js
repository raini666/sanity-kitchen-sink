export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6033cd2e6df84d46ffdf8827',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cniihvq1',
                  apiId: '248c10bd-1366-49c8-a2b7-26ca0021c5c1'
                },
                {
                  buildHookId: '6033cd2eadcf104aaabaf952',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8u5s44u5',
                  apiId: '52fec58b-c303-4373-8ecc-39aa2610e759'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raini666/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8u5s44u5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
