# Snapshot report for `test/bundle_test.mjs`

The actual snapshot is saved in `bundle_test.mjs.snap`.

Generated by [AVA](https://avajs.dev).

## basics

> Snapshot 1

    `import 'squint-cljs/core.js';␊
    ␊
    var unit = function () {␊
    return "unit";␊
    };␊
    var unary = function (a) {␊
    return (a) * (a);␊
    };␊
    var binary = function (a, b) {␊
    return (a) + (b);␊
    };␊
    var ternary = function (a, b, c) {␊
    return (a) + ((b) - (c));␊
    };␊
    var priv = function (_) {␊
    return (1) + (2);␊
    };␊
    console.log(priv());␊
    ␊
    export { binary, ternary, unary, unit };␊
    `

## async

> Snapshot 1

    `import 'squint-cljs/core.js';␊
    ␊
    var async_unary = async function (a) {␊
    return (a) + (1);␊
    };␊
    var async_binary = async function (a, b) {␊
    return (b) - (a);␊
    };␊
    ␊
    export { async_binary, async_unary };␊
    `
