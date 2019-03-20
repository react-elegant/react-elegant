import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
// import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Button from './Button';

Enzyme.configure({ adapter: new Adapter() });

describe('react的测试', () => {
  test('测试1', () => {
    const wrapper = shallow(<Button>hello</Button>);
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
