import { describe, expect, it } from 'vitest'
import { open } from 'node:fs/promises'

describe('Station08', () => {
  it('git-log.txtにログが出力されている', async () => {
    const file = (await open('./git-log.txt')).readLines()
    const iterator = file[Symbol.asyncIterator]()
    const line1 = (await iterator.next()).value
    const line2 = (await iterator.next()).value
    const line3 = (await iterator.next()).value
    const result = /^commit/.test(line1) && /^Author:/.test(line2) && /^Date:/.test(line3)

    expect(result).toBeTruthy()
  })

  it('git-diff.txtに差分が出力されている', async () => {
    const file = (await open('./git-diff.txt')).readLines()
    const iterator = file[Symbol.asyncIterator]()
    // TODO: (要検討)
    //  現状先頭行しか見ていないが、どこまでチェックするか要検討
    const result = /^diff --git/.test((await iterator.next()).value)

    expect(result).toBeTruthy()
  })
})
