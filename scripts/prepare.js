import * as fs from 'fs/promises'
import * as path from 'path'

// prettier-ignore
const replaceModuleNames = file => {
  return file
    .replace(/declare module "comm/g, 'declare module "@svb-41/core/comm')
    .replace(/declare module "controller/g, 'declare module "@svb-41/core/controller')
    .replace(/declare module "helpers/g, 'declare module "@svb-41/core/helpers')
    .replace(/declare module "ship/g, 'declare module "@svb-41/core/ship')
    .replace(/export (.*) from "comm/g, 'export $1 from "@svb-41/core/comm')
    .replace(/export (.*) from "controller/g, 'export $1 from "@svb-41/core/controller')
    .replace(/export (.*) from "helpers/g, 'export $1 from "@svb-41/core/helpers')
    .replace(/export (.*) from "ship/g, 'export $1 from "@svb-41/core/ship')
    .replace(/\/\/\#.*/, '')
}

const dirname = process.cwd()
const filepath = path.resolve(dirname, 'types.d.ts')
const file = await fs.readFile(filepath, 'utf-8')
const withModuleNames = replaceModuleNames(file)
const replaced = withModuleNames.replace(
  /declare module "index"/g,
  'declare module "@svb-41/core"'
)
await fs.writeFile(filepath, replaced)

const jspath = filepath.replace('.d.ts', '.js')
await fs.writeFile(jspath, `export default \`${replaced}\``)