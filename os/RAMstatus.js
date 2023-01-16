const os = require('os');
const totalRAM = () => {
    const mem = os.totalmem();
    console.log('Total RAM is available on this machine ' + calculateMemory(mem));
}
const freeRAM = () => {
    const mem = os.freemem();
    console.log('Free RAM is available on this machine ' + calculateMemory(mem));
}
const calculateMemory = (mem) => {
    const GB = mem / (1024 * 1024 * 1024);
    return (' -> ' + GB.toFixed(2) + ' GB');
}
totalRAM();
freeRAM();








