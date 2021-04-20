const proxy = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    proxy('/api1',{
    target: 'http://127.0.0.1:8848/user-service',
    changeOrigin: true,
    pathRewrite: {
      '^/api1': ''
    }
  }))
}


