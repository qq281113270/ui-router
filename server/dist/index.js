require("@babel/polyfill");
require("source-map-support").install();
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("server", [], factory);
	else if(typeof exports === 'object')
		exports["server"] = factory();
	else
		root["server"] = factory();
})(this, function() {
return (() => {
var exports = {};
exports.id = "index";
exports.ids = ["index"];
exports.modules = {

/***/ "./app/config/constant.js":
/*!********************************!*\
  !*** ./app/config/constant.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokenExpires": () => /* binding */ tokenExpires,
/* harmony export */   "port": () => /* binding */ port
/* harmony export */ });
const tokenExpires = 24 * 60 * 60 * 1000;
const port = 3100;

/***/ }),

/***/ "./app/config/db.js":
/*!**************************!*\
  !*** ./app/config/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MYSQL_CONF": () => /* binding */ MYSQL_CONF
/* harmony export */ });
const env = "development"; // 环境参数

let MYSQL_CONF = null;

if (env === 'development') {
  MYSQL_CONF = {
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'admin',
    // charset:'utf8mb4',   //字符集一定要写，否则表情包存储不了
    multipleStatements: true // 是否许一个query中有多个MySQL语句 （默认：false）

  };
}

if (env === 'production') {
  MYSQL_CONF = {
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'admin',
    charset: 'utf8mb4',
    //字符集一定要写，否则表情包存储不了
    multipleStatements: true // 是否许一个query中有多个MySQL语句 （默认：false）

  };
}



/***/ }),

/***/ "./app/config/index.js":
/*!*****************************!*\
  !*** ./app/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MYSQL_CONF": () => /* reexport safe */ _db_js__WEBPACK_IMPORTED_MODULE_0__.MYSQL_CONF,
/* harmony export */   "setExpirationTime": () => /* reexport safe */ _token_js__WEBPACK_IMPORTED_MODULE_2__.setExpirationTime,
/* harmony export */   "port": () => /* reexport safe */ _constant_js__WEBPACK_IMPORTED_MODULE_3__.port,
/* harmony export */   "tokenExpires": () => /* reexport safe */ _constant_js__WEBPACK_IMPORTED_MODULE_3__.tokenExpires
/* harmony export */ });
/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db.js */ "./app/config/db.js");
/* harmony import */ var _redis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redis.js */ "./app/config/redis.js");
/* harmony import */ var _redis_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redis_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _redis_js__WEBPACK_IMPORTED_MODULE_1__) if(["default","MYSQL_CONF"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _redis_js__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.js */ "./app/config/token.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant.js */ "./app/config/constant.js");



 // export const MYSQL_CONF={
//     name:123
// }

/***/ }),

/***/ "./app/config/redis.js":
/*!*****************************!*\
  !*** ./app/config/redis.js ***!
  \*****************************/
/***/ ((module) => {

const env = "development"; // 环境参数

let REDIS_CONF = null;

if (env === 'development') {
  REDIS_CONF = {
    host: '127.0.0.1',
    //地址
    port: '6378',
    // 端口
    options: {
      auth_pass: 123456 // 密码

    }
  };
}

if (env === 'production') {
  REDIS_CONF = {
    host: '127.0.0.1',
    port: '6378',
    options: {
      auth_pass: 123456
    }
  };
}

module.exports = {
  REDIS_CONF
};

/***/ }),

/***/ "./app/config/token.js":
/*!*****************************!*\
  !*** ./app/config/token.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setExpirationTime": () => /* binding */ setExpirationTime
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./app/config/constant.js");

const setExpirationTime = () => {
  const millisecond = new Date().getTime();
  const expiresTime = new Date(millisecond + _constant__WEBPACK_IMPORTED_MODULE_0__.tokenExpires); //一天后过期

  return expiresTime; // da.toUTCString(); //将 1598789234953这种格式的转换成=> "Sat, 29 Aug 2020 12:06:33 GMT"
};

/***/ }),

/***/ "./app/constant/httpCode.js":
/*!**********************************!*\
  !*** ./app/constant/httpCode.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "graphqlError": () => /* binding */ graphqlError,
/* harmony export */   "unsupported": () => /* binding */ unsupported,
/* harmony export */   "unauthorized": () => /* binding */ unauthorized
/* harmony export */ });
const graphqlError = {
  code: 400,
  msg: "请求参数有误，graphql语法错误"
};
const unsupported = {
  //对于当前请求的方法和所请求的资源，请求中提交的实体并不是服务器中所支持的格式，因此请求被拒绝。
  code: 415,
  msg: "服务器已经理解请求，但是拒绝执行它"
};
const unauthorized = {
  // 当前请求需要用户验证. 如果验证不通过则返回401
  code: 401,
  msg: "当前请求需要用户验证."
};


/***/ }),

/***/ "./app/constant/index.js":
/*!*******************************!*\
  !*** ./app/constant/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "graphqlError": () => /* reexport safe */ _httpCode__WEBPACK_IMPORTED_MODULE_0__.graphqlError,
/* harmony export */   "unauthorized": () => /* reexport safe */ _httpCode__WEBPACK_IMPORTED_MODULE_0__.unauthorized,
/* harmony export */   "unsupported": () => /* reexport safe */ _httpCode__WEBPACK_IMPORTED_MODULE_0__.unsupported
/* harmony export */ });
/* harmony import */ var _httpCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpCode */ "./app/constant/httpCode.js");
// 整体输出


/***/ }),

/***/ "./app/controller/user.js":
/*!********************************!*\
  !*** ./app/controller/user.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _service_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/user */ "./app/service/user.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./app/constant/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./app/utils/index.js");




class Controller {
  static async add(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    const parameter = ctx.request.body; // 获取请求参数
    //添加service

    const data = await _service_user__WEBPACK_IMPORTED_MODULE_0__.default.add(ctx, next, parameter);

    const getMessage = data => {
      const {
        status
      } = data;
      const message = {
        1: () => (0,_utils__WEBPACK_IMPORTED_MODULE_2__.merge)(_constant__WEBPACK_IMPORTED_MODULE_1__.unsupported, {
          msg: "该用户名已经被注册过,请重新输入用户名"
        }),
        2: () => (0,_utils__WEBPACK_IMPORTED_MODULE_2__.merge)(_constant__WEBPACK_IMPORTED_MODULE_1__.unsupported, {
          msg: "该手机号码已经被注册过,请重新输入手机号码"
        }),
        3: () => ({
          code: 200,
          msg: "注册成功"
        })
      };
      return message[status]();
    };

    ctx.response.body = getMessage(data);
  }

  static edit(ctx, next) {
    ctx.set("Content-Type", "application/json");
    var page = ctx.params.page; // 获取请求参数
    //添加service
    // const data = userService.list(page);
    // ctx.response.body = "d";
  }

  static async login(ctx, next) {
    // ctx.set("Content-Type", "application/json")
    var parameter = ctx.request.body; // 获取请求参数
    //添加service

    const data = await _service_user__WEBPACK_IMPORTED_MODULE_0__.default.login(ctx, next, parameter);

    const getMessage = data => {
      const {
        status,
        token,
        userInfo
      } = data;
      const message = {
        1: () => (0,_utils__WEBPACK_IMPORTED_MODULE_2__.merge)(_constant__WEBPACK_IMPORTED_MODULE_1__.unauthorized, {
          msg: "用户名错误，请重新输入用户名"
        }),
        2: () => (0,_utils__WEBPACK_IMPORTED_MODULE_2__.merge)(_constant__WEBPACK_IMPORTED_MODULE_1__.unauthorized, {
          msg: "密码错误请重新输入密码"
        }),
        3: () => ({
          code: 200,
          msg: "登录成功",
          data: {
            token,
            userInfo
          }
        })
      };
      return message[status]();
    };

    ctx.response.body = getMessage(data);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);

/***/ }),

/***/ "./app/db/checkTable.js":
/*!******************************!*\
  !*** ./app/db/checkTable.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckTable": () => /* binding */ CheckTable
/* harmony export */ });
/* harmony import */ var _mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mysql */ "./app/db/mysql.js");


const {
  MYSQL_CONF
} = __webpack_require__(/*! ../config/db */ "./app/config/db.js");

class CheckTable {
  constructor() {
    this.tables = [{
      name: "user",
      sql: `CREATE TABLE user(
                    id INT(11) PRIMARY KEY  auto_increment primary key,
                    name VARCHAR(25),
                    phone VARCHAR(200),
                    password VARCHAR(255)
                ) AUTO_INCREMENT=1;
           `
    }, {
      name: 'collect',
      sql: `
         CREATE TABLE collect(
              id INT(11) PRIMARY KEY,
              name VARCHAR(25)  NOT NULL,
              phone INT(11)  NOT NULL,
              user_id INT(11)  NOT NULL,
              FOREIGN KEY(user_id) REFERENCES user(id)
         );
         `
    }, {
      name: 'code',
      sql: `
          CREATE TABLE code(
            id INT(11) PRIMARY KEY,
            name VARCHAR(25),
            collect_id INT(11),
            FOREIGN KEY(collect_id) REFERENCES collect(id),
            user_id INT(11),
            FOREIGN KEY(user_id) REFERENCES user(id)
            );
          `
    }, {
      name: 'role',
      sql: `
        CREATE TABLE role(
          id INT(11) PRIMARY KEY,
          name VARCHAR(25),
          root TINYINT(2)
          );
        `
    }];
    this.init();
  }

  init() {
    this.tables.forEach(table => {
      this.queryTable(table);
    });
  }

  createTable() {}

  async checkTable(data, table) {
    if (data.length == 0) {
      await (0,_mysql__WEBPACK_IMPORTED_MODULE_0__.exec)(table.sql).then(data => {
        console.log("创建表成功");
      }).catch(error => {
        console.log("创建表失败=", error);
      });
    }
  }

  async queryTable(table) {
    const sql = `
           SELECT
           TABLE_NAME FROM INFORMATION_SCHEMA.TABLES
           WHERE TABLE_SCHEMA='${MYSQL_CONF.database}' 
           AND TABLE_NAME= '${table.name}'`;
    await (0,_mysql__WEBPACK_IMPORTED_MODULE_0__.exec)(sql).then(async data => {
      await this.checkTable(data, table);
    }).catch(() => {});
  }

}



/***/ }),

/***/ "./app/db/index.js":
/*!*************************!*\
  !*** ./app/db/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckTable": () => /* reexport safe */ _checkTable__WEBPACK_IMPORTED_MODULE_0__.CheckTable,
/* harmony export */   "connection": () => /* reexport safe */ _mysql__WEBPACK_IMPORTED_MODULE_1__.connection,
/* harmony export */   "exec": () => /* reexport safe */ _mysql__WEBPACK_IMPORTED_MODULE_1__.exec,
/* harmony export */   "addUser": () => /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_2__.addUser,
/* harmony export */   "deleteUser": () => /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_2__.deleteUser,
/* harmony export */   "queryUser": () => /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_2__.queryUser
/* harmony export */ });
/* harmony import */ var _checkTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkTable */ "./app/db/checkTable.js");
/* harmony import */ var _mysql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mysql */ "./app/db/mysql.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./app/db/user.js");




/***/ }),

/***/ "./app/db/mysql.js":
/*!*************************!*\
  !*** ./app/db/mysql.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connection": () => /* binding */ connection,
/* harmony export */   "exec": () => /* binding */ exec
/* harmony export */ });
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ "mysql");
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/index */ "./app/config/index.js");

 // 创建链接对象

const connection = mysql__WEBPACK_IMPORTED_MODULE_0___default().createConnection(_config_index__WEBPACK_IMPORTED_MODULE_1__.MYSQL_CONF); // 统一执行 sql 的函数

const exec = async sql => {
  return await new Promise((resolve, reject) => {
    console.log('sql=', sql);
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(result);
    });
  });
};



/***/ }),

/***/ "./app/db/user.js":
/*!************************!*\
  !*** ./app/db/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUser": () => /* binding */ addUser,
/* harmony export */   "deleteUser": () => /* binding */ deleteUser,
/* harmony export */   "queryUser": () => /* binding */ queryUser
/* harmony export */ });
/* harmony import */ var _mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mysql */ "./app/db/mysql.js");
 // 添加用户

const addUser = async ({
  name,
  phone,
  password
}) => {
  const sql = `insert into user(name,phone,password) values('${name}','${phone}',md5('${password}'));`;
  return await (0,_mysql__WEBPACK_IMPORTED_MODULE_0__.exec)(sql);
}; //查询用户


const queryUser = async (andConditionData = {}, orConditionData = {}, sql) => {
  const andKeys = Object.keys(andConditionData);
  const orKeys = Object.keys(orConditionData);

  if (sql) {
    return await (0,_mysql__WEBPACK_IMPORTED_MODULE_0__.exec)(sql);
  }

  sql = `select * from user where `;
  andKeys.forEach(key => {
    sql += key == "password" ? ` ${key}=md5('${andConditionData[key]}') and` : ` ${key}='${andConditionData[key]}' and`;
  });
  orKeys.forEach(key => {
    sql += key == "password" ? ` ${key}=md5('${orConditionData[key]}') or` : ` ${key}='${orConditionData[key]}' or`;
  });
  sql = andKeys.length >= 1 && orKeys.length == 0 ? sql.substring(0, sql.length - 3) : orKeys.length >= 1 ? sql.substring(0, sql.length - 2) : sql;
  return await (0,_mysql__WEBPACK_IMPORTED_MODULE_0__.exec)(sql);
}; //删除用户


const deleteUser = async id => {
  const sql = `DELETE  FROM user  WHERE id=${id};`;
  return await (0,_mysql__WEBPACK_IMPORTED_MODULE_0__.exec)(sql);
}; // 导出




/***/ }),

/***/ "./app/graphql/schema/index.js":
/*!*************************************!*\
  !*** ./app/graphql/schema/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "user": () => /* binding */ user
/* harmony export */ });
/* harmony import */ var graphql_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql/type */ "graphql/type");
/* harmony import */ var graphql_type__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_type__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./app/graphql/schema/user/index.js");
 //会员模块


const user = {
  userResolvers: _user__WEBPACK_IMPORTED_MODULE_1__.default,
  userSchema: _user__WEBPACK_IMPORTED_MODULE_1__
}; // import user from "./user";
// import home from "./home";

console.log('user=', user);
 // export {
//   user
// }

/***/ }),

/***/ "./app/graphql/schema/user/index.js":
/*!******************************************!*\
  !*** ./app/graphql/schema/user/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hello": () => /* reexport safe */ _schema__WEBPACK_IMPORTED_MODULE_1__.hello,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolvers */ "./app/graphql/schema/user/resolvers.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./app/graphql/schema/user/schema.js");
/* harmony import */ var _schema_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema.graphql */ "./app/graphql/schema/user/schema.graphql");
 // import * as schema from "./schema";
// export * as userType from './schema.graphql'



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_resolvers__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./app/graphql/schema/user/resolvers.js":
/*!**********************************************!*\
  !*** ./app/graphql/schema/user/resolvers.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// Provide resolver functions for your schema fields
const hello = () => 'Hello world!';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mutation: {// createUser,
  },
  query: {
    // user,
    // getUserInfo,
    hello
  }
}); // export default {
//         Query:{
//             hello   
//         }
// }
// export duf {
//     Query:{
//         hello
//     }
// }

/***/ }),

/***/ "./app/graphql/schema/user/schema.js":
/*!*******************************************!*\
  !*** ./app/graphql/schema/user/schema.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hello": () => /* binding */ hello
/* harmony export */ });
const hello = `
type Query {
  hello: String
}
`;

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./app/utils/index.js");
/* harmony import */ var _db_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db/index.js */ "./app/db/index.js");
/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redis */ "./app/redis/index.js");
/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/index */ "./app/routes/index.js");
/* harmony import */ var kill_port__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! kill-port */ "kill-port");
/* harmony import */ var kill_port__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(kill_port__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config */ "./app/config/index.js");








console.log(1);

class App {
  constructor() {
    this.app = new (koa__WEBPACK_IMPORTED_MODULE_1___default())();
    this.init();
  }

  async init() {
    // redis链接
    await this.connectRedis(); // 数据库连接

    await this.connectSql(); //加载路由

    this.addRoute(); // 设置监听端口

    this.listen();
  }

  async connectRedis() {
    await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.promise)((reslove, reject) => {
      _redis__WEBPACK_IMPORTED_MODULE_4__.Redis.connect(() => {
        console.log("Redis 链接成功");
        reslove();
      });
      _redis__WEBPACK_IMPORTED_MODULE_4__.Redis.error(() => {
        console.log("Redis 链接错误");
        reject();
      });
    });
  }

  async connectSql() {
    await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.promise)((reslove, reject) => {
      _db_index_js__WEBPACK_IMPORTED_MODULE_3__.connection.connect(err => {
        if (err) {
          console.log("数据库连失败");
          reject();
          throw err;
        }

        new _db_index_js__WEBPACK_IMPORTED_MODULE_3__.CheckTable();
        console.log("mysql数据库连接成功");
        reslove();
      });
    });
  }

  addRoute() {
    // 导入路由
    new _routes_index__WEBPACK_IMPORTED_MODULE_5__.default(this.app);
  }

  listen() {
    // try {
    //   kill(port, "tcp");
    // } catch (e) {}
    this.server = this.app.listen(_config__WEBPACK_IMPORTED_MODULE_7__.port, () => {
      console.log(`服务器启动成功:http://localhost:${_config__WEBPACK_IMPORTED_MODULE_7__.port}/`);
    });
    this.server.setTimeout(5 * 60 * 1000);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new App());

/***/ }),

/***/ "./app/middleware/common.js":
/*!**********************************!*\
  !*** ./app/middleware/common.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa2_cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa2-cors */ "koa2-cors");
/* harmony import */ var koa2_cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa2_cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var koa_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-cookie */ "koa-cookie");
/* harmony import */ var koa_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_cookie__WEBPACK_IMPORTED_MODULE_2__);




const common = (app, router) => {
  // 处理404
  // app.use(function* (next) {
  //     try {
  //         yield* next;
  //     } catch (e) {
  //         this.status = 500;
  //         this.body = '500';
  //     }
  //     if (parseInt(this.status) === 404) {
  //         this.body = '404';
  //     }
  // });
  //处理500
  // router.get('/', function* (next) {
  //     throw new Error('500');
  // });
  // 添加获取参数中间件
  app.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_0___default()()); // 添加 cookie
  // app.use(cookie());
  // // 添加跨域
  // app.use(async (ctx, next)=> {
  //   console.log(ctx.request.headers)
  // // // if( req.headers.origin.toLowerCase() == "http://www.zhangpeiyue.com"
  // // //     || req.headers.origin.toLowerCase() =="http://127.0.0.1" ) {
  // // //     //设置允许跨域的域名，*代表允许任意域名跨域
  // // //     res.header("Access-Control-Allow-Origin", req.headers.origin);
  // // // }
  //     // ctx.set('Access-Control-Allow-Origin', '*');
  //      //设置允许跨域的域名，*代表允许任意域名跨域
  //      ctx.set("Access-Control-Allow-Origin","*");
  // //允许的header类型
  // ctx.set("Access-Control-Allow-Headers","content-type");
  // //跨域允许的请求方式 
  // ctx.set("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  // //     ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  // //     ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  //      await next();
  // //     if (ctx.method == 'OPTIONS') {
  // //       ctx.body = 200; 
  // //     } else {
  // //       await next();
  // //     }
  //   });
  // 跨域

  app.use(koa2_cors__WEBPACK_IMPORTED_MODULE_1___default()());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (common);

/***/ }),

/***/ "./app/middleware/index.js":
/*!*********************************!*\
  !*** ./app/middleware/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "common": () => /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./app/middleware/common.js");



/***/ }),

/***/ "./app/redis/index.js":
/*!****************************!*\
  !*** ./app/redis/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Redis": () => /* reexport safe */ _redis__WEBPACK_IMPORTED_MODULE_0__.Redis,
/* harmony export */   "redisClient": () => /* reexport safe */ _redis__WEBPACK_IMPORTED_MODULE_0__.redisClient,
/* harmony export */   "RedisClass": () => /* reexport safe */ _redis__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "checkToken": () => /* reexport safe */ _jwt__WEBPACK_IMPORTED_MODULE_1__.checkToken,
/* harmony export */   "createToken": () => /* reexport safe */ _jwt__WEBPACK_IMPORTED_MODULE_1__.createToken,
/* harmony export */   "destroyToken": () => /* reexport safe */ _jwt__WEBPACK_IMPORTED_MODULE_1__.destroyToken,
/* harmony export */   "userIdCheckToken": () => /* reexport safe */ _jwt__WEBPACK_IMPORTED_MODULE_1__.userIdCheckToken,
/* harmony export */   "getUserIfo": () => /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_2__.getUserIfo
/* harmony export */ });
/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redis */ "./app/redis/redis.js");
/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt */ "./app/redis/jwt.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./app/redis/user.js");





/***/ }),

/***/ "./app/redis/jwt.js":
/*!**************************!*\
  !*** ./app/redis/jwt.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createToken": () => /* binding */ createToken,
/* harmony export */   "checkToken": () => /* binding */ checkToken,
/* harmony export */   "destroyToken": () => /* binding */ destroyToken,
/* harmony export */   "userIdCheckToken": () => /* binding */ userIdCheckToken
/* harmony export */ });
/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redis */ "./app/redis/redis.js");
/* harmony import */ var jwt_redis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-redis */ "jwt-redis");
/* harmony import */ var jwt_redis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_redis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./app/utils/index.js");



 // const jwtr = new JWTR(redisClient);
// const { sign, verify, destroy } = jwtr;

const {
  sign,
  verify,
  decode
} = (jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default()); // var secret = "secret";
// var jti = "test";
// var payload = { jti };
// 用用户id验证token

const userIdCheckToken = userId => {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.promise)((resolve, reject) => {
    _redis__WEBPACK_IMPORTED_MODULE_0__.redisClient.keys(`userid_${userId}_*`, (error, value) => {
      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    });
  });
}; //验证token


const checkToken = token => {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.promise)((resolve, reject) => {
    _redis__WEBPACK_IMPORTED_MODULE_0__.redisClient.keys(`userid_*_${token}`, (error, value) => {
      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    });
  });
};

const createToken = async (userInfo = {}, payload = {}) => {
  const {
    id = ""
  } = userInfo; //  产生token

  payload = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.merge)({
    ctime: Date.now() //创建时间

  }, payload); //创建token

  const token = await sign(payload, `${id}`, {
    expiresIn: 0
  }); //获取用户token key

  const userIdTokens = await userIdCheckToken(id);

  if (userIdTokens && userIdTokens.length >= 1) {
    // 删除多余的key实现单点登录
    userIdTokens.forEach(async key => {
      await _redis__WEBPACK_IMPORTED_MODULE_0__.Redis.del(key);
    });
  } // 重新设置 redis 


  await _redis__WEBPACK_IMPORTED_MODULE_0__.Redis.set(`userid_${id}_${token}`, JSON.stringify(userInfo));
  return token;
}; //销毁token


const destroyToken = async tokenOrId => {
  const userIdTokens = (await userIdCheckToken(tokenOrId)) || [];
  const tokens = (await checkToken(tokenOrId)) || [];
  (0,_utils__WEBPACK_IMPORTED_MODULE_3__.merge)(userIdTokens, tokens).forEach(async key => {
    await _redis__WEBPACK_IMPORTED_MODULE_0__.Redis.del(key);
  });
  return "成功删除token";
};



/***/ }),

/***/ "./app/redis/redis.js":
/*!****************************!*\
  !*** ./app/redis/redis.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Redis": () => /* binding */ Redis,
/* harmony export */   "redisClient": () => /* binding */ redisClient,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis */ "redis");
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./app/utils/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./app/config/index.js");




class RedisClass {
  constructor(port, url, options = {}) {
    this.port = port;
    this.url = url;
    this.options = options;
  } //连接


  createRedisClient() {
    this.redisClient = redis__WEBPACK_IMPORTED_MODULE_0___default().createClient(this.port, this.url, this.options);
  } // 连接


  connect(callback = () => {}) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.promise)((resolve, reject) => {
      this.redisClient.on('connect', () => {
        callback();
        resolve();
      });
    });
  }

  ready(callback = () => {}) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.promise)((resolve, reject) => {
      this.redisClient.on('ready', (err, res) => {
        if (err) {
          callback(error);
          reject(error);
        } else {
          resolve(res);
        }
      });
    });
  }

  error(callback = () => {}) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.promise)((resolve, reject) => {
      this.redisClient.on('error', error => {
        callback(error);
        reject(error);
      });
    });
  }

  end(callback = () => {}) {
    this.redisClient.on('end', (err, res) => {
      if (err) {
        callback(error);
        reject(error);
      } else {
        resolve(res);
      }
    });
  }

  set(key, value, callback = () => {}, options = () => {}) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.promise)((resolve, reject) => {
      this.redisClient.set(key, value, (error, res) => {
        if (error) {
          callback(error);
          reject(error);
        } else {
          let keys = Object.keys(options);
          keys.forEach(_key => {
            this.redisClient[_key](key, options[key]);
          });
          callback(res);
          resolve(res);
        }
      });
    });
  }

  get(key, callback = () => {}) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.promise)((resolve, reject) => {
      this.redisClient.get(key, (error, res) => {
        if (error) {
          callback(error);
          reject(error);
        } else {
          resolve(res);
        }
      });
    });
  }

  del(key, callback = () => {}) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.promise)((resolve, reject) => {
      this.redisClient.del(key, (error, res) => {
        if (error) {
          callback(error);
          reject(error);
        } else {
          resolve(res);
        }
      });
    });
  }

  init() {
    this.createRedisClient();
    return this;
  }

}

const Redis = new RedisClass(_config__WEBPACK_IMPORTED_MODULE_2__.REDIS_CONF.port, _config__WEBPACK_IMPORTED_MODULE_2__.REDIS_CONF.host, _config__WEBPACK_IMPORTED_MODULE_2__.REDIS_CONF.options);
Redis.init();
const redisClient = Redis.redisClient;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedisClass);

/***/ }),

/***/ "./app/redis/user.js":
/*!***************************!*\
  !*** ./app/redis/user.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserIfo": () => /* binding */ getUserIfo
/* harmony export */ });
/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt */ "./app/redis/jwt.js");
/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redis */ "./app/redis/redis.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./app/utils/index.js");


 // 获取用户信息

const getUserIfo = async tokenOrId => {
  const userIdTokens = (await (0,_jwt__WEBPACK_IMPORTED_MODULE_0__.userIdCheckToken)(tokenOrId)) || [];
  const tokens = (await (0,_jwt__WEBPACK_IMPORTED_MODULE_0__.checkToken)(tokenOrId)) || [];
  const data = await _redis__WEBPACK_IMPORTED_MODULE_1__.Redis.get((0,_utils__WEBPACK_IMPORTED_MODULE_2__.merge)(userIdTokens, tokens)[0]);
  return data;
};



/***/ }),

/***/ "./app/routes/index.js":
/*!*****************************!*\
  !*** ./app/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var graphql_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql/type */ "graphql/type");
/* harmony import */ var graphql_type__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_type__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-errors */ "http-errors");
/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./app/utils/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant */ "./app/constant/index.js");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tools */ "graphql-tools");
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user */ "./app/routes/user.js");
/* harmony import */ var _middleware_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../middleware/index */ "./app/middleware/index.js");
/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../graphql/schema */ "./app/graphql/schema/index.js");

 // import schema from '../graphql/schema';





 // import Home from "./home";



 // import  userResolvers,  * as userSchema  from '../graphql/schema/user/index.js';
// console.log('userResolvers===',userResolvers)
// console.log('userSchema===',userSchema)
//  Construct a schema, using GraphQL schema language

const typeDefs = `
  type Query {
    hello: String
  }
`; // Provide resolver functions for your schema fields

const resolvers = {
  Query: {
    hello: () => "Hello world!"
  }
};

class Route {
  constructor(app) {
    this.app = app; // this.router = router;

    this.init();
  }

  createRouter() {
    this.router = new (koa_router__WEBPACK_IMPORTED_MODULE_5___default())({
      prefix: "/api" // 给路由统一加个前缀：

    });
  } // 添加中间件


  middleware() {
    // this.app.use(
    //   webpackDevMiddleware(compiler, {
    //     publicPath: config.output.publicPath,
    //   })
    // );
    // 添加 404 500 中间件
    (0,_middleware_index__WEBPACK_IMPORTED_MODULE_8__.common)(this.app, this.router);
  }

  checkToken() {
    this.router.use(async (ctx, next) => {
      // console.log('ctx.request==',ctx.request.header)
      const {
        request: {
          header
        },
        cookies
      } = ctx;
      let token = cookies.get("token") || header.token;
      console.log("token=", token); //   ctx.cookies.set('cid','comedy',{
      //     domain:'localhost',     //写cookie所在的域名
      //     path:'/index',          //写cookie所在的路径
      //     maxAge:60*1000,         //写cookie有效时长
      //     expires:7,
      //     httpOnly:false,
      //     overwrite:false
      // })
      // ctx.body = 'cookie is ok'

      console.log("中间键1开始");
      await next();
      console.log("中间键1结束");
    });
  } // 添加路由


  addRouters() {
    new _user__WEBPACK_IMPORTED_MODULE_7__.default(this.app, this.router); // new Home(this.app,router);

    console.log("checkToken====");
    this.checkToken(); // 查询

    this.router.get("/data", async (ctx, next) => {
      const {
        query: {
          query = "",
          variables = {}
        },
        response,
        request
      } = ctx;
      const {
        body: {// mutation = '', variables = {}
        }
      } = request; // const { query = '', variables = {} } = ctx.query;
      // const { response } = ctx;
      // console.log('schema==',schema)

      console.log("query==", query);
      console.log("variables==", variables);
      console.log("token=====", ctx.cookies.get("token")); // ctx.response.body = {
      //   name:'123'
      // }

      const baseSchema = `
                    schema {
                        query: Query
                        mutation: Mutation
                    }
              `;
      const schema = (0,graphql_tools__WEBPACK_IMPORTED_MODULE_6__.makeExecutableSchema)({
        typeDefs: [// baseSchema,
        typeDefs //   baseSchema,
        //   userType,
        //   songType,
        //   playlistType
        ],
        resolvers: resolvers //  merge(
        //   {},
        //   userResolvers,
        //   songResolvers,
        //   playlistResolvers
        // )

      });
      await (0,graphql__WEBPACK_IMPORTED_MODULE_1__.graphql)(schema, query, {
        ctx,
        next
      }, variables).then(data => {
        const {
          errors
        } = data;
        console.log("data=", data);
        console.log("stringify data=", JSON.stringify(data));

        if (errors) {
          response.body = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.merge)(_constant__WEBPACK_IMPORTED_MODULE_4__.graphqlError, {
            errors
          });
        } else {
          console.log("get==", data); // ctx.response.body = {
          //   name:'123'
          // }

          response.body = data; // JSON.stringify(data);
        }
      }).catch(error => {
        console.log("error==", error);
      });
    }); // //变异
    // this.router.post('/data', async (ctx, next) => {
    //     const {
    //         // query: { query = '', variables = {} },
    //         response,
    //         request,
    //     } = ctx;
    //     const {
    //         body: { mutation = '', variables = {} },
    //     } = request;
    //     await graphql(schema, mutation, { ctx, next }, variables)
    //         .then((data) => {
    //             const { errors } = data;
    //             if (errors) {
    //                 response.body = merge(graphqlError, {
    //                     errors,
    //                 });
    //             } else {
    //                 console.log('post==', data);
    //                 response.body = data;
    //             }
    //         })
    //         .catch((error) => {
    //             console.log('error==', error);
    //         });
    // });
    //  const server = new ApolloServer({ typeDefs, resolvers });
    //  this.router.get('/data',server.getMiddleware())
    // 挂载路由中间件

    this.app.use(this.router.routes()).use(this.router.allowedMethods()); // this.app.use(this.router.routes()).use(this.router.allowedMethods());
  }

  init() {
    // 添加中间件
    this.middleware(); //创建路由

    this.createRouter(); // 添加路由

    this.addRouters();
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Route);

/***/ }),

/***/ "./app/routes/user.js":
/*!****************************!*\
  !*** ./app/routes/user.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _controller_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/user */ "./app/controller/user.js");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);

 // koa 路由中间件

class Route {
  constructor(app, router) {
    this.app = app;
    this.router = router;
    this.init();
  }

  createRouter() {
    this.secondaryRoute = new (koa_router__WEBPACK_IMPORTED_MODULE_1___default())({
      prefix: "/user" // 给路由统一加个前缀：

    });
    return this.secondaryRoute;
  }

  middleware() {// 处理404
    // this.app.use('/user',function* (next) {
    //     try {
    //         yield* next;
    //     } catch (e) {
    //         this.status = 500;
    //         this.body = '500';
    //     }
    //     if (parseInt(this.status) === 404) {
    //         this.body = '404';
    //     }
    // });
  } // 添加路由


  addRouters() {
    // 添加路由
    this.registered();
    this.login();
    this.router.use(this.secondaryRoute.routes()); //挂载二级路由
  }

  init() {
    // 创建路由
    this.createRouter(); // 添加中间件

    this.middleware(); // 添加路由

    this.addRouters();
  }

  registered() {
    // 添加 接口
    this.secondaryRoute.post("/register", _controller_user__WEBPACK_IMPORTED_MODULE_0__.default.add);
  }

  login() {
    // 添加 接口
    this.secondaryRoute.post("/login", _controller_user__WEBPACK_IMPORTED_MODULE_0__.default.login);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Route);

/***/ }),

/***/ "./app/service/user.js":
/*!*****************************!*\
  !*** ./app/service/user.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _db_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/user */ "./app/db/user.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./app/constant/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./app/utils/index.js");
/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redis */ "./app/redis/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./app/config/index.js");






class Service {
  static list(page) {
    console.log('page=', page);
    const dataList = {
      list: [{
        time: '2019-7-10',
        id: 1,
        title: 'this is news 1',
        url: '/news/1'
      }, {
        time: '2019-8-10',
        id: 2,
        title: 'this is news 2',
        url: '/news/2'
      }]
    };
    return dataList.list[page] || {};
  } //注册用户


  static async add(ctx, next, parameter) {
    const {
      username: name,
      phone,
      password
    } = parameter;
    /*
    1 查询用户名是否被注册过，
    2 查询手机号码是否被注册过
    3 如果都没有被注册那么就可以注册
    */

    let userInfo = await this.queryUser({
      name
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;

    if (userInfo && userInfo.id) {
      return {
        status: 1
      };
    }

    userInfo = await this.queryUser({
      phone
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;

    if (userInfo && userInfo.id) {
      return {
        status: 2
      };
    }

    const data = await (0,_db_user__WEBPACK_IMPORTED_MODULE_0__.addUser)({
      name,
      phone,
      password
    });

    if (data) {
      return {
        status: 3
      };
    }
  } // 编辑用户


  static async edit(ctx, next, parameter) {} // 数据库中查询用户


  static async queryUser(...ags) {
    const userData = await (0,_db_user__WEBPACK_IMPORTED_MODULE_0__.queryUser)(...ags);
    return userData;
  } // 登录


  static async login(ctx, next, parameter = {}) {
    const {
      username: name,
      phone,
      password
    } = parameter;
    const {
      request,
      response,
      cookies
    } = ctx;
    /*
    1.先查询用户名是否正确，
    2.查询用户和密码是否正确
    3.创建token,存储到redis中
    4.把用户信息挂载response中
    */

    let userInfo = await this.queryUser({
      name
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;

    if (!userInfo) {
      return {
        status: 1
      };
    }

    userInfo = await this.queryUser({
      password
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;

    if (!userInfo) {
      return {
        status: 2
      };
    }

    userInfo = await (0,_db_user__WEBPACK_IMPORTED_MODULE_0__.queryUser)({
      name,
      password
    });
    userInfo = userInfo.length >= 1 ? userInfo[0] : null;
    /*
    创建 createToken  
    */

    const token = await (0,_redis__WEBPACK_IMPORTED_MODULE_3__.createToken)(userInfo);
    delete userInfo.password;
    ctx.response.userInfo = userInfo;
    console.log('setExpirationTime=', (0,_config__WEBPACK_IMPORTED_MODULE_4__.setExpirationTime)()); // console.log('token=', token);
    // console.log('request=', request);
    // console.log('session=', session);

    console.log('cookies===', cookies); // cookie.expires = false;
    // cookie.maxAge = 5 * 60 * 1000;

    cookies.set('token', token, {
      httpOnly: false,
      overwrite: false // expires: setExpirationTime(),

    });

    if (userInfo) {
      //登录成功
      return {
        status: 3,
        token,
        userInfo
      };
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Service);

/***/ }),

/***/ "./app/utils/common.js":
/*!*****************************!*\
  !*** ./app/utils/common.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "promise": () => /* binding */ promise,
/* harmony export */   "merge": () => /* binding */ merge
/* harmony export */ });
const promise = (fn = () => {}) => {
  return new Promise((resolve, reject) => {
    fn(resolve, reject);
  });
};

const merge = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



/***/ }),

/***/ "./app/utils/index.js":
/*!****************************!*\
  !*** ./app/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "merge": () => /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.merge,
/* harmony export */   "promise": () => /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.promise
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./app/utils/common.js");
 // export * from "./jwt";



/***/ }),

/***/ "./app/graphql/schema/user/schema.graphql":
/*!************************************************!*\
  !*** ./app/graphql/schema/user/schema.graphql ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("type User {\n  id: ID!\n  username: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\ninput UpdatedUser {\n  username: String!\n}\n\ntype Query {\n  getMe: User!\n}\n\ntype Mutation {\n  updateMe(input: UpdatedUser!): User!\n}\n");

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function (updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function (moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	if (unacceptedModules.length > 0) {
		log(
			"warning",
			"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
		);
		unacceptedModules.forEach(function (moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if (!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function (moduleId) {
			if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function (moduleId) {
			return typeof moduleId === "number";
		});
		if (numberIds)
			log(
				"info",
				'[HMR] Consider using the optimization.moduleIds: "named" for module names.'
			);
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function (level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function (level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function (level) {
	logLevel = level;
};

module.exports.formatError = function (err) {
	var message = err.message;
	var stack = err.stack;
	if (!stack) {
		return message;
	} else if (stack.indexOf(message) < 0) {
		return message + "\n" + stack;
	} else {
		return stack;
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?1000":
/*!***********************************************!*\
  !*** ./node_modules/webpack/hot/poll.js?1000 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __resourceQuery = "?1000";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if (true) {
	var hotPollInterval = +__resourceQuery.substr(1) || 0;
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	var checkForUpdate = function checkForUpdate(fromUpdate) {
		if (module.hot.status() === "idle") {
			module.hot
				.check(true)
				.then(function (updatedModules) {
					if (!updatedModules) {
						if (fromUpdate) log("info", "[HMR] Update applied.");
						return;
					}
					__webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
					checkForUpdate(true);
				})
				.catch(function (err) {
					var status = module.hot.status();
					if (["abort", "fail"].indexOf(status) >= 0) {
						log("warning", "[HMR] Cannot apply update.");
						log("warning", "[HMR] " + log.formatError(err));
						log("warning", "[HMR] You need to restart the application!");
					} else {
						log("warning", "[HMR] Update failed: " + log.formatError(err));
					}
				});
		}
	};
	setInterval(checkForUpdate, hotPollInterval);
} else {}


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/polyfill");;

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql");;

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-tools");;

/***/ }),

/***/ "graphql/type":
/*!*******************************!*\
  !*** external "graphql/type" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql/type");;

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("http-errors");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "jwt-redis":
/*!****************************!*\
  !*** external "jwt-redis" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("jwt-redis");;

/***/ }),

/***/ "kill-port":
/*!****************************!*\
  !*** external "kill-port" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("kill-port");;

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");;

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-bodyparser");;

/***/ }),

/***/ "koa-cookie":
/*!*****************************!*\
  !*** external "koa-cookie" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-cookie");;

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-router");;

/***/ }),

/***/ "koa2-cors":
/*!****************************!*\
  !*** external "koa2-cors" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa2-cors");;

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("mysql");;

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redis");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime~index.js");
__webpack_require__.C(exports);
__webpack_require__.X([], "./node_modules/webpack/hot/poll.js?1000");
return __webpack_require__.X([], "./app/index.js");
})();
});
//# sourceMappingURL=index.js.map