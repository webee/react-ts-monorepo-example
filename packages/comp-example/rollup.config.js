import { createRequire } from 'module'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import terser from '@rollup/plugin-terser'
import autoprefixer from 'autoprefixer'
import del from 'rollup-plugin-delete'
import dts from 'rollup-plugin-dts'

const require = createRequire(import.meta.url)
const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: packageJson.name,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      del({ targets: 'dist', verbose: true }),
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.build.json', useTsconfigDeclarationDir: true }),
      postcss({
        plugins: [autoprefixer()],
        sourceMap: true,
        minimize: true,
        modules: true,
      }),
      terser(),
    ],
  },
  {
    input: 'dist/dts/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    external: [/\.css$/u],
    plugins: [dts(), del({ targets: ['dist/dts'], hook: 'buildEnd', verbose: true })],
  },
]
