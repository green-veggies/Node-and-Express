const {readFile,writeFile} = require("fs");

readFile("./assets/first.txt","utf8",(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile("./assets/second.txt","utf8",(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result 
        writeFile("./assets/fsAsync.txt",`now this is the result :${first},${second}`)
    })
   
}
)