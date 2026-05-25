export default {
  name: 'blog', title: 'Blog Posts', type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'date', title: 'Date', type: 'datetime' },
    { name: 'author', title: 'Author', type: 'string', initialValue: 'Awais Rafique' },
    { name: 'thumbnail', title: 'Thumbnail', type: 'image', options: { hotspot: true } },
    { name: 'excerpt', title: 'Short Description', type: 'text' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'string' }] },
    { name: 'status', title: 'Status', type: 'string',
      options: { list: ['published', 'draft'] }, initialValue: 'published' },
  ]
}