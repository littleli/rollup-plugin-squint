import test from 'ava'
import {rollup} from 'rollup'

import squint from '../index.mjs'

const opts = {format:'es'};

test('basics', async t => {
    const bundle = await rollup({
        input: 'test/basics.cljs',
        plugins: [squint()]
    })
    const gen = await bundle.generate(opts)
    t.snapshot(gen.output[0]?.code)
})

test('async', async t => {
    const bundle = await rollup({
        input: 'test/async.cljs',
        plugins: [squint()]
    })
    const gen = await bundle.generate(opts)   
    t.snapshot(gen.output[0]?.code) 
})
