//GLOBAL VARIABLES
/**
 * __dirname = The name of the current directory
 * __filename = The name of the current file
 * require = functions to use modules (commonJS)
 * module = Infor about current module(file)
 * process = Infor about the env where the program is being executed
 */

console.log(process);

/**
 * Installing globally by use of npm install -g <package name>
 *   
 */

const _ = require("lodash")

const items = [1,[2,[3,[4]]]]

const newItem  = _.flattenDeep(items)
console.log(newItem)