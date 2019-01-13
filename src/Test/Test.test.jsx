import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
// import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Test from './Test';

Enzyme.configure({ adapter: new Adapter() });

describe('react的测试', () => {
  test('测试1', () => {
    const wrapper = shallow(<Test />);
    expect(wrapper.find('.wraper')).toHaveLength(1);
  });
});
