module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        _: true,
        $: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['prettier'],
    rules: {
        'no-debugger': 0,
        'no-unused-vars': [
            1,
            {
                argsIgnorePattern: 'res|next|^err'
            }
        ],
        'arrow-body-style': [2, 'as-needed'],
        'no-param-reassign': [
            2,
            {
                props: false
            }
        ],
        'no-console': 0,
        'import/prefer-default-export': 0,
        import: 0,
        'func-names': 0,
        'space-before-function-paren': 0,
        'comma-dangle': 0,
        'max-len': 0,
        'import/extensions': 0,
        'no-underscore-dangle': 0,
        'consistent-return': 0,
        'react/display-name': 1,
        'react/react-in-jsx-scope': 0,
        'react/prefer-stateless-function': 0,
        'react/forbid-prop-types': 0,
        'react/no-unescaped-entities': 0,
        'jsx-a11y/accessible-emoji': 0,
        'jsx-a11y/label-has-for': 0,
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx']
            }
        ],
        radix: 0,
        semi: [2, 'always'],
        'no-shadow': [
            2,
            {
                hoist: 'all',
                allow: ['resolve', 'reject', 'done', 'next', 'err', 'error']
            }
        ],
        'prettier/prettier': [
            'error',
            {
                printWidth: 120,
                tabWidth: 2,
                semi: true
            }
        ],
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/alt-text': 'off',
        'jsx-a11y/anchor-is-valid': [
            'warn',
            {
                aspects: ['invalidHref']
            }
        ]
    }
};
