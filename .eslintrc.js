module.exports = {
    "root":true,
    "env": {
        "browser": false,
        "commonjs": true,
        "node": true,
        "es6":true,
        "mocha":true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion":6,
        "sourceType":"script",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console":["error",{
            "allow":["warn","error","info"]
        }]
    },
    "globals":{
        "window":true
    }
};
