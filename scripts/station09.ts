import simpleGit from 'simple-git';
import * as fs from 'node:fs';

async function main() {
  const headerStyle = `  
header {
  display: flex;
  background: linear-gradient(to bottom right, #493a40, #2c424d);
  color: white;
  position: fixed;
  height: 100px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

h1 {
  padding: 10px;
}

#header-menu {
  width: 400px;
  height: 100%;
}

#header-menu > ul {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto 25px;
}

#header-menu > ul > li {
  padding-right: 2px;
  width: 20%;
  text-align: center;
  margin: auto 0;
}

#header-menu > ul > li > a {
  color: white;
  display: block;
  width: 100%;
  height: 100%;
}
  `
  const accessStyle = `
#access > h2 {
  text-align: center;
  padding-top: 150px;
  margin-bottom: 50px;
}

#access {
  width: 80vw;
  height: 90vh;
  margin: 0 auto;
}

#access > p {
  text-align: center;
  margin-top: 25px;
  margin-bottom: 50px;
}

#access > table {
  width: 60%;
  margin: 0 auto;
}

#access-detail {
  display: flex;
}

#access-detail > table {
  width: 50%;
  height: 100px;
  margin: auto;
}

#access-detail > p {
  height: 50vh;
  width: 50%;
  text-align: center;
}

#access-detail > p > img {
  height: 100%;
}
  `
  const styleSheetPath = './pages/style.css'
  const featureHeaderStyleBranch = 'feature/header-style'
  const featureAccessStyleBranch = 'feature/access-style'
  const mainBranch = 'main'
  const git = simpleGit()

  await git.checkoutBranch(featureHeaderStyleBranch, mainBranch)
  fs.appendFileSync(styleSheetPath, headerStyle)

  await git.add([styleSheetPath])
  await git.commit('feat: ヘッダーのスタイルを実装')

  await git.checkoutBranch(featureAccessStyleBranch, mainBranch)
  fs.appendFileSync(styleSheetPath, accessStyle)

  await git.add([styleSheetPath])
  await git.commit('feat: アクセスのスタイルを実装')

  await git.checkout(mainBranch)
  await git.merge([featureHeaderStyleBranch])
  await git.checkout(mainBranch)
}

main()
