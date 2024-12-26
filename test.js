const request = require('request');
const fs = require('fs');
var url = "http://185.193.66.4/tre/fn_1.tre";
var file = fs.createWriteStream("C:\\Force_Nomad\fn_1.tre");
request(url).on('error', err => {
    process.send("download error " + err);
    file.close();
    fs.unlink(dest);
    if (cb) cb(err.message);
})
.on('close', e=>console.log('done'))
.pipe(file);
