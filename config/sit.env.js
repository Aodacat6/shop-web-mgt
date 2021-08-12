module.exports = {
  // NODE_ENV: '"production"',
  // ENV_CONFIG: '"sit"',
  // BASE_API: '"http://shop-api.onlythinking.com/shop_test"',
  // APP_CONFIG:{
  //   name:'"测试环境应用"',
  //   baseUrl: '"http://shop-api.onlythinking.com/shop_test"',
  //   wsUrl: '"ws://shop-api.onlythinking.com/shop_test/ws"'
  // }
  NODE_ENV: '"production"',
  ENV_CONFIG: '"sit"',
  //这里的ip必须是这个，也就是浏览器想公网请求这个地址，能被nginx拦截到的
  BASE_API: '"https://www.damiaostation.top/shop"',
  APP_CONFIG: {
    name: '"开发环境应用"',
    baseUrl: '"https://www.damiaostation.top/shop"',
    wsUrl: '"wss://www.damiaostation.top/shop/ws"'
  }
}
