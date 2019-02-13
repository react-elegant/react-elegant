import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
background: 'white';
color: 'palevioletred';

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

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
      <Button onClick={click} type="button" className="test">
        {children}
      </Button>
    );
  }
}

Btn.propTypes = {
  children: PropTypes.node.isRequired,
  click: PropTypes.func, // 点击事件
};

export default Btn;
