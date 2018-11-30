const fs=require('fs');
const pkg=require('./package.json');
const slug=process.env.GITHUB_HOMEPAGE || process.env.TRAVIS_REPO_SLUG;
let repo=slug.split(/\//).slice(-1)[0];
pkg.homepage=`https://step-tw.github.io/${repo}`

fs.writeFileSync("package.json",JSON.stringify(pkg),"utf8");
