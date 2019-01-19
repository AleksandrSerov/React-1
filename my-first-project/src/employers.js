"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employersNames = void 0;
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
var employersNames = [];
exports.employersNames = employersNames;
exports.employersNames = employersNames = employers.filter(function (name) {
  return name.length > 0 && name.length != '';
}).map(function (item) {
  return item.toLowerCase().trim();
});