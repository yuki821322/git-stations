import { describe, it, expect } from 'vitest'
import simpleGit from 'simple-git'

describe('Station03', () => {
  it('feature/add-footerブランチが存在する', async () => {
    const expectedBranch = 'feature/add-footer'
    const git = simpleGit()
    const branches = (await git.branch().branchLocal()).all
    const result = branches.some((branch) => branch === expectedBranch)

    expect(result).toBeTruthy()
  })
})
