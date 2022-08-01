const { execSync } = require('child_process');
const fs = require('fs');

async function pullorclone() {
  return new Promise((resolve, rejected) => {
    if (fs.existsSync('FTC-Game'))
    {
      execSync('cd FTC-Game && git pull');
      resolve("A git pull was performed");
    }
    else
    {
      execSync(`git clone https://github.com/Blueberry-Jam-Games/FTC-Game.git`);
      resolve("A git clone was preformed");
    }
    console.log("done");
  });
}

async function runDoxygen() {
  return new Promise((resolve, rejected) => {
    try {
      execSync("C:\\Users\\RAZER\\doxygen\\bin\\doxygen.exe Doxyfile");
      resolve("Doxygen ran well")
    } catch (error) {
      rejected(error);
    }
  })
}

async function testFunc() {
  const pulldata = await pullorclone();
  const doxygendata = await runDoxygen();
  return doxygendata;
}


module.exports = {testFunc}