import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/main.js',
    output: {
        file: "public/main.js",
        format: 'iife',
        inlineDynamicImports: true, //Necessary for jspdf
    },
    plugins: [ nodeResolve(), commonjs() ]
};