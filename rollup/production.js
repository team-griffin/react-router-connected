import babel from 'rollup-plugin-babel';
import localResolve from 'rollup-plugin-local-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify-es';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/es/react-router-connected.production.js',
      format: 'es',
    },
    {
      file: 'dist/cjs/react-router-connected.production.js',
      format: 'cjs',
    },
  ],
  plugins: [
    localResolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    uglify(),
  ],
};
