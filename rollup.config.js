import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
import { terser } from "rollup-plugin-terser"


export default {
  input: './src/scripts/index.js',
  output: [{
    name: 'untapt',
    file: './dist/js/app.min.js',
    format: 'umd'
  }],
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    commonjs(),
    builtins(),
    resolve(),
    terser()
  ]
}
