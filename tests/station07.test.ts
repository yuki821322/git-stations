import { describe, expect, it } from 'vitest'
import simpleGit from 'simple-git'

describe('Station07', () => {
  it('mainブランチにfix/header-styleブランチがマージされている', async () => {
    const fixHeaderStyleBranch = 'fix/header-style'
    const mainBranch = 'main'
    const git = simpleGit()
    const branches = (await git.branch().branchLocal()).branches
    // NOTE: このコミットはscripts/station07.tsによって後から作成されるので、ブランチからコミットを特定する必要がある
    const fixHeaderStyleBranchCommit = branches[fixHeaderStyleBranch].commit
    const containingBranches = (await git.branch({ '--contains': fixHeaderStyleBranchCommit })).all
    const result = containingBranches.some((branch) => branch === mainBranch)

    expect(result).toBeTruthy()
  })
})
