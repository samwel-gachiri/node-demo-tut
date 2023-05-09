const { readFile , writeFile} = require("fs");

/**A MODERN APPROACH USING PROMISE
 * we use promisify to a function that has callback
 * ALT:
 * const {readFile, writeFile} = require('fs').promise will perform the same
 */
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


/**
 * THE FUNCTION THAT WILL RETURN A PROMISE
 * -new Promise gives out two parameters resolve and reject which will act as the return values
 * -resolve - returned if no errro
 * -reject -  returned if there is error
 */
// const getFileText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path,'utf8', (error, result) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

/**
 * HOW TO USE FUNCTION THAT RETURNS A PROMISE
 * We use then if there is data 
 * we use catch if there is error
 */
// console.log('first')
// getFileText("./content/first.txt")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

/**
 * IMPLEMENTING A FUNCTION THAT WILL WAIT FOR THE PROMISE
 * We use async() to the function to indicate that it will work asynchronously
 * When we want to get results from a promise we will use await to wait for the promise
 */
const start = async()=>{
    try{
        /**MY HARDCODED METHOD */
        // console.log('text before await')
        // const first = await getFileText('./content/first.txt')
        // console.log(first)

        /**USING MODERN APPROACH
         * 
         */
        const first = await readFilePromise('./content/first.txt', 'utf8')
        const second = await readFilePromise('./content/second.txt', 'utf8')
        console.log(first,second)
        await writeFilePromise('./content/subfolder/grenade-mind.txt', 
        `This is my promise that i willl and i will get you the first and second txt files. I promise
first: ${first}
second:${second}`);
    }catch(error){
        console.error(error)
    }
}
start()

console.log('last')