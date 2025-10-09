const createPhoneNumber = (numbers) => {
  return '(xxx) xxx-xxxx'.replace(/x/g, () => numbers.shift());
};
