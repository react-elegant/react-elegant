module.exports = {
    "env": {
        "jest": true,   // 这样jest 里的全局变量就不会报错了
        "node": true,
    },
    "globals": {},      // 加这个可以定义你自己的全局变量
    "extends": "airbnb",
    rules: {
      "no-console": 0,    // console还是需要的
    }
};
