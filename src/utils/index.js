import config from '../config';

export const preClass = (classStr) => {
  if (typeof classStr !== 'string') {
    throw new TypeError('class is illegal');
  }
  return classStr.split(/\s+/g).map((item) => {
    return `${config.prefix}${item}`;
  });
};
