const FtpDeploy = require("ftp-deploy");
const path = require('path');
const ftpDeploy = new FtpDeploy();

module.exports = function (url) {
  return new Promise((resolve, reject) => {
    const projectName = url.split('/');
    const config = {
      user: "admin",
      password: 'fifo0016log',
      host: '10.0.10.37',
      port: 15387,
      localRoot: url,
      remoteRoot: path.join('/web', projectName[projectName.length - 1]),
      include: ["build/*"],
      deleteRemote: true,
    }

    ftpDeploy.deploy(config, function (err, res) {
      if (err) reject(err);
      else resolve(res);
    });
  })

}
