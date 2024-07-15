import simpleGit from 'simple-git'
import * as fs from 'node:fs'

async function main() {
  const styleSheetPath = './pages/style.css'
  const contactStyle = `
#contact {
  width: 50%;
  margin: 0 auto 50px auto;
}

#contact > h2 {
  text-align: center;
  padding-top: 150px;
  margin-bottom: 50px;
}

#email {
  width: 100%;
  margin-bottom: 50px;
  font-size: large;
}

#contact-detail {
  width: 100%;
  height: 50vh;
  margin-bottom: 50px;
  font-size: large;
}

#contact-form > button {
  width: 100%;
  height: 50px;
  border-radius: 50px;
  border: none;
  color: white;
  background: linear-gradient(to bottom right, #493a40, #2c424d);
}
  `
  const featureContactStyleBranch = 'feature/contact-style'
  const remote = 'origin'
  const mainBranch = 'main'
  const git = simpleGit()

  await git.checkoutBranch(featureContactStyleBranch, mainBranch)
  fs.appendFileSync(styleSheetPath, contactStyle)

  await git.add([styleSheetPath])
  await git.commit('feat: お問い合わせのスタイルを実装')
  await git.push(remote, featureContactStyleBranch)
  await git.checkout(mainBranch)
  await git.deleteLocalBranch(featureContactStyleBranch, true)
}

main()
