module.exports = {
  
  presets: [
    ['@vue/app', {
      polyfills: [
        'es6.promise',
        'es6.symbol'
      ]
    }]
  ],
  plugins: [
    [
      "syntax-dynamic-import",
    ],
    [ 'import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']]
}
