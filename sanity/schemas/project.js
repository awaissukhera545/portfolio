export default {
  name: 'project', title: 'Projects', type: 'document',
  fields: [
    { name: 'title', title: 'Project Title', type: 'string' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'string' }] },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'thumbnail', title: 'Thumbnail Image', type: 'image', options: { hotspot: true } },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'liveUrl', title: 'Live URL', type: 'url' },
    { name: 'githubUrl', title: 'GitHub URL', type: 'url' },
    { name: 'status', title: 'Status', type: 'string',
      options: { list: ['published', 'draft'] }, initialValue: 'published' },
    { name: 'order', title: 'Display Order', type: 'number' },
  ]
}