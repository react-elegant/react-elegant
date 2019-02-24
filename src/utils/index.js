import classNames from 'classnames';
import config from '../config';

export const preClass = (classObj) => {
  if (typeof classObj !== 'object') {
    throw new TypeError('class is illegal');
  }
  const classStr = classNames(classObj);
  return classStr.split(/\s+/g).map((item) => {
    return `${config.prefix}${item}`;
  }).join(' ');
};
