module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'ignores']
      }
    ],
    indentation: 'tab',
    'number-leading-zero': null,
    'unit-whitelist': ['em', 'rem', 's']
  }
}
