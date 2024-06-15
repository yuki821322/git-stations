import { describe, expect, it } from 'vitest'
import simpleGit from 'simple-git'

describe('Station05', () => {
  it('mainブランチにfeature/add-footerブランチがマージされている', async () => {
    const expectedCommit = '' // TODO: コミットの追加
    const mainBranch = 'main'
    const git = simpleGit()
    const containingBranches = (await git.branch({ '--contains': expectedCommit })).all
    const result = containingBranches.some((branch) => branch === mainBranch)

    expect(result).toBeTruthy()
  })
})
