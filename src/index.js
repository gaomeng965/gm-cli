/*
 * @Author: your name
 * @Date: 2020-10-30 09:48:50
 * @LastEditTime: 2020-11-05 15:45:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gm-cli/src/index.js
 */
require('colors');
const commander = require('commander');
const { existsSync } = require('fs');
const { resolve } = require('path');
const { version } = require('../package.json');

commander.version(version, '-v, --version')
  .parse(process.argv);

// 获取命令行中传入的第一个参数
const [todo = ''] = commander.args;

// 判断如果 command 目录下是否存在用户输入的命令对应的文件
if (existsSync(resolve(__dirname, `command/${todo}.js`))) {
  require(`./command/${todo}.js`);
} else {
  console.log(
    `
      你输入了未知指令...
    `.red,
  );
  process.exit(-1);
}
