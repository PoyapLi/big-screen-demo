rm -rf dist &&
yarn build --base ./ &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:PoyapLi/big-screen-website.git &&
git push -f -u origin master &&
cd -
