import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import { preClass } from '../utils';

class Btn extends React.Component {
  static defaultProps = {
    click: () => { },
  }

  render() {
    const {
      click,
      children,
    } = this.props;
    return (
      <button onClick={click} type="button" className={preClass('test')}>
        {children}
      </button>
    );
  }
}

Btn.propTypes = {
  children: PropTypes.node.isRequired,
  click: PropTypes.func, // 点击事件
};

export default Btn;
