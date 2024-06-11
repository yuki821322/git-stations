import { describe, expect, it } from 'vitest'
import simpleGit from 'simple-git'

describe('Station04', () => {
  it('feature/accessブランチが存在する', async () => {
    const expectedBranch = 'feature/access'
    const git = simpleGit()
    const branches = (await git.branch().branchLocal()).all
    const result = branches.some((branch) => branch === expectedBranch)

    expect(result).toBeTruthy()
  })
})
