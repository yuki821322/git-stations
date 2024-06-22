import { describe, it, expect } from 'vitest'
import simpleGit from 'simple-git'

describe('Station09', () => {
  it('mainブランチの最新のコミットにリベースできている', async () => {
    const baseBranch = 'main'
    const featureBranch = '' // TODO
    const git = simpleGit()
    const head = await git.raw('rev-parse', baseBranch)
    const baseCommit = await git.raw('merge-base', baseBranch, featureBranch).catch((err) => {
      console.log(err.message)
    })

    expect(head === baseCommit).toBeTruthy()
  })
})
