import * as fs from 'node:fs'

const editCode = `
\n/* -- Station06 git stash用コード -- */

footer {
  background-color: black;
}

/* -- Station06 git stash用コード -- */\n
`

fs.appendFileSync('./pages/style.css', editCode)
