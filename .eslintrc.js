// module.exports = {
//     rules: {
//         'no-console': 'off',
//     },
// };
module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    "rules": {
        "no-console": "off"
    },
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "babel-eslint"
    }
}