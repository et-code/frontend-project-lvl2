const formatData = (diff, formatType) => {
  const format = {
    'stylish': diff,
  };
  return format[formatType];
};

export default formatData;