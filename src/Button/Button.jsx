import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import { preClass } from '../utils';

class Btn extends React.Component {
  static defaultProps = {
    click: () => { },
    size: 'mid',
    level: 1,
  }

  render() {
    const {
      click,
      children,
      size,
      level,
    } = this.props;

    const classes = preClass({
      [size]: true,
      [`level-${level}`]: true,
    });
    return (
      <button onClick={click} type="button" className={classes}>
        {children}
      </button>
    );
  }
}

Btn.propTypes = {
  children: PropTypes.node.isRequired,
  click: PropTypes.func, // 点击事件
  size: PropTypes.oneOf(['lg', 'mid', 'sm']),
  level: PropTypes.oneOf([0, 1, 2]),
};

export default Btn;
