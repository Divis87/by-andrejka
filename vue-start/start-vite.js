// start-vite.js
const { createServer } = require('vite');
const path = require('path');

async function startVite() {
  const vite = await createServer({
    configFile: path.resolve(__dirname, './vite/vite.config.js'),
  });

  await vite.listen();
}

startVite();
