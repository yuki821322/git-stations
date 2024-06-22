import { describe, expect, it } from 'vitest'
import simpleGit from 'simple-git'

describe('Station10', () => {
  it('v1.0.0のタグが存在する', async () => {
    const expectedTag = 'v1.0.0'
    const git = simpleGit()
    const tags = (await git.tag()).split('\n')
    const result = tags.some((tag) => tag === expectedTag)

    expect(result).toBeTruthy()
  })
})
