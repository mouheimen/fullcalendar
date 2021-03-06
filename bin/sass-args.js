#!/usr/bin/env node

const path = require('path')
const tsConfig = require(path.resolve(__dirname, '../tsconfig.json'))

let packagePaths = tsConfig.compilerOptions.paths
let parts = []

for (let packageName in packagePaths) {
  let jsPath = packagePaths[packageName][0]
  let srcPath = path.dirname(jsPath)
  let distPath = 'dist/' + packageName

  parts.push(srcPath + ':' + distPath)
}

console.log(parts.join(' '))
