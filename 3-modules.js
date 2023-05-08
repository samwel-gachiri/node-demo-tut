/**
 * Common JS , every file is module by default
 * module - Encapsulated file where we only share minimum
 */

const names = require('./4-module-of-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
console.log(data)
require('./7-mind-grenade')

sayHi('anyone')
sayHi(names.john)
sayHi(names.Peter)