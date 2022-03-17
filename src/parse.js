const parse = (data, extension) => {
  const parsers = {
    'json': JSON.parse(data),
  };
  return parsers[extension];
};

export default parse;