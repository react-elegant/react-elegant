module.exports = {
  "root":true,
    "env": {
        "jest": true,   // 这样jest 里的全局变量就不会报错了
        "node": true,
    },
    "parser": "babel-eslint",
    "globals": {
      window: true,
      document: true,
    },      // 加这个可以定义你自己的全局变量
    "extends": "airbnb",
    rules: {
      "no-console": 0,    // console还是需要的
      "no-plusplus": 0,   // 可以使用i++
      "react/prefer-stateless-function": 0,
      "import/extensions": 0,
      "no-confusing-arrow": 0,
    }
};
