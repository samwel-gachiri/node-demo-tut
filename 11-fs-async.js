const { readFile, writeFile } = require("fs");
console.log('start')
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      "./content/result-async",
      `The results are : ${first}, ${second}`,
      { flag: "a" },
      (err, result)=>{
        if(err){
            console.error(err)
            return;
        }
        console.log(result)
        console.log('finished first task')
      }
    );
  });
});
console.log('Move to another task')
