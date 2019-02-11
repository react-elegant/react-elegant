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

class Test extends React.Component {
  static defaultProps = {
    click: () => { },
  }

  render() {
    const {
      text,
      click,
    } = this.props;
    return (
      <Button onClick={click} type="button">
        {text}
      </Button>
    );
  }
}

Test.propTypes = {
  text: PropTypes.string.isRequired, // 按钮文字
  click: PropTypes.func, // 点击事件
};

export default Test;
