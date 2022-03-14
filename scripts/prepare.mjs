import * as fs from 'fs/promises'
import * as path from 'path'

// prettier-ignore
const replaceModuleNames = file => {
  return file
    .replace(/declare module "comm/g, 'declare module "@svb-41/core/comm')
    .replace(/declare module "geometry/g, 'declare module "@svb-41/core/geometry')
    .replace(/declare module "radar/g, 'declare module "@svb-41/core/radar')
    .replace(/declare module "ship/g, 'declare module "@svb-41/core/ship')
    .replace(/export (.*) from "comm/g, 'export $1 from "@svb-41/core/comm')
    .replace(/export (.*) from "geometry/g, 'export $1 from "@svb-41/core/geometry')
    .replace(/export (.*) from "radar/g, 'export $1 from "@svb-41/core/radar')
    .replace(/export (.*) from "ship/g, 'export $1 from "@svb-41/core/ship')
    .replace(/\/\/\#.*/, '')
}

const dirname = process.cwd()
const filepath = path.resolve(dirname, 'types.d.ts')
const jspath = filepath.replace('.d.ts', '.js')
const file = await fs.readFile(filepath, 'utf-8')
const withModuleNames = replaceModuleNames(file)
const replaced = withModuleNames.replace(
  /declare module "index"/g,
  'declare module "@svb-41/core"'
)
await fs.writeFile(jspath, `export default \`${replaced}\``)
await fs.writeFile(
  filepath,
  `declare module "@svb-41/core/types" {
  const types: string
  export default types
}`
)
