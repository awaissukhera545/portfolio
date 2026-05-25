export default {
  name: 'service', title: 'Services', type: 'document',
  fields: [
    { name: 'title', title: 'Service Name', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'icon', title: 'Icon Class (e.g. fa-light fa-pen-ruler)', type: 'string' },
    { name: 'projectCount', title: 'Project Count', type: 'number' },
    { name: 'order', title: 'Display Order', type: 'number' },
  ]
}