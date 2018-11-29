const fs=require('fs');
const pkg=require('./package.json');
pkg.homepage=process.env.GITHUB_HOMEPAGE;

fs.writeFileSync("package.json",JSON.stringify(pkg),"utf8");
