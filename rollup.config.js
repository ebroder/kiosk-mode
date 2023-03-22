import ts from 'rollup-plugin-ts';
import { terser } from 'rollup-plugin-terser';

export default {
    plugins: [
        ts({
            browserslist: ["last 2 versions", "not dead", "> 0.2%"]
        }),
        terser({
            output: {
                comments: false
            }
        })
    ],
    input: 'src/kiosk-mode.ts',
    output: [
        {
            file: 'dist/kiosk-mode.js',
            format: 'iife'
        }
    ]
};