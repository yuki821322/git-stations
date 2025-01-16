import { describe, expect, it } from 'vitest'
import simpleGit from 'simple-git'

describe('Station04', () => {
  it('feature/add-footerブランチがプッシュされている', async () => {
    const expectedBranch = 'origin/feature/add-footer'
    const git = simpleGit()
    const branches = (await git.branch(['-r'])).all
    const result = branches.some((branch) => branch === expectedBranch)

    expect(result).toBeTruthy()
  })

  it('feature/contact-styleブランチとコミットがローカルに存在する', async () => {
    const featureContactStyleBranch = 'feature/contact-style'
    const git = simpleGit()
    const remoteBranches = (await git.branch(['-r'])).branches
    const remoteBranchCommit = remoteBranches[`origin/${featureContactStyleBranch}`].commit

    const localBranches = (await git.branch().branchLocal()).branches
    const localBranchCommit = localBranches[featureContactStyleBranch].commit

    expect(remoteBranchCommit).toEqual(localBranchCommit)
  })
})
