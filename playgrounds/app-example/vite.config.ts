import { AliasOptions, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // const env = loadEnv(mode, __dirname, '')

  // in development mode, make these sibling packages in a monorepo as source dependencies.
  const aliases: AliasOptions =
    mode === 'development'
      ? [{ find: /^@webee\/demotopic-([^\/]+)(\/src)?/, replacement: path.resolve(__dirname, '../../packages/$1/src') }]
      : [{ find: /^@webee\/demotopic-([^\/]+)\/src/, replacement: path.resolve(__dirname, '../../packages/$1/dist') }]
  return {
    resolve: {
      alias: [...aliases],
    },
    plugins: [react()],
  }
})
