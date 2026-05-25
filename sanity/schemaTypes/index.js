import skill from '../schemas/skill'
import project from '../schemas/project'
import blog from '../schemas/blog'
import service from '../schemas/service'

export const schemaTypes = [skill, project, blog, service]

export const schema = {
  types: schemaTypes,
}