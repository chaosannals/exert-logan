# build logan server


## 修改和配置

注：很多配置写死代码里面了，手动修改后打包。

### 1. Server 配置数据库

Server\src\main\resources\db.properties
这个文件设置数据库配置。

Server\README
这个文件的 SQL DDL 复制后在数据库执行创建表。

### 2. Server 修改跨域

Server\src\main\java\com\meituan\logan\web\filter\CORSFilter.java

### 3. LoganSite 配置 BASE_URL

LoganSite/src/common/api.js
```js
// 改成真实的域名
//const BASE_URL = process.defineEnv.API_BASE_URL;
const BASE_URL = "https://host.logan-server.com";
```

## 构建

```bash
# 构建服务器
# 脚本里面指定了 JAVA_HOME 如果不需要，可以 @rem 去掉。
# 建议使用 java8 ，这个项目有点老。
srvbuild.bat

# 构建控制台
lsbuild.bat
```