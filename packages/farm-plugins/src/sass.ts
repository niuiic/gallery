import type { JsPlugin, UserConfig } from '@farmfe/core'
import autoprefixer from 'autoprefixer'
import { createRequire } from 'module'
import postcss from 'postcss'

const sassImpl = import(createRequire(import.meta.url).resolve('sass-embedded'))

export const farmSassPlugin = (): JsPlugin => {
  let farmConfig: UserConfig['compilation']

  return {
    name: 'farm-sass-plugin',
    configResolved: (args) => {
      farmConfig = args.compilation
    },
    load: {
      filters: {
        resolvedPaths: ['\\.scss$', '\\.sass$']
      },
      executor: async (args) => {
        let content = await sassImpl.then((x) => x.compile(args.resolvedPath).css).catch(() => '')
        content = await postcss([autoprefixer])
          .process(content, {
            from: args.resolvedPath
          })
          .then((x) => x.css)
          .catch(() => '')

        return { content, moduleType: 'sass-css' }
      }
    },
    transform: {
      filters: {
        moduleTypes: ['sass-css']
      },
      executor: async (args, ctx) => {
        if (farmConfig?.mode === 'development') {
          ctx?.addWatchFile(args.resolvedPath, args.resolvedPath)
        }

        return { content: 'export default' + '`' + args.content + '`', moduleType: 'js' }
      }
    }
  }
}
