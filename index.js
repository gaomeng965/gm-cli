/*
 * @Author: your name
 * @Date: 2020-10-30 09:45:19
 * @LastEditTime: 2020-10-30 11:12:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gm-cli/index.js
 */
require('babel-register');
const babel = require('@babel/core');
const babelPresetLatestNode = require('babel-preset-latest-node');

babel.transform('code();', {
  presets: [[babelPresetLatestNode, {
    target: 'current',
  }]],
});

require('babel-polyfill');
require('./src');
