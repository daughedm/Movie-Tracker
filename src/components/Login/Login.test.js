import Login from './Login';
import React from 'react';
import { shallow } from 'enzyme';

describe('Login', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Login />);

    expect(wrapper).toMatchSnapshot();
  });
});