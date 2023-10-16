
const {readFileSync,writeFileSync} = require(`fs`);

const textFile = readFileSync("./assets/first.txt","utf-8");
console.log(textFile);
writeFileSync(`./assets/second.txt`,`This is second file and it is created in 5.fs.js file for testing writeFileSync and first one has this text ::${textFile}`);