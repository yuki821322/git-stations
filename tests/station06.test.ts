import { describe, expect, it } from 'vitest'
import simpleGit from 'simple-git'

describe('Station06', () => {
  it('stashされた変更が存在する', async () => {
    const git = simpleGit()
    const stashes = (await git.stashList()).all

    expect(stashes.length > 0).toBeTruthy()
  })
})
