"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const { execSync } = require('node:child_process');
const node_child_process_1 = require("node:child_process");
const Master_1 = require("./Master");
//execSync(Command, { stdio: 'inherit' });
function runCommand(fname) {
    let file = __dirname + '/' + fname;
    const command = `node ${file}`;
    try {
        (0, node_child_process_1.execSync)(command, { stdio: 'inherit' });
        console.log(`Successfully ran ${file}`);
    }
    catch (error) {
        console.error(`Failed to run ${file}`);
    }
}
function runMaster(urlFile) {
    // let file:string = __dirname+`//`+fname;
    //const command = `node ${file} ${urlFile}`
    // console.log(`running to test ${urlFile}`);
    try {
        //execSync(command, { stdio: 'inherit' });
        (0, Master_1.Main)(urlFile);
        //console.log(`Successfully ran ${urlFile}`);
    }
    catch (error) {
        //console.error(`Failed to run ${urlFile}`) ; 
    }
}
var n = 0; //root command loc
//while(n<3){
//n++;
//        console.log(`\n argument ${n} is ${process.argv[n]}`);
//        if (n>5){       console.error(`Failed to run self`) ;
//process.exit(1);
//}
//}
try {
    while (process.argv[n] != __filename) {
        //console.log(`${process.argv[n]}`);
        n++;
    }
    //console.log(`file is ${process.argv[n]}`);
    n = n + 1;
    //console.log(`dir is ${__dirname} ${n}`);
}
catch (error) {
    console.error(`Failed to run program`);
    process.exit(1);
}
const commandString = process.argv[n];
if (commandString == null) {
    console.error(`Failed to run, invalid arguments`);
    process.exit(0);
}
if (commandString == 'install') {
    try {
        //execSync(`git clone https://github.com/IAmDarkMeadow/CS45000-ECE46100 `, { stdio: 'inherit' });
        //  console.log(`install to ${__dirname}`);
        require("./Install");
        runCommand('Install.js');
    }
    catch (error) {
        console.error(`Error`);
    }
}
else if (commandString == 'test') {
    runCommand('TestRun.js');
}
else {
    const url = process.argv[n];
    //require("./Master");
    runMaster(url);
}
//# sourceMappingURL=run.js.map
