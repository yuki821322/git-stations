import { describe, it, expect } from 'vitest'
import simpleGit from 'simple-git'

describe('Station02', () => {
  it('コミットメッセージ「fix: 営業日時の修正」のコミットが存在する', async () => {
    const expectedMessage = 'fix: 営業日時の修正'
    const git = simpleGit()
    const logs = await git.log()
    const result = logs.all.some((log) => log.message === expectedMessage)

    expect(result).toBeTruthy()
  })
})
