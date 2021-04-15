import chalk from 'chalk';

//index.js
export const dummyMsg = 'Testing dummy page...';

//srcServer.js
export const port = 3000;
export const portUrl = `http://localhost:${port}`;
export const openPort = chalk.greenBright('Open:', chalk.blueBright(portUrl));

//startMsg.js
export const startMsg = chalk.greenBright('Starting', chalk.blueBright('less-css-helper-library') +' in dev mode');
