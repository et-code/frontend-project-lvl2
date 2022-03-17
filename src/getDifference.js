import _ from 'lodash';

const getDifference = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const sortedUniqueKeys = _.sortBy(_.union(keys1, keys2));
  const result = sortedUniqueKeys.map((item) => {
    if (!_.has(file1, item)) {
      return `+ ${item}: ${file2[item]}`;
    }
    if (!_.has(file2, item)) {
      return `- ${item}: ${file1[item]}`;
    }
    if (file1[item] !== file2[item]) {
      return `- ${item} : ${file1[item]}\n\t+ ${item} : ${file2[item]}`;
    }
    return `  ${item}: ${file1[item]}`;
  });
  return `{\n\t${result.join('\n\t')}\n}`;
};

export default getDifference;