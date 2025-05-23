module.export = {
  root: true,
  extends: ['@nuxtjs/eslint-config-typescript'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'no-redeclare': 'off',
    'import/named': 'off',
  },
}
