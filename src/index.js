/*
 * @Author: your name
 * @Date: 2020-10-30 09:48:50
 * @LastEditTime: 2020-11-02 15:39:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gm-cli/src/index.js
 */
// colors console.log 文本添加字体颜色, 美观
require('colors');

// 接收命令行参数, 提供基础信息提示功能
const commander = require('commander');

// 内部模块
// import { existsSync } from 'fs';
// import { resolve } from 'path';
// import { version } from '../package.json';
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
      你输入了未知指令, 小哥哥我已经受不了挂了...
    `.red,
  );
  process.exit(-1);
}
