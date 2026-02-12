// fs module --> it is a core module , with the help of this you can create update delete or read a file easily

import fs from 'fs';

//1) create a file using fs module;

// fs.writeFileSync('trial.pdf' , 'this is dummy text');
// fs.writeFileSync('trial.js' , 'console.log("hello")');


//2) read file --> 
// let ans = fs.readFileSync('index.html' , 'utf-8')
// console.log(ans)

//3) rename a file --> 
// fs.renameSync('trial.pdf' , 'trialNew.pdf')

//4)add content to existing file --> append method
// fs.appendFileSync('trialNew.pdf' , ' this is an extra text')

//5)delete a file --> unlink method
// fs.unlinkSync('index.html')

//6) create a folder --> mkdir
// fs.mkdirSync('newFolder')





