### 命名
**文件夹**
`中划线`

**文件**
`中划线`

**组件**
`大驼峰`

**函数**
`小驼峰`

**变量**
`小驼峰`

**常量**
`下划线`

### 组件
见 `blank-template` 规范

### 接口
+ 接口方法在 `api/index` 中定义
+ 接口路径在 `api/path` 中定义
+ 接口请求在 `store/modules` 各模块的 `action` 中定义
+ 接口方法在 `components` 各组件的 `create` 调用

### 异常
+ 登录异常，返回 `expection.vue` 异常页面
+ 接口异常，返回 `expection.vue` 异常页面
+ 数据异常，`throw` 抛出对应错误