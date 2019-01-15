import React from 'react';
import PropTypes from 'prop-types';

class Test extends React.Component {
  static defaultProps = {
    onButtonClick: () => {},
  }

  componentDidMount() {
    console.log('2');
  }

  render() {
    const {
      onButtonClick,
    } = this.props;
    return (
      <div className="wraper">
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <button onClick={onButtonClick} type="button">点我</button>
      </div>
    );
  }
}

Test.propTypes = {
  onButtonClick: PropTypes.func,
};

export default Test;
