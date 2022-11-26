const chalk = require('chalk');

export const color = {
  success: chalk.bold.hex('#0EF15D'),
  error: chalk.bold.hex('#E4271B'),
  warning: chalk.bold.hex('#FFA500'),
  info: chalk.hex('#A020F0'),
  outgoingRequest: chalk.hex('#0560fc'),
  incomingRequest: chalk.hex('#fcf805'),
  request: chalk.hex('#0560fc'),
  response: chalk.hex('#fcf805')
};