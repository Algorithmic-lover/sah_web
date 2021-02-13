# vuetest

## Project setup（安装依赖）
```
npm install
```

### Compiles and hot-reloads for development（启动项目）
```
npm run serve
```

### Compiles and minifies for production（编译）
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 技术模块汇总
模块:登录(验证)、职位管理、职称管理、部门管理、操作员管理、员工管理、工资账套管理、员工账套管理、个人中心、在线聊天
前端: Vue、Vue-cli、Vuex、VueRouter、Element-ui、Axios、ES6、JWT令牌、webpack(打包工具)、websocket(在线聊天之类)、
font-awesome(图标)、js-file-download(文件下载)、Vue—chat(git项目)。
后端:SpringBoot、SpringMVC、MybatisPlus、lombok、AutoGenerator()、Swagger(接口文档)、SpringSecurity、JWT、
captcha(图形验证码)、Redis(作为项目的缓存使用)、EasyPOI(文档导入及导出)、RabbitMQ(消息队列,作异步处理)、Mail、
WebSocket、FastDFs(文件服务器,存放静态资源)。
### 后端接口
#### LoginController
1.GET: 获取当前用户信息
    接口地址: /admin/info
    请求方式:GET
    consumes [application/json]
    produces: ["*/*"]
    接口描述:
    请求示例:
    请求参数: 
    响应状态:
    相应内容{ id,name,phone,address,enabled,username,password,userFace,remark,
    roles:[{ id,name,nameZh:系统管理员}],authorities:[{authority:role_admin}],accountNonExpired,...
                }
2.POST: 登录之后返回token(JWT令牌)
3.POST: 退出登录
#### MenuController
1Get:通过用户id查询菜单列表
    url: '/system/config/menu'
    响应内容:
    { id: ...... iConCls(组件):   ;keepAlive(激活,解决创建、销毁频繁的问题):true; requireAuth(权限):true;
    enable:true; .......}
              
#### 