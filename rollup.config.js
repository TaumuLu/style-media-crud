import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: {
    name: 'getMediaToggle',
    file: 'lib/index.js',
    format: 'umd',
  },
  plugins: [typescript()],
}
