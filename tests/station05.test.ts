import { describe, expect, it } from 'vitest'
import simpleGit from 'simple-git'

describe('Station05', () => {
  it('mainブランチにfeature/add-footerブランチがマージされている', async () => {
    const featureFooterBranch = 'feature/add-footer'
    const mainBranch = 'main'
    const git = simpleGit()
    const branches = (await git.branch().branchLocal()).branches
    // NOTE: このコミットはRailwayに取り組むユーザーによって後から作成されるので、ブランチからコミットを特定する必要がある
    const featureFooterBranchCommit = branches[featureFooterBranch].commit
    const containingBranches = (await git.branch({ '--contains': featureFooterBranchCommit })).all
    const result = containingBranches.some((branch) => branch === mainBranch)

    expect(result).toBeTruthy()
  })
})
