import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from './src/parse.js';
import formatData from './src/formatData.js';
import getDifference from './src/getDifference.js';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), '__fixtures__/', filepath);

const parseData = (filepath) => {
  const fileData = fs.readFileSync(filepath, 'utf8');
  const fileExtension = _.last(filepath.split('.'));
  return parse(fileData, fileExtension);
};

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const file1parsedData = parseData(getAbsolutePath(filePath1));
  const file2parsedData = parseData(getAbsolutePath(filePath2));
  const diff = getDifference(file1parsedData, file2parsedData);
  return formatData(diff, format);
};

export default genDiff;