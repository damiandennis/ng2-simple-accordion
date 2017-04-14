export default {
  entry: 'dist/accordion.module.js',
  dest: 'dist/bundles/ng2-accordion.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng2.accordion',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/forms': 'ng.forms',
    '@angular/common': 'ng.common'
  }
}
