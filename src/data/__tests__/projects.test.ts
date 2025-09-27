import { describe, it, expect } from 'vitest'
import { projects, ProjectSchema } from '../projects'

describe('Projects Data', () => {
  it('should have valid project data', () => {
    expect(projects).toBeDefined()
    expect(Array.isArray(projects)).toBe(true)
    expect(projects.length).toBeGreaterThan(0)
  })

  it('should have valid project schemas', () => {
    projects.forEach((project) => {
      const result = ProjectSchema.safeParse(project)
      expect(result.success).toBe(true)
    })
  })

  it('should have required fields for each project', () => {
    projects.forEach((project) => {
      expect(project.title).toBeDefined()
      expect(project.slug).toBeDefined()
      expect(project.summary).toBeDefined()
      expect(project.tags).toBeDefined()
      expect(project.role).toBeDefined()
      expect(project.year).toBeDefined()
      expect(project.tech).toBeDefined()
    })
  })

  it('should have unique slugs', () => {
    const slugs = projects.map(p => p.slug)
    const uniqueSlugs = new Set(slugs)
    expect(slugs.length).toBe(uniqueSlugs.size)
  })

  it('should have valid years', () => {
    projects.forEach((project) => {
      expect(project.year).toBeGreaterThan(2020)
      expect(project.year).toBeLessThanOrEqual(new Date().getFullYear() + 1)
    })
  })
})
