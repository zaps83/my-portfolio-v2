export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'},
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
      {
        name: 'relatedPosts',
        title: 'Related Posts',
        type: 'array',
        of: [
          {
            type: 'relatedPost',
            name: 'relatedPost',
            title: 'Related Post',
          }
        ]
      },
      {
        name: 'visitSite',
        title: 'Visit Site',
        type: 'url'
      },
      {
        name: 'viewCode',
        title: 'View Code',
        type: 'url'
      },
      {
        name: 'watchDemo',
        title: 'Watch Demo',
        type: 'string'
      },
    ],
}