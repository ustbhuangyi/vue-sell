更新说明
===================


使 vue-sell 项目适配最新的 vue-cli

----------


更新内容
-------------


#### 1.安装 vue-resource better-scroll
```
cnpm install vue-resource better-scroll --save
```

#### 2.安装stylus stylus-loader 
```
cnpm install stylus stylus-loader --save-dev
```

#### 3.设置缩略路径
>build/webapck.base.conf.js
```
    {
        'src': path.resolve(__dirname, '../src'),
        'common': path.resolve(__dirname, '../src/common'),
        'components': path.resolve(__dirname, '../src/components')
    }
```

#### 4.修改.eslintrc.js 添加规则
>/.eslintrc.js
```
    'semi': ['error', 'always'],
    'no-tabs': 0,
    'indent': 0,
    'space-before-function-paren': 0
```

#### 5.修改config目录下的index.js文件

修改host
>/config/index.js
```
host: '0.0.0.0'
```


#### 6.使用webpack内置的devServer，设置before()
>/build/webpack.dev.conf.js
```
devServer: {
    before(app) {
      app.get('/api/seller', function(req, res) {
        res.json({
          errno: 0,
          data: seller
        })
      });
      app.get('/api/goods', function(req, res) {
        res.json({
          errno: 0,
          data: goods
        })
      });
      app.get('/api/ratings', function(req, res) {
        res.json({
          errno: 0,
          data: ratings
        })
      });
    },
    ```````
    ```````
}
```


#### 7.在单独的 router.js 路由文件中编写路由
>/src/router/index.js

```js
import Vue from 'vue';
import Router from 'vue-router';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

Vue.use(Router);

const routes = [{
  path: '/',
  redirect: '/goods'
}, {
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}];

export default new Router({
    linkActiveClass: 'active',
    routes
});
```

