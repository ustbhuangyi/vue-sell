更新说明
===================


使vue-sell项目适配最新的vue-cli

----------


更新内容
-------------


####1.安装vue-resource  better-scroll
```
cnpm install vue-resource better-scroll --save
```

####2.安装stylus stylus-loader 
```
cnpm install stylus stylus-loader --save-dev
```

####3.设置缩略路径
>build/webapck.base.conf.js
```
    {
        'src': path.resolve(__dirname, '../src'),
        'common': path.resolve(__dirname, '../src/common'),
        'components': path.resolve(__dirname, '../src/components')
    }
```

####4.修改.eslintrc.js 添加规则
>/.eslintrc.js
```
    'semi': ['error', 'always'],
    'no-tabs': 0,
    'indent': 0,
    'space-before-function-paren': 0
```



####5.http://eslint.org/docs/rules/no-multiple-empty-lines  Too many blank lines at the end of file. Max of 0 allowed src\App.vue:52:1   App.vue报错

.eslintrc.js 添加规则
>/.eslintrc.js
```
    'no-multiple-empty-lines': ["error", { "max": 2, "maxBOF": 1}]
```


####6.修改config目录下的index.js文件

修改host
>/config/index.js
```
host: '0.0.0.0'
```


####7.删除dev-server.js文件，使用webpack内置的devServer，设置before()
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


####8.路由栏     商品 评论 商家   的下划线消失了
修改文件样式
>/src/App.vue
 
 将.tab 选择器下的
```
border-1px(rgba(7, 17, 27, 0.1))
```
移到注释
```
//border-bottom: 1px solid rgba(7, 17, 27, 0.1)
```
之前


####9.从App.vue提取路由
>/src/router/index.js
