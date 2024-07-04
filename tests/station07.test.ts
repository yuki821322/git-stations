import { describe, expect, it } from 'vitest'
import simpleGit from 'simple-git'

describe('Station07', () => {
  it('mainブランチにfeature/food-styleブランチがマージされている', async () => {
    const featureFoodStyleBranch = 'feature/food-style'
    const mainBranch = 'main'
    const git = simpleGit()
    const branches = (await git.branch().branchLocal()).branches
    // NOTE: このコミットはscripts/station07.tsによって後から作成されるので、ブランチからコミットを特定する必要がある
    const featureFoodStyleBranchCommit = branches[featureFoodStyleBranch].commit
    const containingBranches = (await git.branch({ '--contains': featureFoodStyleBranchCommit })).all
    const result = containingBranches.some((branch) => branch === mainBranch)

    expect(result).toBeTruthy()
  })
})
