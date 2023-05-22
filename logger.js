const { Console } = require("console");
const fs = require('fs')
module.exports = { logger: () => {
const logs = new Console({

    stdout: fs.createWriteStream("logs.txt")
    //stderr: fs.createWriteStream("errorlogs.txt"),
  });
}
}