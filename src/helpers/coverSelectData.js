const coverSelectData = (array) => {
  let result = [];
  array.forEach((item) => result.push(item.value));
  return JSON.stringify(result);
};

export default coverSelectData;
