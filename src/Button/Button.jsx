import React from 'react';
import PropTypes from 'prop-types';


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
      <button onClick={click} type="button" className="test">
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
