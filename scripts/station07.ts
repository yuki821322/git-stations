import simpleGit from 'simple-git'
import * as fs from 'node:fs'

async function main() {
  const menuDrinkStyle = `
#menu {
  width: 90vw;
  margin: 0 5vw;
}

#menu > h2 {
  text-align: center;
  padding-top: 150px;
  margin-bottom: 50px;
}

#drink,
#food {
  width: 100%;
  margin-bottom: 150px;
}

.item-list {
  display: flex;
  width: 100%;
}

.item-price {
  text-align: right;
}

#drink > h3 {
  width: 50vw;
  margin-bottom: 25px;
  text-align: center;
}

#drink-list > table {
  width: 35%;
  margin-right: 5%;
  margin-left: 10%;
}

#drink-image {
  height: 45vh;
  width: 50%;
  text-align: center;
}

#drink-image > img {
  height: 100%;
  border-radius: 50%;
}
`
  const menuFoodStyle = `
#food > h3 {
  width: 50vw;
  margin: 0 5vw 25px auto;
  text-align: center;
}

#food-list > table {
  width: 35%;
  margin-right: 5%;
  margin-left: 10%;
}

#food-image {
  height: 45vh;
  width: 40%;
  text-align: center;
}

#food-image > img {
  height: 100%;
  border-radius: 50%;
}
`
  const styleSheetPath = './pages/style.css'
  const mainBranch = 'main'
  const featureDrinkStyleBranch = 'feature/drink-style'
  const featureFoodStyleBranch = 'feature/food-style'
  const git = simpleGit()

  await git.checkoutBranch(featureDrinkStyleBranch, mainBranch)
  fs.appendFileSync(styleSheetPath, menuDrinkStyle)

  await git.add([styleSheetPath])
  await git.commit('feat: 飲み物メニューのスタイルを実装')

  await git.checkoutBranch(featureFoodStyleBranch, mainBranch)
  fs.appendFileSync(styleSheetPath, menuFoodStyle)

  await git.add([styleSheetPath])
  await git.commit('feat: 食べ物メニューのスタイルを実装')

  await git.checkout(mainBranch)
  await git.merge([featureDrinkStyleBranch])

  await git.checkout(mainBranch)
  await git.merge([featureFoodStyleBranch])
}

main()
