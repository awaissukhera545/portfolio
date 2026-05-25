export default {
  name: 'skill', title: 'Skills', type: 'document',
  fields: [
    { name: 'name', title: 'Skill Name', type: 'string' },
    { name: 'percentage', title: 'Percentage (0-100)', type: 'number' },
    { name: 'category', title: 'Category', type: 'string',
      options: { list: ['Design', 'Development', 'Other'] } },
    { name: 'imageSrc', title: 'Icon Path (e.g. /assets/images/skill/figma.png)', type: 'string' },
    { name: 'order', title: 'Display Order', type: 'number' },
  ]
}