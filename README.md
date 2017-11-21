# vue-sell

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# server at localhost:8088
npm run server

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 更新内容

``` bash
# 1.安装vue-resource  better-scroll
cnpm install vue-resource better-scroll --save


# 2.安装stylus stylus-loader 
cnpm install stylus stylus-loader --save-dev


# 3.build目录webpack.base.conf.js   修改alias为
    {
        'src': path.resolve(__dirname, '../src'),
        'common': path.resolve(__dirname, '../src/common'),
        'components': path.resolve(__dirname, '../src/components')
    }

# 4.修改.eslintrc.js 添加规则
    'semi': ['error', 'always'],
    'no-tabs': 0,
    'indent': 0,
    'space-before-function-paren': 0




# 5.http://eslint.org/docs/rules/no-multiple-empty-lines  Too many blank lines at the end of file. Max of 0 allowed src\App.vue:52:1   App.vue报错

.eslintrc.js 添加规则
    'no-multiple-empty-lines': ["error", { "max": 2, "maxBOF": 1}]



# 6.修改config目录下的index.js文件

设置代理 
    proxyTable: {
            '/api': 'http://localhost:8088'
        },
修改host: '0.0.0.0'



# 7.修改dev-server.js文件，现在只负责后端数据的传输
删除webpack依赖，修改port为8088


# 8.路由栏     商品 评论 商家   的下划线消失了
修改App.vue文件样式 .tab 下 将
border-1px(rgba(7, 17, 27, 0.1))
移到注释
//border-bottom: 1px solid rgba(7, 17, 27, 0.1)
之前
解决问题


# 9.从App.vue提取路由 单独放到router的index.js中
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
