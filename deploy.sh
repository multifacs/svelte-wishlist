git pull
git add .
git commit -m "list update"
git push

npm run build
git add dist -f
git commit -m "list update"
git subtree push --prefix dist origin pages