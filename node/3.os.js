const os = require('os');
const user = os.userInfo();
console.log(user);
console.log(`System up time is ${os.uptime}`);
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
};
console.log(currentOS);