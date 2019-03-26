module.exports = {
  "globals": {
      "expect": true,
      "beforeAll": true,
      "afterAll": true
  },
  "env": {
      "browser": true,
      "es6": true,
      "node": true,
      "mocha": true,
      "jest": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
      // indentation
      "indent": [ 2, 4 ],
      "react/jsx-indent-props": [2, 4],

      // spacing
      "space-in-parens": [ 2, "always" ],
      "template-curly-spacing": [ 2, "always" ],
      "array-bracket-spacing": [ 2, "always" ],
      "object-curly-spacing": [ 2, "always" ],
      "computed-property-spacing": [ 2, "always" ],
      "no-multiple-empty-lines": [ 2, { "max": 1, "maxEOF": 0, "maxBOF": 0 } ],
      
      // strings
      "quotes": [ 2, "double", "avoid-escape" ],

      // code arrangement matter
      "no-use-before-define": [ 2, { "functions": false } ],
      
      // make it meaningful
      "prefer-const": 1,
      
      // keep it simple
      "complexity": [ 1, 5 ],

      // line length
      "max-len": [ 1, { code: 200 } ],
      
      // react
      "react/prefer-es6-class": 0,
      "react/jsx-filename-extension": 0,
      "react/jsx-curly-spacing": [ 2, "always" ],
      "react/jsx-indent": [ 2, 4 ],
      
      "no-unused-expressions": [
          "error", 
          {
              "allowTaggedTemplates": true,
              "allowShortCircuit": true,
          }
      ],
      
      "jsx-a11y/anchor-is-valid": [ "error", {
          "components": [ "Link" ],
          "specialLink": [ "to", "hrefLeft", "hrefRight" ],
          "aspects": [ "noHref", "invalidHref", "preferButton" ]
      }],
  },
  "settings": {
      "import/resolver": {
          "node": {
              "paths": ["src"]
          }   
      },
      "react": {
          "pragma": "React",
          "version": "16.3"
      },
  }
}