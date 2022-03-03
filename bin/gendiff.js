#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .version('0.0.0', '-V, --version', 'output the version number')
  .description('Compares two configuration files and show difference.')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>');

program.parse();