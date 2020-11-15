module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "ignorePatterns": [],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "indent": ["error", 2],
        "keyword-spacing": "error",
        "linebreak-style": "error",
        "quotes": ["error","single"],
        "semi": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": "error"
    }
};
